self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

self.addEventListener('message', event => {
  if (event.data.action === 'scheduleDelayedNotification') {
    setTimeout(() => {
      self.registration.showNotification('𝐎𝐥Á, 𝐭𝐮𝐝𝐨 𝐛𝐞𝐦?', {
        body: '𝟏𝟎 𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬 𝐝𝐞𝐩𝐨𝐢𝐬 𝐝𝐚 𝐬𝐚í𝐝𝐚 :)',
        icon: 'videos/hannah.png',
        badge: 'videos/hannah.png'
      });
    }, 10000); // 10 segundos
  }
});
