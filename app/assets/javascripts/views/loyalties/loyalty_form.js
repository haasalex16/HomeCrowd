HomeCrowd.Views.LoyaltiesForm = Backbone.View.extend({

  template: JST['loyalties/form'],

  events: {
    'submit form': 'submit',
  },

  render: function() {
    var view = this.template();
    this.$el.html(view);

    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var attrs = $(event.currentTarget).serializeJSON();
    attrs['loyalty']['bar_id'] = this.model.get('id');
    var loyalty = new HomeCrowd.Models.Loyalty();

    loyalty.save(attrs, {
      success: function(model, response) {
        this.model.fetch();
        HomeCrowd.Collections.loyalties.add(model);
      }.bind(this),
      error: function(model, response) {
        console.log(response);
      }
    });
  }

});
