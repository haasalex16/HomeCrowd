HomeCrowd.Views.HomeShow = Backbone.View.extend ({
  template: JST['home/show'],

  events: {
    'click #addB10Markers': 'addB10',
    'click #addNFLMarkers': 'addNFL',
    'click #addMLBMarkers': 'addMLB',
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
    'click #logo': 'home'
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

  home: function() {
    this.removeMarkers();
    this.$('.NFL_logos').removeClass('show');
    this.$('.b10_logos').removeClass('show');
    this.$('.MLB_logos').removeClass('show');
  },

  addNFL: function() {
    this.removeMarkers();
    this.$('.NFL_logos').removeClass('show');
    this.$('.b10_logos').removeClass('show');
    this.$('.MLB_logos').removeClass('show');
    this.$('.NFL_logos').addClass('show');

    this.addLeagueMarkers('NFL');
  },

  addMLB: function() {
    this.removeMarkers();
    this.$('.NFL_logos').removeClass('show');
    this.$('.b10_logos').removeClass('show');
    this.$('.MLB_logos').removeClass('show');
    this.$('.MLB_logos').addClass('show');
  },

  addB10: function() {
    this.removeMarkers();
    this.$('.NFL_logos').removeClass('show');
    this.$('.b10_logos').removeClass('show');
    this.$('.MLB_logos').removeClass('show');
    this.$('.b10_logos').addClass('show');

    this.addLeagueMarkers('B10');
  },

  addLeagueMarkers: function(league) {

    this.collection.where({league: league}).forEach(function(model) {
      var contentString = this.createContentString(model);
      var lat = model.get('lat');
      var lng = model.get('lng');
      var image_url = model.get('icon');
      this.addMarker(lat, lng, contentString, image_url);
    }.bind(this))

  },

  createContentString: function(model) {
    var contentString = "<div>";
    if (model.get('hc_verified')) {
      var verified = '<img id="verified_logo" src="http://www.sanfrancisco.com/images/common/icon_verified.jpg" alt="" />';
      contentString = contentString.concat(verified);
    };
    contentString = contentString.concat("<p>" +
                        model.get('name') +
                        "</p><p>" +
                        model.get('address') +
                        "</p><p>" +
                        model.get('number') +
                        "</p></div>");
    return contentString;
  },

  addLoyaltyMarkers: function (loyalty) {
    this.removeMarkers();
    this.collection.where({loyalty: loyalty}).forEach(function(model) {
      var contentString = this.createContentString(model);
      var lat = model.get('lat');
      var lng = model.get('lng');
      var image_url = model.get('icon');
      this.addMarker(lat, lng, contentString, image_url);
    }.bind(this))
  },

  addMINN: function () {
    this.addLoyaltyMarkers('University of Minnesota');
  },

  addUW: function () {
    this.addLoyaltyMarkers('University of Wisconsin');
  },

  addUN: function () {
    this.addLoyaltyMarkers('University of Nebraska');
  },

  addMD: function () {
    this.addLoyaltyMarkers('University of Maryland');
  },

  addIOWA: function () {
    this.addLoyaltyMarkers('University of Iowa');
  },

  addR: function () {
    this.addLoyaltyMarkers('Rutgers');
  },

  addPU: function () {
    this.addLoyaltyMarkers('Purdue University');
  },

  addPSU: function () {
    this.addLoyaltyMarkers('Penn State University');
  },

  addOSU: function () {
    this.addLoyaltyMarkers('Ohio State University');
  },

  addNU: function () {
    this.addLoyaltyMarkers('Northwestern University');
  },

  addMSU: function () {
    this.addLoyaltyMarkers('Michigan State University');
  },

  addIU: function () {
    this.addLoyaltyMarkers('University of Indiana');
  },

  addUM: function () {
    this.addLoyaltyMarkers('University of Michigan');
  },

  addUI: function () {
    this.addLoyaltyMarkers('University of Illinois');
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
          url: image_url + "&w=30&h=30",
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

      center: { lat: 40.775273, lng: -73.973041},
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
            { "color": "#c3c3c3" }
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

    $input = this.$('#pac-input')[0];
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push($input);
    //
    var searchBox = new google.maps.places.SearchBox(($input));
  }

});
