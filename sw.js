// Dentro de sw.js

// Escuta por mensagens vindas da p�gina principal
self.addEventListener('message', event => {
    // Verifica se a mensagem � para agendar a notifica��o
    if (event.data && event.data.type === 'schedule-notification') {

        // Define o tempo de espera (1 minuto = 60000 milissegundos)
        const delay = 60000;

        setTimeout(() => {
            // Exibe a notifica��o ap�s o tempo de espera
            self.registration.showNotification('Hologram Coin', {
                body: 'ABRA AQUI',
                icon: 'videos/hannah.png' // Opcional: �cone para a notifica��o
            });
        }, delay);
    }
});