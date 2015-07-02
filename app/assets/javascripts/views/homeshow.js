HomeCrowd.Views.HomeShow = Backbone.View.extend ({
  template: JST['home/show'],

  events: {
    'click #addMarkers': 'addMarkers',
    'click #removeMarkers': 'removeMarkers'
  },

  initialize: function () {
    this.geocoder = new google.maps.Geocoder();
    this.markers = []
  },

  render: function() {
    var view = this.template();
    this.$el.html(view);
    this.showMap();
    return this;
  },

  removeMarkers: function () {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
  },

  addMarkers: function () {
    this.collection.models.forEach(function(model) {
      var contentString = "<div>" + model.get('name') + "</div>"

      var lat = model.get('lat');
      var lng = model.get('lng');
      this.addMarker(lat, lng, contentString);
    }.bind(this))

  },

  addMarker: function (lat, lng, contentString) {
    var myLatlng = new google.maps.LatLng(lat,lng);
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var marker = new google.maps.Marker({
        map: this.map,
        // icon: 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/130.png&w=80&h=80&transparent=true',
        // icon: 'images/mich.png',
        position: myLatlng,
        animation:  google.maps.Animation.DROP,
    });
    this.markers.push(marker);

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(this.map, marker);
    });
  },

  showMap: function() {
    mapOptions = {
      center: { lat: 40.737025, lng: -73.987783},
      zoom: 12,
      styles: [
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            { "color": "#fff2dd" }
          ]
        },{
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            { "color": "#6195ED" }
          ]
        },{
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            { "visibility": "simplified" },
            { "color": "#000000" }
          ]
        },{
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
            { "color": "#808080" }
          ]
        },{
          "featureType": "transit.line",
          "stylers": [
            { "visibility": "off" }
          ]
        }
      ]

    };
    $canvas = this.$('#map-canvas')[0];
    this.map = new google.maps.Map($canvas, mapOptions);
  }

});
