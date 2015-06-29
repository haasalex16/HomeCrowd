HomeCrowd.Views.HomeShow = Backbone.View.extend ({
  template: JST['home/show'],

  render: function() {
    var view = this.template();
    this.$el.html(view);
    return this;
  },

  showMap: function() {
    function initialize() {
      var mapOptions = {
        center: { lat: -34.397, lng: 150.644},
        zoom: 8
      };
      var $canvas = this.$('#map-canvas');
      var map = new google.maps.Map($canvas,
          mapOptions);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
  }

});
