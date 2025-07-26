// service-worker.js

// Evento de instalação do Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker instalado.');
  // Força o novo Service Worker a se tornar ativo imediatamente
  self.skipWaiting();
});

// Evento de ativação do Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker ativado.');
  // Garante que o Service Worker tome controle da página imediatamente
  event.waitUntil(self.clients.claim());
});

// Evento que escuta mensagens vindas da página principal
self.addEventListener('message', event => {
  // Verifica se a ação é a que esperamos ('schedule-notification')
  if (event.data && event.data.action === 'schedule-notification') {
    console.log('Service Worker recebeu a mensagem para agendar notificação.');

    // Agenda a notificação para aparecer após 10 segundos
    const notificationDelay = 10000; // 10 segundos em milissegundos

    setTimeout(() => {
      // Exibe a notificação
      self.registration.showNotification('💎 Hologram Coin 💎', {
        body: 'You have a pending message. Come back to see!',
        icon: 'assets/hannah.png', // Caminho para o ícone da notificação
        badge: 'assets/hannah.png', // Ícone para a barra de status (Android)
        vibrate: [200, 100, 200], // Padrão de vibração
        tag: 'hologram-notification-tag' // Agrupa notificações para não spamar o usuário
      });
      console.log('Notificação exibida!');
    }, notificationDelay);
  }
});
