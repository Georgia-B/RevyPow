export const showLocalNotification = (title, body) => {
    navigator.serviceWorker.ready.then(function (registration) {
        const options = {
            body,
            vibrate: [300]
        };
        registration.showNotification(title, options);
    });
}

export const requestNotificationPermission = async () => {
    const permission = await window.Notification.requestPermission();
    if (permission !== 'granted') {
        throw new Error('Permission not granted for Notification');
    }
    return permission;
}

export const revokePermission = async () => {
    navigator.serviceWorker.ready.then(function (reg) {
        reg.pushManager.getSubscription().then(function (subscription) {
            console.log(reg.pushManager);
            if (!subscription) {
                return false;
            }
            console.log(subscription);
            subscription.unsubscribe().then(function () {
                return true;
            }).catch(function (e) {
                return false;
            })
        })
    });
}

export const hasPermission = async () => {
    const permission = await window.Notification.requestPermission();
    if (permission !== 'granted') {
        console.log("User not subscribed");
        return false;
    } else {
        console.log("User subscribed");
        return true;
    }
}