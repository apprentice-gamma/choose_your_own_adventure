/*
Your task is to write a program to calculate the next generation of Conway's Game of Life, given any starting position. You start with a two dimensional grid of cells, where each cell is either alive or dead. The grid is finite, and no life can exist off the edges. When calculating the next generation of the grid, follow these four rules:

Any live cell with fewer than two live neighbors dies, as if caused by underpopulation.
Any live cell with more than three live neighbors dies, as if by overcrowding.
Any live cell with two or three live neighbors lives on to the next generation.
Any dead cell with exactly three live neighbors becomes a live cell.
(You may wish to Google this (very popular) kata for examples and additional instructions.)
*/

var Game = {

	gridWidth: 32,
	gridHeight: 16,

	rows: [],
	
	generateRow: function(rowIndex){
		var cells = [];
		for (var i = 0; i < this.gridWidth; i++){
			cells.push(this.newCell(i, rowIndex));
			if ((i%5 === 0 && rowIndex%6 === 0) || (i%2 === 0 && rowIndex%10 === 0)){ //starting pattern
				cells[i].isDead = false;
				console.log(cells[i].isDead);
			}
		}
	return cells;
	},
	
	generateColumns: function(){
		for (var j = 0; j < this.gridHeight; j++){
			this.rows.push(this.generateRow(j));
		}
	},

	Cell: function(){
		
		var living = "@";
		var dead = "-";
		
		var x = -1;

		var y = 1;

		var isDead = true;

		var draw = function(){
			if (isDead === false){
				return this.living;
			}
			else if (isDead === true){
				return this.dead;				
			}
			else{
				return "";
			}
		};

		/*var kill = function(){
			this.isDead === true;
		};

		var revive = function(){
			this.isDead === false;
		};*/

	},

	newCell: function(x,y){
		
		var creation = new this.Cell();

		creation.living = "@";
		creation.dead = "-";

		creation.x = x;
		creation.y = y;
		creation.isDead = true;

		creation.draw = function(){
			if (this.isDead === false){
				return this.living;
			}
			else if (this.isDead === true){
				return this.dead;				
			}
			else{
				return "";
			}
		};

		return creation;
	},

	checkState: function(x, y){
		
		if (x > -1 && y > -1){

			if (this.rows[x][y].isDead === false){
				
				if (this.checkLivingNeighbors(x,y) < 2){
					this.rows[x][y].isDead = true;
				}
				if (this.checkLivingNeighbors(x,y) > 3){
					this.rows[x][y].isDead = true;
				}
			}	
			else
			{
				if (this.checkLivingNeighbors(x,y) === 3){
					this.rows[x][y].isDead = false;
				}
			}
		}
	},

	checkLivingNeighbors: function(x, y){
		var livingNeighbors = 0;
		if (x != 0 && y!=0 && x!=15 && y!=15){
			if (this.rows[x-1][y].isDead === false){
				livingNeighbors++;
			}

			if (this.rows[x+1][y].isDead === false){
				livingNeighbors++;
			}

			if (this.rows[x][y-1].isDead === false){
				livingNeighbors++;
			}

			if (this.rows[x][y+1].isDead === false){
				livingNeighbors++;
			}
		}
		return livingNeighbors;

	},

	displayGame: function(){
		var x, y;
		var rowDisplay;
		//rows[y[x]].draw()

		for(y = 0; y < this.gridHeight; y++){
			rowDisplay = "";
			
			for(x = 0;x < this.gridWidth; x++){
				rowDisplay+=this.rows[y][x].draw();
			}
			
			console.log(rowDisplay);
		
		}

	},

	checkGeneration: function(){
		var x, y;

		for(y = 0; y < this.gridHeight; y++){
			
			for(x = 0;x < this.gridWidth; x++){
				this.checkState(x,y);
			}
			
		
		}
	},

	init: function(){
		this.generateColumns();
		//console.log(this.rows);
		this.displayGame();
		console.log("Generation Two:");
		this.checkGeneration();
		this.displayGame();
	}
		
}

Game.init();


/*
//BOUNDS
            //Handle left bound
            if (y == 0) {
                if (board[x ][(y + 1)] == "x"){
                    counter ++;
                }
                //Left bottom corner
                if (x == 29) {
                    if (board[(x - 1)][y] == "x") {
                        counter ++;
                    }
                    if (board[(x - 1)][(y + 1)] == "x") {
                        counter ++;
                    }
                }
                //Left top corner
                else if (x == 0) {
                    if (board[(x + 1)][y] == "x") {
                        counter ++;
                    }
                    if (board[(x + 1)][(y + 1)] == "x") {
                        counter ++;
                    }
                }
                else{
                    if (board[(x - 1)][y] == "x") {
                        counter ++;
                    }
                    if (board[(x - 1)][(y + 1)] == "x") {
                        counter ++;
                    }
                    if (board[x][(y + 1)] == "x") {
                        counter ++;
                    }
                    if (board[(x + 1)][y] == "x") {
                        counter ++;
                    }
                    if (board[(x + 1)][(y + 1)] == "x") {
                        counter ++;
                    }
                }
            }
            //handle right bound
            else if (y == 29) {
                if (board[(x)][(y - 1)] == "x"){
                    counter ++;
                }
                //right bottom corner
                if (x == 29) {
                    if (board[(x - 1)][y] == "x") {
                        counter ++;
                    }
                    if (board[(x - 1)][(y - 1)] == "x") {
                        counter ++;
                    }
                }
                //right top corner
                else if (x == 0) {
                    if (board[x + 1][y] == "x") {
                        counter ++;
                    }
                    if (board[(x + 1)][(y - 1)] == "x") {
                        counter ++;
                    }
                }
                else{
                    if (board[(x - 1)][y] == "x") {
                        counter ++;
                    }
                    if (board[(x - 1)][(y - 1)] == "x") {
                        counter ++;
                    }
                    if (board[x][(y - 1)] == "x") {
                        counter ++;
                    }
                    if (board[(x + 1)][y] == "x") {
                        counter ++;
                    }
                    if (board[(x + 1)][(x - 1)] == "x") {
                        counter ++;
                    }
                }
            }
            else{
                //Top bounds
                if (x == 0) {
                    if (board[x][(y + 1)] == "x") {
                        counter ++;
                    }
                    if (board[x][(y - 1)] == "x") {
                        counter ++;
                    }
                    if (board[(x + 1)][y] == "x") {
                        counter ++;
                    }
                    if (board[(x + 1)][y + 1] == "x") {
                        counter ++;
                    }
                    if (board[(x + 1)][y - 1] == "x") {
                        counter ++;
                    }

                }
                //Bottom bounds
                else if (x == 29) {
                    if (board[x][(y + 1)] == "x") {
                        counter ++;
                    }
                    if (board[x][(y - 1)] == "x") {
                        counter ++;
                    }
                    if (board[(x - 1)][y] == "x") {
                        counter ++;
                    }
                    if (board[(x - 1)][(y + 1)] == "x") {
                        counter ++;
                    }
                    if (board[(x - 1)][(y - 1)] == "x") {
                        counter ++;
                    }
                }
                else{
                    //center of board
                    if (board[x][(y + 1)] == "x") {
                        counter ++;
                    }
                    if (board[x][(y - 1)] == "x") {
                        counter ++;
                    }
                    if (board[(x - 1)][y] == "x") {
                        counter ++;
                    }
                    if (board[(x - 1)][(y + 1)] == "x") {
                        counter ++;
                    }
                    if (board[(x - 1)][(y - 1)] == "x") {
                        counter ++;
                    }
                    if (board[(x + 1)][(y + 1)] == "x") {
                        counter ++;
                    }
                    if (board[(x + 1)][(y - 1)] == "x") {
                        counter ++;
                    }
                }
            } //end board checking

            //apply rules to cell
            if (alive == true) {
                if (counter < 2) {
                    board[x][y] = "";
                }
                if (counter > 3) {
                    board[x][y] = "";
                }
            }
            else if (alive == false) {
                if (counter == 3) {
                    board[x][y] = "x";
                }
                else if (counter != 3){
                    board[x][y] = "";
                }
            }

in the Game-Of-Life you are supposed to scan the entire board, and only then apply the changes. You are applying changes part-way through the process (as you check each cell, you change its state). So, if you change the cell in one location, when you check it's neighbour it will affect the results).

You need to 'store' the counter for each cell until you have completed the scan, and then re-set each block in the board. Essentially you need the following:

*/



		
		




