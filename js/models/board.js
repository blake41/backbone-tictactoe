var app = app || {};
app.Board = Backbone.Model.extend({
  defaults : function() {
    return {
      data : []
    }
  }
})