var app = app || {};
$(function(){
  var board = new app.Board()
  var boardView = new app.BoardView({collection : board})
  app.game = new app.Game();
  app.board = board;
  $("body").append(boardView.el)
})