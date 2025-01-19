// Initialize Google Maps
function initMap() {
    const mapOptions = {
        center: { lat: 37.7749, lng: -122.4194 }, // Example: San Francisco
        zoom: 15,
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Add click event to place a marker
    google.maps.event.addListener(map, 'click', (event) => {
        new google.maps.Marker({
            position: event.latLng,
            map: map,
            title: 'Selected Parking Spot',
        });
    });
}
