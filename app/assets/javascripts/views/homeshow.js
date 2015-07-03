HomeCrowd.Views.HomeShow = Backbone.View.extend ({
  template: JST['home/show'],

  events: {
    'click #addUMMarkers': 'addUM',
    'click #addIUMarkers': 'addIU',
    'click #addUIMarkers': 'addUI',
    'click #addMSUMarkers': 'addMSU',
    'click #addNUMarkers': 'addNU',
    'click #addOSUMarkers': 'addOSU',
    'click #addPSUMarkers': 'addPSU',
    'click #addPUMarkers': 'addPU',
    'click #addRMarkers': 'addR',
    'click #addUIOWAMarkers': 'addIOWA',
    'click #addMDMarkers': 'addMD',
    'click #addUNMarkers': 'addUN',
    'click #addUWMarkers': 'addUW',
    'click #addMINNMarkers': 'addMINN',
    'click #removeMarkers': 'removeMarkers'
  },

  addMINN: function () {
    this.removeMarkers();
    this.collection.models.forEach(function(model) {
      if (model.get('loyalty') === 'University of Minnesota') {
        var contentString = "<div>" + model.get('name') + "</div>"
        var lat = model.get('lat');
        var lng = model.get('lng');
        var image_url = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/135.png&w=80&h=80&transparent=true';
        this.addMarker(lat, lng, contentString, image_url);
      }
    }.bind(this))
  },

  addUW: function () {
    this.removeMarkers();
    this.collection.models.forEach(function(model) {
      if (model.get('loyalty') === 'University of Wisconsin') {
        var contentString = "<div>" + model.get('name') + "</div>"
        var lat = model.get('lat');
        var lng = model.get('lng');
        var image_url = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/275.png&w=80&h=80&transparent=true';
        this.addMarker(lat, lng, contentString, image_url);
      }
    }.bind(this))
  },

  addUN: function () {
    this.removeMarkers();
    this.collection.models.forEach(function(model) {
      if (model.get('loyalty') === 'University of Nebraska') {
        var contentString = "<div>" + model.get('name') + "</div>"
        var lat = model.get('lat');
        var lng = model.get('lng');
        var image_url = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/158.png&w=80&h=80&transparent=true';
        this.addMarker(lat, lng, contentString, image_url);
      }
    }.bind(this))
  },

  addMD: function () {
    this.removeMarkers();
    this.collection.models.forEach(function(model) {
      if (model.get('loyalty') === 'University of Maryland') {
        var contentString = "<div>" + model.get('name') + "</div>"
        var lat = model.get('lat');
        var lng = model.get('lng');
        var image_url = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/120.png&w=80&h=80&transparent=true';
        this.addMarker(lat, lng, contentString, image_url);
      }
    }.bind(this))
  },

  addIOWA: function () {
    this.removeMarkers();
    this.collection.models.forEach(function(model) {
      if (model.get('loyalty') === 'University of Iowa') {
        var contentString = "<div>" + model.get('name') + "</div>"
        var lat = model.get('lat');
        var lng = model.get('lng');
        var image_url = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2294.png&w=80&h=80&transparent=true';
        this.addMarker(lat, lng, contentString, image_url);
      }
    }.bind(this))
  },

  addR: function () {
    this.removeMarkers();
    this.collection.models.forEach(function(model) {
      if (model.get('loyalty') === 'Rutgers') {
        var contentString = "<div>" + model.get('name') + "</div>"
        var lat = model.get('lat');
        var lng = model.get('lng');
        var image_url = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/164.png&w=80&h=80&transparent=true';
        this.addMarker(lat, lng, contentString, image_url);
      }
    }.bind(this))
  },

  addPU: function () {
    this.removeMarkers();
    this.collection.models.forEach(function(model) {
      if (model.get('loyalty') === 'Purdue University') {
        var contentString = "<div>" + model.get('name') + "</div>"
        var lat = model.get('lat');
        var lng = model.get('lng');
        var image_url = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/2509.png&w=80&h=80&transparent=true';
        this.addMarker(lat, lng, contentString, image_url);
      }
    }.bind(this))
  },

  addPSU: function () {
    this.removeMarkers();
    this.collection.models.forEach(function(model) {
      if (model.get('loyalty') === 'Penn State University') {
        var contentString = "<div>" + model.get('name') + "</div>"
        var lat = model.get('lat');
        var lng = model.get('lng');
        var image_url = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/213.png&w=80&h=80&transparent=true';
        this.addMarker(lat, lng, contentString, image_url);
      }
    }.bind(this))
  },

  addOSU: function () {
    this.removeMarkers();
    this.collection.models.forEach(function(model) {
      if (model.get('loyalty') === 'Ohio State University') {
        var contentString = "<div>" + model.get('name') + "</div>"
        var lat = model.get('lat');
        var lng = model.get('lng');
        var image_url = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/194.png&w=80&h=80&transparent=true';
        this.addMarker(lat, lng, contentString, image_url);
      }
    }.bind(this))
  },

  addNU: function () {
    this.removeMarkers();
    this.collection.models.forEach(function(model) {
      if (model.get('loyalty') === 'Northwestern University') {
        var contentString = "<div>" + model.get('name') + "</div>"
        var lat = model.get('lat');
        var lng = model.get('lng');
        var image_url = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/77.png&w=80&h=80&transparent=true';
        this.addMarker(lat, lng, contentString, image_url);
      }
    }.bind(this))
  },

  addMSU: function () {
    this.removeMarkers();
    this.collection.models.forEach(function(model) {
      if (model.get('loyalty') === 'Michigan State University') {
        var contentString = "<div>" + model.get('name') + "</div>"
        var lat = model.get('lat');
        var lng = model.get('lng');
        var image_url = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/127.png&w=80&h=80&transparent=true';
        this.addMarker(lat, lng, contentString, image_url);
      }
    }.bind(this))
  },

  initialize: function () {
    this.geocoder = new google.maps.Geocoder();
    this.markers = [];
    this.infowindow = new google.maps.InfoWindow({});
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
    this.markers = [];
  },

  addIU: function () {
    this.removeMarkers();
    this.collection.models.forEach(function(model) {
      if (model.get('loyalty') === 'University of Indiana') {
        var contentString = "<div>" + model.get('name') + "</div>"
        var lat = model.get('lat');
        var lng = model.get('lng');
        var image_url = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/84.png&w=80&h=80&transparent=true';
        this.addMarker(lat, lng, contentString, image_url);
      }
    }.bind(this))
  },

  addUM: function () {
    this.removeMarkers();
    this.collection.models.forEach(function(model) {
      if (model.get('loyalty') === 'University of Michigan') {
        var contentString = "<div>" + model.get('name') + "</div>"
        var lat = model.get('lat');
        var lng = model.get('lng');
        var image_url = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/130.png&w=80&h=80&transparent=true';
        this.addMarker(lat, lng, contentString, image_url);
      }
    }.bind(this))
  },

  addUI: function () {
    this.removeMarkers();
    this.collection.models.forEach(function(model) {
      if (model.get('loyalty') === 'University of Illinois') {
        var contentString = "<div>" + model.get('name') + "</div>"
        var lat = model.get('lat');
        var lng = model.get('lng');
        var image_url = 'http://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/356.png&w=80&h=80&transparent=true';
        this.addMarker(lat, lng, contentString, image_url);
      }
    }.bind(this))
  },

  addMarker: function (lat, lng, contentString, image_url) {
    var myLatlng = new google.maps.LatLng(lat,lng);
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var marker = new google.maps.Marker({
        animation:  google.maps.Animation.DROP,
        map: this.map,
        icon: {
          url: image_url,
          scaledSize: {
            width: 30,
            height: 30
          }
        },
        // icon: 'images/mich.png',
        position: myLatlng,
    });
    this.markers.push(marker);

    google.maps.event.addListener(marker, 'click', function() {
      this.infowindow.close();
      infowindow.open(this.map, marker);
      this.infowindow = infowindow;
    }.bind(this));
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
