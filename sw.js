self.addEventListener('install', event => {
    console.log('service worker has been installed');
});

// activate event
self.addEventListener('activate', evt => {
    console.log("Service worker has been activated")
});