HomeCrowd.Views.BarShow = Backbone.View.extend({

  template: JST['bars/show'],

  events: {
    'click .left': 'moveRight',
    'click .right': 'moveLeft',
    'click .add-card': 'addCard',
  },

  className: "bar-show",

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    $(window).on("resize", this.properArrows);
  },


  render: function() {
    console.log("rendered");
    var view = this.template({bar: this.model });
    this.$el.html(view);
    this.setWidth(false);
    this.properArrows();
    return this;
  },

  addCard: function(event) {
    $(event.currentTarget).addClass('card-form').removeClass('add-card');
    this.setWidth(true);
    this.properArrows();
    var view = new HomeCrowd.Views.LoyaltiesForm({model: this.model});
    $(event.currentTarget).html(view.render().$el);

  },

  setWidth: function (long) {
    var length = $('.loyalty-card').length;
    if (long) {
      var width = length * 210 + 210;
    } else {
      var width = length * 210 + 80;
    }
    var $cards = this.$el.find('.cards');
    $cards.css('width', width + 'px');
  },

  properArrows: function() {
    var container_length = parseInt($('.card-container').css('width'));
    var cards_length = parseInt($('.cards').css('width'));
    // if ((container_length - cards_length) >= 0) {
    //   $('.left').css('display', 'none');
    //   $('.right').css('display', 'none');
    // } else {
    //   $('.left').css('display', 'block');
    //   $('.right').css('display', 'block');
    // };

    if ( parseInt($('.cards').css('left')) == 0) {
      $('.left').css('display', 'none');
    } else {
      $('.left').css('display', 'block');
    }

    if ( container_length - cards_length >= parseInt($('.cards').css('left')) ){
      $('.right').css('display', 'none');
    } else {
      $('.right').css('display', 'block');
    }
  },

  moveLeft: function() {

    var view_width = parseInt(this.$el.find('.card-container').css('width'));
    var width = parseInt(this.$el.find('.cards').css('width'));
    var limit = view_width - width;
    var $cards = this.$el.find('.cards');
    if (parseInt($cards.css('left')) > (limit + 175)) {
      $cards.css("left", "-=175px");
      this.properArrows();
    } else {
      $cards.css("left", limit + "px");
      $('.right').css('display', 'none');
    }
    $('.left').css('display', 'block');
  },

  moveRight: function() {
    var container_length = parseInt($('.card-container').css('width'));
    var cards_length = parseInt($('.cards').css('width'));

    var $cards = this.$el.find('.cards');
    if (parseInt($cards.css('left')) < -174) {
      $cards.css("left", "+=175px");
      this.properArrows();
    } else if (parseInt($cards.css('left')) < 0) {
      $cards.css("left", "0px");
      $('.left').css('display', 'none');
    }
    if ((container_length - cards_length) < 0) {
      $('.right').css('display', 'block');
    }
  },

});
