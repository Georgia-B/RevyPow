import { saveSubscription, deleteSubscription } from './dataHelper';

const appServerKey = "BE2Ek7B4pFkyyKz9n6QOETMDX-MhHf34Xh6SJ_l1XhDd_XCjHunBImoVIbPd17ZOZwEWfEQe0ZIT-75K9zsuGd8"

export const requestNotificationPermission = async () => {
    const permission = await window.Notification.requestPermission();
    if (permission !== 'granted') {
        return permission;
    }
    return subscribeUserToPush().then(res => {
        console.log(res)
        return permission;
    });
}

export const subscribeUserToPush = () => {
    return navigator.serviceWorker.ready
        .then(function (registration) {
            const subscribeOptions = {
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(appServerKey)
            };

            return registration.pushManager.subscribe(subscribeOptions);
        })
        .then(function (pushSubscription) {
            return saveSubscription(pushSubscription)
                .then(res => {
                    return pushSubscription;
                });
        });
}

export const revokePermission = async () => {
    return navigator.serviceWorker.ready
        .then(function (reg) {
            return reg.pushManager.getSubscription().then(function (subscription) {
                if (!subscription) {
                    return false;
                }
                subscription.unsubscribe().then(function (response) {
                    return deleteSubscription(subscription)
                        .then(res => {
                            return response;
                        });
                }).catch(function (e) {
                    return false;
                })
            })
        });
}

export const hasPermission = async () => {
    return navigator.serviceWorker.ready
        .then(function (reg) {
            return reg.pushManager.getSubscription().then(function (subscription) {
                if (!subscription) {
                    return false;
                } else {
                    return true;
                }
            })
        });
}

function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}