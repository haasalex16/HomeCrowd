HomeCrowd.Collections.Bars = Backbone.Collection.extend({
  url: '/api/bars',

  model: HomeCrowd.Models.Bar,

  comparator: function(model){
    return model.get('name');
  },

  getOrFetch: function(id) {
    var bar = this.get(id);

    if (bar){
      bar.fetch();
    } else {
      bar = new HomeCrowd.Models.Bar({id: id});
      bar.fetch({
        success: function() {
          this.add(bar);
        }.bind(this)
      });
    }

    return bar;
  }

});

HomeCrowd.Collections.bars = new HomeCrowd.Collections.Bars ();
