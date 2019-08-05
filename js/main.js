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

// Sticky menu background
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.875;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            },
            1000
        );
    }
});