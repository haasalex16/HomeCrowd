HomeCrowd.Collections.Bars = Backbone.Collection.extend({
  url: '/api/bars',

  model: HomeCrowd.Models.Bar,

  comparator: function(model){
    return model.get('name');
  }

});

HomeCrowd.Collections.bars = new HomeCrowd.Collections.Bars ();
