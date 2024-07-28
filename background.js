// Dynamically load gtag.js
(function loadGoogleAnalytics() {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-4MS2HF1JK1';
    script.async = true;
    document.head.appendChild(script);

    script.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-4MS2HF1JK1');
    };
})();

function sendGAEvent(eventCategory, eventAction, eventLabel = null, eventValue = null) {
    if (typeof gtag === 'function') {
        gtag('event', eventAction, {
            'event_category': eventCategory,
            'event_label': eventLabel,
            'value': eventValue
        });
    }
}

sendGAEvent('Extension', 'ButtonClick', 'MainButton');

