window.HomeCrowd = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
    new HomeCrowd.Routers.Router({$rootEl: $('#main')});
    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   HomeCrowd.initialize();
// });
