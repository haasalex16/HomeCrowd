HomeCrowd.Views.HomeShow = Backbone.View.extend ({
  template: JST['home/show'],

  events: {
    'click #addMarkers': 'addMarkers'
  },

  initialize: function () {
    this.geocoder = new google.maps.Geocoder();

  },

  render: function() {
    var view = this.template();
    this.$el.html(view);
    this.showMap();
    return this;
  },

  addMarkers: function () {
    this.collection.models.forEach(function(model) {
      var address = model.get('address');
      this.addMarker(address);
    }.bind(this))
  },

  addMarker: function (address) {
    this.geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        // this.map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: this.map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    }.bind(this));
  },

  showMap: function() {
    mapOptions = {
      center: { lat: 40.737025, lng: -73.987783},
      zoom: 12
    };
    $canvas = this.$('#map-canvas')[0];
    this.map = new google.maps.Map($canvas, mapOptions);
  }

});
