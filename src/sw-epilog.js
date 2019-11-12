/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
self.addEventListener('push', function (event) {
    if (event.data) {
        self.registration.showNotification("Morning snow report",
            {
                body: event.data.text(),
                icon: '../logo.png',
                badge: '../logo.png'
            })
    }
})

self.addEventListener('notificationclick', function (event) {
    var notification = event.notification;
    var action = event.action;

    if (action === 'close') {
        notification.close();
    } else {
        event.waitUntil(clients.matchAll({
            type: "window"
        }).then(function (clientList) {
            for (var i = 0; i < clientList.length; i++) {
                var client = clientList[i];
                if (client.url === '/' && 'focus' in client) {
                    notification.close();
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                notification.close();
                return clients.openWindow('/');
            }

        }));
    }
});