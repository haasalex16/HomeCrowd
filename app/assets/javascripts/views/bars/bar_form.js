HomeCrowd.Views.BarForm = Backbone.View.extend({

  template: JST['bars/form'],

  render: function() {
    var view = this.template({bar: this.model});
    this.$el.html(view);

    return this;
  },

});
