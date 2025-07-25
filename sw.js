// sw.js

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

self.addEventListener('message', event => {
  if (event.data === 'scheduleNotification') {
    setTimeout(() => {
      self.registration.showNotification('𝐇𝐎𝐋𝐎𝐆𝐑𝐀𝐌 𝐂𝐎𝐈𝐍', {
        body: '𝗟𝗶𝗳𝗲 𝗶𝘀 𝗺𝗼𝗿𝗲 𝗳𝘂𝗻 𝘄𝗶𝘁𝗵 𝗖𝗥𝗬𝗣𝗧𝗢. 𝗬𝗼𝘂 𝗮𝗿𝗲 𝗮𝗹𝘄𝗮𝘆𝘀 𝘄𝗲𝗹𝗰𝗼𝗺𝗲!!!',
        icon: 'videos/hannah.png', // ícone pequeno
        image: 'videos/hannah.png', // ícone grande (visível em alguns navegadores)
        badge: 'videos/hannah.png', // ícone da notificação
        data: {
          url: 'https://tedesqui.github.io/hologram_coin/' // URL que será aberta
        }
      });
    }, 10000); // 10 segundos
  }
});

// Quando o usuário clica na notificação
self.addEventListener('notificationclick', event => {
  event.notification.close();

  const urlToOpen = event.notification.data.url;

  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(clientList => {
      // Se já estiver aberto, foca
      for (const client of clientList) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      // Senão, abre nova aba
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
