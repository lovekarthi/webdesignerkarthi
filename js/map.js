function myMap() {
  var myCenter = new google.maps.LatLng(10.7656082, 79.8423888);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 10};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);

  // Zoom to 10 when clicking on marker
  google.maps.event.addListener(marker,'click',function() {
    map.setZoom(10);
    map.setCenter(marker.getPosition());
  });
}