HomeCrowd.Views.BarShow = Backbone.View.extend({

  template: JST['bars/show'],

  className: "bar-show",

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },


  render: function() {
    var view = this.template({bar: this.model });
    this.$el.html(view);
    return this;
  },

});
