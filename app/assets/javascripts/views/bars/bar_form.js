HomeCrowd.Views.BarForm = Backbone.View.extend({

  template: JST['bars/form'],

  events: {
    'submit form': 'submit',
  },

  render: function() {
    var view = this.template();
    this.$el.html(view);
    this.initAuto();

    return this;
  },

  submit: function(event) {
    event.preventDefault();
    console.log(event);
    var attrs = {bar_id: this.bar};
  },

  initAuto: function () {
    var input = this.$('#autocomp')[0];

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function() {
      var place = autocomplete.getPlace();
      this.bar = HomeCrowd.Collections.bars.findWhere({place_id:place.place_id});
      if (this.bar){
        console.log("Existing Bar");

      } else {
        console.log("New Bar with ID of: " + place.place_id);

      }
    }.bind(this));
  }

});
