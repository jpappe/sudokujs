/*******************************************
 * MODELS
 */

/**
 * A single cell on the board. It's aware of its own coordinates
 * and keeps a reference to the board.
 * 
 * The cell also can contain a value as well as a set of "notes", which indicates
 * whether this cell can contain a particular value.
 */
function Cell(x, y, board) {
	this.x = x;
	this.y = y;
	this.board = board;
	// we don't know the value yet.
	var value = undefined;
	/*
	 * 9 booleans for the 9 possible values this cell can contain.
	 * Start without any values set.
	 */
	var notes = [false, false, false, false, false, false, false, false, false, ];
}

function Board() {
	this.board = [];
	for( x = 0; x < 9; x++ ) {
		for(y = 0; y < 9; y++ ) {
			this.board[x,y] = new Cell(x,y,this);
		}
	}
	
}



/************************************************************
 * VIEW
 **********************************/
function View() {
	
	this.render = function(container, board) {
		$(container).text("Rendering the board here");
	}
}


/********************************************************
 **** CONTROLLER
 *****************************************/
function Game( container ) {
	this.container = container;
	this.board = new Board();
	
	this.view = new View();
	this.view.render(container, board);
}