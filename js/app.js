var app = app || {};
$(function(){
  var board = new app.Board()
  var boardView = new app.BoardView({model : board})
  app.game = new app.Game()
  $("body").append(boardView.el)
})