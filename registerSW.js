if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/pwa-test-repo/sw.js', { scope: '/pwa-test-repo/' })})}