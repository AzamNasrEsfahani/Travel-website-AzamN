// 1) AOS init
AOS.init();
// 2) Glide init
new Glide('.glide', {
  type: 'carousel',
  autoplay: 4000,
  perView: 1
}).mount();
// Leaflet map showing Iran 
var iranBounds = [[25.0, 44.0], [40.0, 63.0]]; // SW lat-lon, NE lat-lon

var map = L.map('mapid');
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

map.fitBounds(iranBounds);

// Optional marker for Tehran
L.marker([35.6892, 51.3890]).addTo(map)
  .bindPopup('Tehran, Iran')
  .openPopup();
