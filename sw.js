// sw.js - Service Worker para notificaciones móviles
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  self.registration.showNotification(data.title || 'BODEN', {
    body: data.body || 'Notificación de prueba',
    icon: '/favicon.ico'
  });
});