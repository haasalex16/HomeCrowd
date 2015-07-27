HomeCrowd.Collections.Loyalties = Backbone.Collection.extend({
  url: '/api/loyalties',

  model: HomeCrowd.Models.Loyalty,

  comparator: function(model){
    return model.get('name');
  }

});

HomeCrowd.Collections.loyalties = new HomeCrowd.Collections.Loyalties ();
