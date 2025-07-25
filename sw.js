self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  self.clients.claim();
  startNotificationLoop(); // Inicia o loop na ativação
});

function startNotificationLoop() {
  setInterval(() => {
    self.registration.showNotification('𝐇𝐎𝐋𝐎𝐆𝐑𝐀𝐌 𝐂𝐎𝐈𝐍', {
      body: '𝗟𝗶𝗳𝗲 𝗶𝘀 𝗺𝗼𝗿𝗲 𝗳𝘂𝗻 𝘄𝗶𝘁𝗵 𝗖𝗥𝗬𝗣𝗧𝗢. 𝗬𝗼𝘂 𝗮𝗿𝗲 𝗮𝗹𝘄𝗮𝘆𝘀 𝘄𝗲𝗹𝗰𝗼𝗺𝗲!!!',
      icon: 'videos/hannah.png',
      image: 'videos/hannah.png',
      badge: 'videos/hannah.png',
      data: {
        url: 'https://tedesqui.github.io/hologram_coin/'
      }
    });
  }, 30000); // A cada 30 segundos
}

// Ao clicar na notificação
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const urlToOpen = event.notification.data.url;

  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(clientList => {
      for (const client of clientList) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
