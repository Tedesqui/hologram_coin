// Dentro de sw.js

// Escuta por mensagens vindas da página principal
self.addEventListener('message', event => {
    // Verifica se a mensagem é para agendar a notificação
    if (event.data && event.data.type === 'schedule-notification') {

        // Define o tempo de espera (1 minuto = 60000 milissegundos)
        const delay = 60000;

        setTimeout(() => {
            // Exibe a notificação após o tempo de espera
            self.registration.showNotification('Hologram Coin', {
                body: 'ABRA AQUI',
                icon: 'videos/hannah.png' // Opcional: ícone para a notificação
            });
        }, delay);
    }
});