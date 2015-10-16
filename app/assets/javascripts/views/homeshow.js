HomeCrowd.Views.HomeShow = Backbone.View.extend ({
  template: JST['home/show'],

  events: {
    'click #addB10Markers': 'addB10',
    'click #addSECMarkers': 'addSEC',
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
    'click .barInfo': 'getActiveID',
    'mouseover .barInfo': 'lightBounce',
    'click #addMLBbalMarkers': 'addMLBbal',
    'click #addMLBbosMarkers': 'addMLBbos',
    'click #addMLBchwMarkers': 'addMLBchw',
    'click #addMLBcleMarkers': 'addMLBcle',
    'click #addMLBdetMarkers': 'addMLBdet',
    'click #addMLBhouMarkers': 'addMLBhou',
    'click #addMLBkcMarkers': 'addMLBkc',
    'click #addMLBlaaMarkers': 'addMLBlaa',
    'click #addMLBminMarkers': 'addMLBmin',
    'click #addMLBnyyMarkers': 'addMLBnyy',
    'click #addMLBoakMarkers': 'addMLBoak',
    'click #addMLBseaMarkers': 'addMLBsea',
    'click #addMLBtbMarkers': 'addMLBtb',
    'click #addMLBtexMarkers': 'addMLBtex',
    'click #addMLBtorMarkers': 'addMLBtor',
    'click #addMLBariMarkers': 'addMLBari',
    'click #addMLBatlMarkers': 'addMLBatl',
    'click #addMLBchcMarkers': 'addMLBchc',
    'click #addMLBcinMarkers': 'addMLBcin',
    'click #addMLBcolMarkers': 'addMLBcol',
    'click #addMLBmiaMarkers': 'addMLBmia',
    'click #addMLBladMarkers': 'addMLBlad',
    'click #addMLBmilMarkers': 'addMLBmil',
    'click #addMLBnymMarkers': 'addMLBnym',
    'click #addMLBphiMarkers': 'addMLBphi',
    'click #addMLBpitMarkers': 'addMLBpit',
    'click #addMLBsdMarkers': 'addMLBsd',
    'click #addMLBsfMarkers': 'addMLBsf',
    'click #addMLBstlMarkers': 'addMLBstl',
    'click #addMLBwshMarkers': 'addMLBwsh',
    'click .more-info': 'flipBoard',
    'click #newLoyalty': 'newLoyalty'
  },

  initialize: function () {
    // this.listenTo(this.collection, 'sync', this.render);
    this.markers = [];
    this.geocoder = new google.maps.Geocoder();
    this.activeMarker = null;
  },

  newLoyalty: function () {
    var view = new HomeCrowd.Views.BarForm();
    $('#barForm').removeClass('hideForm');
    $('#barForm').addClass('displayForm');

    $('#barForm').html(view.render().$el);
  },

  render: function() {
    var view = this.template();
    this.$el.html(view);
    this.showMap();
    return this;
  },

  flipBoard: function(el) {
    var id = el.target.parentElement.id;
    var bar_id = this.markers[id][1].escape('bar_id');
    var bar = HomeCrowd.Collections.bars.getOrFetch(bar_id);
    var view = new HomeCrowd.Views.BarShow({model: bar});
    $('.map-details').addClass('flipped');
    $('.details-container').html(view.render().$el);
  },

  lightBounce: function (el) {
    var id = el.target.parentElement.id;
    if (id == 'active-bars' || id == "") {
      return;
    } else {
      this.markers[id][0].setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function() {
        if (this.activeMarker != id) {
          this.markers[id][0].setAnimation(null);
        }
      }.bind(this),750);
    }
  },

  activeBar: function (id) {

    if (this.activeMarker != null) {
      this.markers[this.activeMarker][0].setAnimation(null);
      this.$('#'+this.activeMarker).removeClass('active');
    }
    this.$('#'+id).addClass('active');
    this.activeMarker = id;
    this.markers[this.activeMarker][0].setAnimation(google.maps.Animation.BOUNCE);
    this.map.setZoom(15);
    this.map.setCenter({lat: this.markers[this.activeMarker][1].get('lat'), lng:
                this.markers[this.activeMarker][1].get('lng')});
  },

  getActiveID: function (el) {
    var id = el.target.parentElement.id;
    if (id == 'active-bars' || el.target.className == "more-info fa fa-info-circle") {
      return;
    } else {
      $('.map-details').removeClass('flipped');
      this.activeBar(id);
    }
  },

  removeMarkers: function () {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i][0].setMap(null);
    }
    this.markers = [];
  },

  home: function() {

    $('#active-bars').html("");
    $('.map-details-container').addClass('hide-map');
    $('#active-bars').addClass('hide-sidebar');

    this.removeMarkers();
    this.$('.NFL_logos').removeClass('show');
    this.$('.b10_logos').removeClass('show');
    this.$('.MLB_logos').removeClass('show');
    this.$('.sec_logos').removeClass('show');

  },

  addNFL: function() {
    this.$('.NFL_logos').removeClass('show');
    this.$('.b10_logos').removeClass('show');
    this.$('.sec_logos').removeClass('show');
    this.$('.MLB_logos').removeClass('show');
    this.$('.NFL_logos').addClass('show');

    this.addLeagueMarkers('NFL');
  },

  addMLB: function() {
    this.$('.NFL_logos').removeClass('show');
    this.$('.b10_logos').removeClass('show');
    this.$('.sec_logos').removeClass('show');
    this.$('.MLB_logos').removeClass('show');
    this.$('.MLB_logos').addClass('show');

    this.addLeagueMarkers('MLB');
  },

  addB10: function() {
    this.$('.NFL_logos').removeClass('show');
    this.$('.b10_logos').removeClass('show');
    this.$('.sec_logos').removeClass('show');
    this.$('.MLB_logos').removeClass('show');
    this.$('.b10_logos').addClass('show');

    this.addLeagueMarkers('B10');
  },

  addSEC: function() {
    this.$('.NFL_logos').removeClass('show');
    this.$('.sec_logos').removeClass('show');
    this.$('.b10_logos').removeClass('show');
    this.$('.MLB_logos').removeClass('show');
    this.$('.sec_logos').addClass('show');

    this.addLeagueMarkers('SEC');
  },

  addLeagueMarkers: function(league) {
    this.map.setZoom(12);
    $('.map-details').removeClass('flipped');

    $('.map-details-container').removeClass('hide-map');
    $('#active-bars').removeClass('hide-sidebar');

    this.removeMarkers();
    this.activeMarker = null;
    this.collection.where({league: league}).forEach(function(model, idx) {
      this.addMarker(model, idx);
    }.bind(this));
    this.updateSidebar();
  },

  // createContentString: function(model) {
  //   var contentString = "<div>";
  //   if (model.get('hc_verified')) {
  //     var verified = '<img id="verified_logo" src="http://www.sanfrancisco.com/images/common/icon_verified.jpg" alt="" />';
  //     contentString = contentString.concat(verified);
  //   };
  //   contentString = contentString.concat("<p>" +
  //                       model.get('name') +
  //                       "</p><p>" +
  //                       model.get('address') +
  //                       "</p><p>" +
  //                       model.get('number') +
  //                       "</p></div>");
  //   return contentString;
  // },

  addLoyaltyMarkers: function (loyalty) {
    this.map.setZoom(12);
    $('.map-details').removeClass('flipped');


    $('.map-details-container').removeClass('hide-map');
    $('#active-bars').removeClass('hide-sidebar');
    this.activeMarker = null;

    this.removeMarkers();
    this.collection.where({loyalty: loyalty}).forEach(function(model, idx) {
      this.addMarker(model, idx);
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

  addMLBbal: function () {
    this.addLoyaltyMarkers('Baltimore Orioles');
  },

  addMLBbos: function () {
    this.addLoyaltyMarkers('Boston Red Sox');
  },

  addMLBchw: function () {
    this.addLoyaltyMarkers('Chicago White Sox');
  },

  addMLBcle: function () {
    this.addLoyaltyMarkers('Cleveland Indians');
  },

  addMLBdet: function () {
    this.addLoyaltyMarkers('Detroit Tigers');
  },

  addMLBhou: function () {
    this.addLoyaltyMarkers('Houston Astros');
  },

  addMLBkc: function () {
    this.addLoyaltyMarkers('Kansas City Royals');
  },

  addMLBlaa: function () {
    this.addLoyaltyMarkers('Los Angeles Angels');
  },

  addMLBmin: function () {
    this.addLoyaltyMarkers('Minnesota Twins');
  },

  addMLBnyy: function () {
    this.addLoyaltyMarkers('New York Yankees');
  },

  addMLBoak: function () {
    this.addLoyaltyMarkers('Oakland Athletics');
  },

  addMLBsea: function () {
    this.addLoyaltyMarkers('Seattle Mariners');
  },

  addMLBtb: function () {
    this.addLoyaltyMarkers('Tampa Bay Rays');
  },

  addMLBtex: function () {
    this.addLoyaltyMarkers('Texas Rangers');
  },

  addMLBtor: function () {
    this.addLoyaltyMarkers('Toronto Blue Jays');
  },

  addMLBari: function () {
    this.addLoyaltyMarkers('Arizona Diamondbacks');
  },

  addMLBatl: function () {
    this.addLoyaltyMarkers('Atlanta Braves');
  },

  addMLBchc: function () {
    this.addLoyaltyMarkers('Chicago Cubs');
  },

  addMLBcin: function () {
    this.addLoyaltyMarkers('Cinncinnati Reds');
  },

  addMLBcol: function () {
    this.addLoyaltyMarkers('Colorado Rockies');
  },

  addMLBmia: function () {
    this.addLoyaltyMarkers('Miami Marlins');
  },

  addMLBlad: function () {
    this.addLoyaltyMarkers('Los Angeles Dodgers');
  },

  addMLBmil: function () {
    this.addLoyaltyMarkers('Milwaukee Brewers');
  },

  addMLBnym: function () {
    this.addLoyaltyMarkers('New York Mets');
  },

  addMLBphi: function () {
    this.addLoyaltyMarkers('Philadelphia Phillies');
  },

  addMLBpit: function () {
    this.addLoyaltyMarkers('Pittsburgh Pirates');
  },

  addMLBsd: function () {
    this.addLoyaltyMarkers('San Diego Padres');
  },

  addMLBsf: function () {
    this.addLoyaltyMarkers('San Francisco Giants');
  },

  addMLBstl: function () {
    this.addLoyaltyMarkers('St. Louis Cardinals');
  },

  addMLBwsh: function () {
    this.addLoyaltyMarkers('Washington Nationals');
  },




  addMarker: function (model, idx) {
    // var contentString = this.createContentString(model);
    var lat = model.get('lat');
    var lng = model.get('lng');
    var image_url = model.get('icon');

    var myLatlng = new google.maps.LatLng(lat,lng);
    // var infowindow = new google.maps.InfoWindow({
    //     content: contentString
    // });
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
      $('#active-bars').scrollTop(0);
      this.activeBar(idx);
      $('#active-bars').scrollTop($('#'+idx).position().top - 100);

      // this.infowindow.close();
      // infowindow.open(this.map, marker);
      // this.infowindow = infowindow;
    }.bind(this));
  },

  showMap: function() {
    mapOptions = {

      center: { lat: 40.775273, lng: -73.973041},
      minZoom: 4,
      maxZoom: 17,
      zoom: 12,
      styles: [
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            { "color": "#D6E0AB" }
          ]
        },{
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            { "color": "#ACC7F2" }
          ]
        },{
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            { "visibility": "simplified" },
            { "color": "#FFFFFF" }
          ]
        },{
          // mainland
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
            { "color": "#E8E4DF" }
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
        var $info = $("<li>");

        $info.append('<img class="icon" src="' + model.get('icon') + '&w=30&h=30" alt="" />');
        $info.append('<h1 class="name">' + model.get('name'));

        if (model.get('hc_verified')) {
          $info.append('<i class="fa fa-trophy verified"></i>');
        } else {
          $info.append('<i class="verified"></i>');
        }

        if (model.get('alumni')) {
          $info.append('<i class="fa fa-graduation-cap alumni"></i>');
        } else if (model.get('group')) {
          if (model.get('group_assoc')=='Alumni') {
            $info.append('<i class="fa fa-graduation-cap alumni"></i>');
          } else {
            $info.append('<i class="fa fa-users alumni"></i>');
          }
        } else {
          $info.append('<i class="alumni"></i>');
        }

        $info.append('<p class="address">' + model.get('address'));
        $info.append('<p class="number">' + model.get('number'));
        $info.append('<i class="more-info fa fa-info-circle"></i>');


        $info.attr('id',i).addClass("barInfo").addClass('group');
        if (this.activeMarker == i) {
          $info.addClass('active');
        }
        $activeBars.append($info);
      }
    }
  }

});
