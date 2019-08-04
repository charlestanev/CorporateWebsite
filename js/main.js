// Initialize and add the map
function initMap() {
    // Your location
    const loc = {
        lat: 42.136480,
        lng: 24.720800
    };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 13,
        center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({
        position: loc,
        map: map
    });
}