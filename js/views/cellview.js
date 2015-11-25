var app = app || {};
app.CellView = Backbone.View.extend({
  events : {
    "click" : "handleClick"
  },
  tagName : "td",
  initialize : function() {
    this.render();
    this.model.on("change:letter", this.render(), this)
  },
  render : function() {

  },
  handleClick : function(event) {
    this.model.set("letter", app.game.player())
  }
})