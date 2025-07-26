// service-worker.js

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', event => {
  if (event.data && event.data.action === 'schedule-notification') {
    
    // Agenda a notificação para aparecer após 10 segundos
    const notificationDelay = 10000; // 10 segundos

    setTimeout(() => {
      self.registration.showNotification('Hologram Coin', {
        body: 'OLA TUDO BEM',
        icon: 'videos/hannah.png', // Opcional: ícone da notificação
        tag: 'hologram-ola-tag' // Evita notificações repetidas
      });
    }, notificationDelay);
  }
});
