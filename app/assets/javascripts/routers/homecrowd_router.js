HomeCrowd.Routers.Router = Backbone.Router.extend({

  routes: {
    "": 'home',
    "bars/:id": 'barShow'
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.loyalties = HomeCrowd.Collections.loyalties;
    this.bars = HomeCrowd.Collections.bars;
  },

  home: function() {
    this.loyalties.fetch();
    var view = new HomeCrowd.Views.HomeShow({collection: this.loyalties});
    this._swapView(view);
  },

  barShow: function(id) {
    // this.bars.fetch();
    var model = this.bars.getOrFetch(id);
    var view = new HomeCrowd.Views.BarShow({model: model});
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
