/*
Your task is to write a program to calculate the next generation of Conway's Game of Life, given any starting position. You start with a two dimensional grid of cells, where each cell is either alive or dead. The grid is finite, and no life can exist off the edges. When calculating the next generation of the grid, follow these four rules:

Any live cell with fewer than two live neighbors dies, as if caused by underpopulation.
Any live cell with more than three live neighbors dies, as if by overcrowding.
Any live cell with two or three live neighbors lives on to the next generation.
Any dead cell with exactly three live neighbors becomes a live cell.
(You may wish to Google this (very popular) kata for examples and additional instructions.)
*/

var Game = {

    DIMENSIONS: 16,

	gridWidth: 16,
	gridHeight: 16,

    BUDDIES: [[-1,1],[0,1],[1,1],
              [-1,0],      [1,0],
              [-1,-1],[0,-1],[1,-1]],

	rows: [],
	
	generateRow: function(rowIndex){
       // console.log("Generating Row");
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
     //   console.log("Generating column...");
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

        creation.survives = false;

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
		//console.log("Checking states")
		if (x > -1 && y > -1){

            var thisCell = this.rows[x][y];

			if (thisCell.isDead === false){
				
				if (this.checkLivingNeighbors(x,y) < 2){
					thisCell.survives = false;
				}
				if (this.checkLivingNeighbors(x,y) > 3){
					thisCell.survives = false;
				}
			}	
			else
			{
				if (this.checkLivingNeighbors(x,y) === 3){
					thisCell.survives = true;
				}
			}
		}
	},

    buddy: function(maxdim, pos, direction) {
        var newpos = pos + direction;
        if (newpos >= maxdim) {
           newpos = -1;
        }
        return newpos;
    },

    iterate: function(){

        var thisCell;

        for(y = 0; y < this.gridHeight; y++){
            
            for(x = 0;x < this.gridWidth; x++){
                
                thisCell = this.rows[x][y];

                if (thisCell.survives === false){
                    thisCell.isDead = true;
                } else {
                    thisCell.isDead = false;
                }

            }
        }

    },

	checkLivingNeighbors: function(x, y){
        //console.log("Checking neighbors");
		var livingNeighbors = 0;

        for (var i = 0; i < this.BUDDIES.length; i++) {
            var budx = this.buddy(this.gridWidth, x, this.BUDDIES[i][0]);
            var budy = this.buddy(this.gridHeight, y, this.BUDDIES[i][1]);
            
            if (budx >= 0 && budy >= 0 && !(this.rows[budy][budx].isDead)) 
            livingNeighbors++;
        }
    }, 

	displayGame: function(){
        console.log("Attempting to display game...");
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
        this.iterate(); 
		this.displayGame();
	}
		
}

Game.init();


/*

NOTES:

In the Game-Of-Life you are supposed to scan the entire board, and only then apply the changes. You are applying changes part-way through the process (as you check each cell, you change its state). So, if you change the cell in one location, when you check it's neighbour it will affect the results).

You need to 'store' the counter for each cell until you have completed the scan, and then re-set each block in the board. Essentially you need the following:

*/



		
		




