if (!navigator.geolocation) {
  console.error(`Your browser doesn't support Geolocation`);
}

//=======button asking permission to access the user's location================
var button = document.querySelector(".button");

button.onclick = function () {
  var startPos;
  var nudge = document.getElementById("nudge");

  var showNudgeBanner = function () {
    nudge.style.display = "block";
  };

  var hideNudgeBanner = function () {
    nudge.style.display = "none";
  };

  var nudgeTimeoutId = setTimeout(showNudgeBanner, 3000);

  var geoSuccess = function (position) {
    hideNudgeBanner();
    // We have the location, don't display banner
    clearTimeout(nudgeTimeoutId);

    // Do magic with location
    startPos = position;
    document.getElementById("startLat").innerHTML = startPos.coords.latitude;
    document.getElementById("startLon").innerHTML = startPos.coords.longitude;
  };
  var geoError = function (error) {
    switch (error.code) {
      case error.TIMEOUT:
        // The user didn't accept the callout
        showNudgeBanner();
        break;
    }
  };

  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};

//============
var map;
var service;
var infowindow;

function initialize() {
  var spokane = new google.maps.LatLng(-33.8665433,151.1956316);

  map = new google.maps.Map(document.getElementById('map'), {
      center: spokane,
      zoom: 15
    });

  var request = {
    location: spokane,
    radius: '500',
    query: 'restaurant'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}