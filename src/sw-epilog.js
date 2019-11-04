/* eslint-disable no-restricted-globals */
self.addEventListener('push', function (event) {
    if (event.data) {
        console.log('Push event!! ', event.data.text())
        self.registration.showNotification("Hello push!", { body: event.data.text() })
    } else {
        console.log('Push event but no data')
    }
})