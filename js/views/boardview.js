var app = app || {};

app.BoardView = Backbone.View.extend({
  initialize : function() {
    this.render();
  },
  render : function() {
    var html = "<table></table>";
    var miniDom = $(html)
    for (var i = 0; i < 3; i++ ) {
      var row = $("<tr>")
      for (var j = 0; j < 3; j++) {
        var cell = new app.Cell();
        this.collection.add(cell);
        var cellView = new app.CellView({model : cell});
        row.append(cellView.el)
      }
      miniDom.append(row)
    }
    this.$el.append(miniDom);
  }
})