var app = app || {};
app.CellView = Backbone.View.extend({
  events : {
    "click" : "handleClick"
  },
  tagName : "td",
  initialize : function() {
    this.render();
  },
  render : function() {

  },
  handleClick : function(event) {
    this.model.set("letter", app.game.player())
  }
})