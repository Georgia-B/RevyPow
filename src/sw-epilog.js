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