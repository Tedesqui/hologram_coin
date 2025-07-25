// sw.js
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

self.addEventListener('message', event => {
  if (event.data === 'scheduleNotification') {
    setTimeout(() => {
      self.registration.showNotification('𝐇𝐎𝐋𝐎𝐆𝐑𝐀𝐌 𝐂𝐎𝐈𝐍', {
        body: '𝗔𝗧𝗧𝗘𝗡𝗧𝗜𝗢𝗡: 𝗡𝗲𝘄 𝗰𝗿𝘆𝗽𝘁𝗼!!! 𝗧𝗮𝗸𝗲 𝘁𝗵𝗲 𝗰𝗵𝗮𝗻𝗰𝗲 𝘁𝗼 𝗺𝗮𝗸𝗲 𝗮 𝗹𝗼𝘁 𝗼𝗳 𝗺𝗼𝗻𝗲𝘆 𝗮𝗻𝗱 𝗯𝘂𝘆 𝗻𝗼𝘄!!!',
        icon: 'videos/hannah.png', // opcional
      });
    }, 10000); // 10 segundos
  }
});
