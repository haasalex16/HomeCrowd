HomeCrowd.Views.HomeShow = Backbone.View.extend ({
  template: JST['home/show'],

  render: function() {
    var view = this.template();
    this.$el.html(view);
    return this;
  },

});
