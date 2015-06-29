HomeCrowd.Routers.Router = Backbone.Router.extend({

  routes: {
    "": 'home',
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  home: function() {
    var view = new HomeCrowd.Views.HomeShow();
    this._swapView(view);
  },

  _swapView: function (view) {
    if(this.currentView) {
      this.currentView.remove();
    }

    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
