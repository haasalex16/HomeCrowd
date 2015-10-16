HomeCrowd.Views.LoyaltiesForm = Backbone.View.extend({

  template: JST['loyalties/form'],

  events: {
    'submit form': 'submit',
  },

  render: function() {
    var view = this.template();
    this.$el.html(view);
    console.log("rendered");
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var attrs = $(event.currentTarget).serializeJSON();
    console.log(attrs);
  },

});
