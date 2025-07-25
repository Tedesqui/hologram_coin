// api/subscribe.js
import { kv } from '@vercel/kv';

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const subscription = request.body;
        // Usa o endpoint como uma chave �nica para a inscri��o
        const subscriptionKey = `sub:${subscription.endpoint}`;

        // Salva a inscri��o no Vercel KV
        await kv.set(subscriptionKey, subscription);

        response.status(201).json({ message: 'Subscription saved.' });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Failed to save subscription.' });
    }
}