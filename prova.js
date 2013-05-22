function initialize() {
  var myLatlng = new google.maps.LatLng(49.496675,-102.65625);
  var mapOptions = {
    zoom: 4,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var georssLayer = new google.maps.KmlLayer({
    url: 'http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss'
  });
  georssLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
