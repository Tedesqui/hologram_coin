// api/daily-notification.js
import { kv } from '@vercel/kv';
import webpush from 'web-push';

export default async function handler(request, response) {
    // Configura o web-push com as chaves do ambiente
    webpush.setVapidDetails(
        'mailto:seu-email@exemplo.com',
        process.env.VAPID_PUBLIC_KEY,
        process.env.VAPID_PRIVATE_KEY
    );

    try {
        const keys = [];
        // Itera sobre todas as chaves de inscrição salvas no KV
        for await (const key of kv.scanIterator({ match: 'sub:*' })) {
            keys.push(key);
        }

        if (keys.length === 0) {
            return response.status(200).json({ message: 'No subscriptions to send notifications to.' });
        }

        const subscriptions = await kv.mget(...keys);

        const payload = JSON.stringify({
            title: '𝐇𝐎𝐋𝐎𝐆𝐑𝐀𝐌 𝐂𝐎𝐈𝐍',
            body: '𝗔𝗧𝗧𝗘𝗡𝗧𝗜𝗢𝗡: 𝗡𝗲𝘄 𝗰𝗿𝘆𝗽𝘁𝗼!!! 𝗧𝗮𝗸𝗲 𝘁𝗵𝗲 𝗰𝗵𝗮𝗻𝗰𝗲 𝘁𝗼 𝗺𝗮𝗸𝗲 𝗮 𝗹𝗼𝘁 𝗼𝗳 𝗺𝗼𝗻𝗲𝘆 𝗮𝗻𝗱 𝗯𝘂𝘆 𝗻𝗼𝘄!!!',
            icon: '/assets/hannah.png' // Caminho para um ícone
        });

        const sendPromises = subscriptions.map(sub =>
            webpush.sendNotification(sub, payload).catch(err => {
                // Se uma inscrição for inválida (ex: usuário desinstalou), podemos removê-la
                if (err.statusCode === 410) {
                    const keyToDelete = `sub:${sub.endpoint}`;
                    kv.del(keyToDelete);
                } else {
                    console.error('Failed to send push notification:', err);
                }
            })
        );

        await Promise.all(sendPromises);

        response.status(200).json({ message: `Notifications sent to ${subscriptions.length} subscribers.` });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Failed to send notifications.' });
    }
}