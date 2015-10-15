HomeCrowd.Views.LoyaltiesForm = Backbone.View.extend({

  template: JST['loyalties/form'],

  render: function() {
    var view = this.template();
    this.$el.html(view);
    return this;
  }

});
