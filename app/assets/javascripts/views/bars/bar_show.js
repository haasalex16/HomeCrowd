HomeCrowd.Views.BarShow = Backbone.View.extend({

  template: JST['bars/show'],

  events: {
    'click .left': 'moveLeft',
    'click .right': 'moveRight',

  },

  className: "bar-show",

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },


  render: function() {
    var view = this.template({bar: this.model });
    this.$el.html(view);
    return this;
  },

  moveLeft: function() {
    var view_width = parseInt(this.$el.find('.card-container').css('width'));
    var width = parseInt(this.$el.find('.cards').css('width'));
    var limit = view_width - width;
    var $cards = this.$el.find('.cards');
    if (parseInt($cards.css('left')) > (limit + 175)) {
      $cards.css("left", "-=175px");
    } else {
      $cards.css("left", limit + "px");
    }
  },

  moveRight: function() {
    var $cards = this.$el.find('.cards');
    if (parseInt($cards.css('left')) < -174) {
      $cards.css("left", "+=175px");
    } else if (parseInt($cards.css('left')) < 0) {
      $cards.css("left", "0px");
    }
  },

});
