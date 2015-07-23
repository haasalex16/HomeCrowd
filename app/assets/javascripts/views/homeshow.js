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
    'click #logo': 'home',
    'click #addNFLbalMarkers': 'addNFLbal',
    'click #addNFLbufMarkers': 'addNFLbuf',
    'click #addNFLcinMarkers': 'addNFLcin',
    'click #addNFLcleMarkers': 'addNFLcle',
    'click #addNFLdenMarkers': 'addNFLden',
    'click #addNFLhouMarkers': 'addNFLhou',
    'click #addNFLindMarkers': 'addNFLind',
    'click #addNFLjaxMarkers': 'addNFLjax',
    'click #addNFLkcMarkers': 'addNFLkc',
    'click #addNFLmaiMarkers': 'addNFLmia',
    'click #addNFLneMarkers': 'addNFLne',
    'click #addNFLnyjMarkers': 'addNFLnyj',
    'click #addNFLoakMarkers': 'addNFLoak',
    'click #addNFLpitMarkers': 'addNFLpit',
    'click #addNFLsdMarkers': 'addNFLsd',
    'click #addNFLtenMarkers': 'addNFLten',
    'click #addNFLariMarkers': 'addNFLari',
    'click #addNFLatlMarkers': 'addNFLatl',
    'click #addNFLcarMarkers': 'addNFLcar',
    'click #addNFLchiMarkers': 'addNFLchi',
    'click #addNFLdalMarkers': 'addNFLdal',
    'click #addNFLdetMarkers': 'addNFLdet',
    'click #addNFLgbMarkers': 'addNFLgb',
    'click #addNFLminMarkers': 'addNFLmin',
    'click #addNFLnoMarkers': 'addNFLno',
    'click #addNFLnygMarkers': 'addNFLnyg',
    'click #addNFLphiMarkers': 'addNFLphi',
    'click #addNFLstlMarkers': 'addNFLstl',
    'click #addNFLsfMarkers': 'addNFLsf',
    'click #addNFLseaMarkers': 'addNFLsea',
    'click #addNFLtbMarkers': 'addNFLtb',
    'click #addNFLwshMarkers': 'addNFLwsh',
    'click .barInfo': 'activeBar'
  },

  initialize: function () {
    this.markers = [];
    this.geocoder = new google.maps.Geocoder();
    this.infowindow = new google.maps.InfoWindow({});
    this.activeMarker = null;
  },

  render: function() {
    var view = this.template();
    this.$el.html(view);
    this.showMap();
    return this;
  },

  activeBar: function (el) {
    if (this.activeMarker) {
      this.activeMarker.setAnimation(null);
    }
    this.activeMarker = this.markers[el.target.parentElement.id][0]
    this.activeMarker.setAnimation(google.maps.Animation.BOUNCE);
    console.log(el.target.parentElement.id);
  },

  removeMarkers: function () {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i][0].setMap(null);
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
      this.addMarker(model);
    }.bind(this));
    this.updateSidebar();
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
      this.addMarker(model);
    }.bind(this));

    this.updateSidebar();

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

  addNFLbal: function () {
    this.addLoyaltyMarkers('Baltimore Ravens');
  },
  addNFLbuf: function () {
    this.addLoyaltyMarkers('Buffalo Bills');
  },
  addNFLcin: function () {
    this.addLoyaltyMarkers('Cincinnati Bengals');
  },
  addNFLcle: function () {
    this.addLoyaltyMarkers('Cleveland Browns');
  },
  addNFLden: function () {
    this.addLoyaltyMarkers('Denver Broncos');
  },
  addNFLhou: function () {
    this.addLoyaltyMarkers('Houston Texans');
  },
  addNFLind: function () {
    this.addLoyaltyMarkers('Indianapolis Colts');
  },
  addNFLjax: function () {
    this.addLoyaltyMarkers('Jacksonville Jaguars');
  },
  addNFLkc: function () {
    this.addLoyaltyMarkers('Kansas City Chiefs');
  },
  addNFLmia: function () {
    this.addLoyaltyMarkers('Miami Dolphins');
  },
  addNFLne: function () {
    this.addLoyaltyMarkers('New England Patriots');
  },
  addNFLnyj: function () {
    this.addLoyaltyMarkers('New York Jets');
  },
  addNFLoak: function () {
    this.addLoyaltyMarkers('Oakland Raiders');
  },
  addNFLpit: function () {
    this.addLoyaltyMarkers('Pittsburgh Steelers');
  },
  addNFLsd: function () {
    this.addLoyaltyMarkers('San Diego Chargers');
  },
  addNFLten: function () {
    this.addLoyaltyMarkers('Tennessee Titans');
  },
  addNFLari: function () {
    this.addLoyaltyMarkers('Arizona Cardinals');
  },
  addNFLatl: function () {
    this.addLoyaltyMarkers('Atlanta Falcons');
  },
  addNFLcar: function () {
    this.addLoyaltyMarkers('Carolina Panthers');
  },
  addNFLchi: function () {
    this.addLoyaltyMarkers('Chicago Bears');
  },
  addNFLdal: function () {
    this.addLoyaltyMarkers('Dallas Cowboys');
  },
  addNFLdet: function () {
    this.addLoyaltyMarkers('Detroit Lions');
  },
  addNFLgb: function () {
    this.addLoyaltyMarkers('Green Bay Packers');
  },
  addNFLmin: function () {
    this.addLoyaltyMarkers('Minnesota Vikings');
  },
  addNFLno: function () {
    this.addLoyaltyMarkers('New Orleans Saints');
  },
  addNFLnyg: function () {
    this.addLoyaltyMarkers('New York Giants');
  },
  addNFLphi: function () {
    this.addLoyaltyMarkers('Philadelphia Eagles');
  },
  addNFLstl: function () {
    this.addLoyaltyMarkers('St. Louis Rams');
  },
  addNFLsf: function () {
    this.addLoyaltyMarkers('San Francisco 49ers');
  },
  addNFLsea: function () {
    this.addLoyaltyMarkers('Seattle Seahawks');
  },
  addNFLtb: function () {
    this.addLoyaltyMarkers('Tampa Bay Buccaneers');
  },
  addNFLwsh: function () {
    this.addLoyaltyMarkers('Washington Redskins');
  },

  addMarker: function (model) {
    var contentString = this.createContentString(model);
    var lat = model.get('lat');
    var lng = model.get('lng');
    var image_url = model.get('icon');

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
        position: myLatlng,
    });
    this.markers.push([marker, model]);

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
    var searchBox = new google.maps.places.Autocomplete(($input));
    searchBox.setTypes(['geocode']);

    google.maps.event.addListener(searchBox, 'place_changed', function() {
      var place = searchBox.getPlace();

      var bounds = new google.maps.LatLngBounds();
      bounds.extend(place.geometry.location);
      this.map.fitBounds(bounds);
      this.map.setZoom(12);

    }.bind(this));

    // update bars info sidebar

    google.maps.event.addListener(this.map, 'bounds_changed', function() {
      this.updateSidebar();
    }.bind(this));

  },

  updateSidebar: function () {
    var $activeBars = $('#active-bars');
    $activeBars.html("");
    for (var i=0; i < this.markers.length; i++){
      if( this.map.getBounds().contains(this.markers[i][0].getPosition()) ){
        var model = this.markers[i][1];
        var info = "<li>";

        if (model.get('hc_verified')) {
          var verified = '<img id="verified_logo" src="http://www.sanfrancisco.com/images/common/icon_verified.jpg" alt="" />';
          info = info.concat(verified);
        };
        info = info.concat("<p>" +
                            model.get('name') +
                            "</p><p>" +
                            model.get('address') +
                            "</p><p>" +
                            model.get('number') +
                            "</p></li>");


        var $info = $(info);
        $info.attr('id',i).addClass("barInfo")
        // $info.bind( "click", function() {
        //   var id = $info.attr('id')
        //   alert( "User clicked " + id);
        // });
        $activeBars.append($info)
      }
    }
  }

});
