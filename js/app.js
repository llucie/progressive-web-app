console.log("Try to register service worker");

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register("/sw.js")
        .then(reg => console.log("Service worker registered", reg))
        .catch(err => console.log("service worker not registered", err));
} else {
    console.error("Browser not compatible with service worker");
}
