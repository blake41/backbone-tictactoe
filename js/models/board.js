var app = app || {};
app.Board = Backbone.Collection.extend({
  initialize : function() {
    this.on("change:letter", this.doTurn, this)
  },
  doTurn : function() {
    app.game.doTurn();
  }
})