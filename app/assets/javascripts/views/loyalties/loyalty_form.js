HomeCrowd.Views.LoyaltiesForm = Backbone.View.extend({

  template: JST['loyalties/form'],

  events: {
    'submit form': 'submit'
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
  },

  initAuto: function () {
    var input = this.$('#autocomp')[0];

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function() {
      var place = autocomplete.getPlace();
      console.log(place.place_id);
    });
  }


});
