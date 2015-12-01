var	app = app || {};
app.Game = Backbone.Model.extend({
	defaults: function (){ return {
		turn: 0,
		winningCombos: [
			[0,3,6],
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[1,4,7],
			[2,5,8], 
			[0,4,8],
			[2,4,6]
		]
	}},
	initialize : function() {

	},

	tie: function() {
		// your code here
	},
	
	gameOver: function() {
		// your code here
	},
	
	player: function() {
		if (this.get("turn") % 2 == 0) {
			return "X"
		} else {
			return "O"
		}
	},
	
	winnerCheck: function() {
		var return_value = false;
		this.get("winningCombos").forEach(function(combo){
			if (this.checkCombo(combo) && app.board.models[combo[0]].get('letter') != undefined) {
				return_value = true;
			}
		}, this)
		return return_value;
	},
	
	checkCombo: function(combo) {
		return app.board.models[combo[0]].get('letter') == app.board.models[combo[1]].get('letter') && app.board.models[combo[1]].get('letter') == app.board.models[combo[2]].get('letter')
	},

	doTurn: function() {
		this.set("turn", this.get("turn") + 1)
		if (this.winnerCheck()) {
			alert("player " + this.player() + " won")
		}
		this.tie();
	}
	
})
