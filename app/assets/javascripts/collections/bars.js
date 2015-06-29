HomeCrowd.Collections.Bars = Backbone.Collection.extend({
  url: '/api/bars',

  model: HomeCrowd.Models.Bar,

});

HomeCrowd.Collections.bars = new HomeCrowd.Collections.Bars ();
