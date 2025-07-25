// Dentro de sw.js

// Escuta por mensagens vindas da página principal
self.addEventListener('message', event => {
    // Verifica se a mensagem é para agendar a notificação
    if (event.data && event.data.type === 'schedule-notification') {

        // Define o tempo de espera (1 minuto = 60000 milissegundos)
        const delay = 10000;

        setTimeout(() => {
            // Exibe a notificação após o tempo de espera
            self.registration.showNotification('𝐇𝐎𝐋𝐎𝐆𝐑𝐀𝐌 𝐂𝐎𝐈𝐍', {
                body: '𝗔𝗧𝗧𝗘𝗡𝗧𝗜𝗢𝗡: 𝗡𝗲𝘄 𝗰𝗿𝘆𝗽𝘁𝗼!!! 𝗧𝗮𝗸𝗲 𝘁𝗵𝗲 𝗰𝗵𝗮𝗻𝗰𝗲 𝘁𝗼 𝗺𝗮𝗸𝗲 𝗮 𝗹𝗼𝘁 𝗼𝗳 𝗺𝗼𝗻𝗲𝘆 𝗮𝗻𝗱 𝗯𝘂𝘆 𝗻𝗼𝘄!!!',
                icon: 'videos/hannah.png' // Opcional: ícone para a notificação
            });
        }, delay);
    }
});
