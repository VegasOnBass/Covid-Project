// Note: This requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow, service;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.6082, lng: -74.2776},
    zoom: 14,
  });
  infoWindow = new google.maps.InfoWindow();

  var request = {
    location: { lat: 40.6082, lng: -74.2776},
    radius: '500',
    query: 'covid testing'
  };


  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          var newRequest = {
            location: pos,
            radius: '500',
            query: 'covid testing'
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
          service.textSearch(newRequest, callback);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        createMarker(results[i]);
      }
    }
}

function createMarker(place) {

    const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map
    });

    google.maps.event.addListener(marker, "click", () => {
        const content = document.createElement("div");
        const nameElement = document.createElement("h2");

        console.log(place)

        nameElement.textContent = place.name;
        content.appendChild(nameElement);

        const placeAddressElement = document.createElement("p");

        placeAddressElement.textContent = place.formatted_address;
        content.appendChild(placeAddressElement);
        infoWindow.setContent(content);
        infoWindow.open(map, marker);
      });
}