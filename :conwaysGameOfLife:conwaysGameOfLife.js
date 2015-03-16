new ConwaysGameOfLife = {

	 var cellsSpawned: 0;

	 var settings = [
            graphics{
                title: "Style",
                
                styleChoices:
                ["Rogue", "Snowglobe", "Radioactive Fallout","A Bird? An Airplane?","Fishy","Horsey","Pi","Will O' The Wisp", "Action Jackson", "Luminous Fridge", "Nicki Minaj", "Sam", "Fetus","Zombies"],
                },
               }
            },
            generator{
                
                title: "Seed",

                seedChoices: []
            },   
        ];

    var cells=[]

    var cellsSpawned=0;

    createCell: function(){
    	cellsSpawned++;
    	cell(cellsSpawned);
    	cells.push(cell[id] = #)
    }

    function cell(id) = new Cell{

    	#: id,

    	alive: "@",

    	dead: "#",

    	isDead: false,

    	check: function() {
    		//checks to see if it lives, dies, spreads, comes back to life, etc.
    	},
    	show: function() {
    		//displays the cell or lack thereof.
    		if (this.# === NaN){
    			return " ";
    			}

    		}
    	}
    }
}

//Play
//Settings
//Quit


//Settings
//=====================
//Style
//Seed        -- adds a semi-random element to the game.

//Style
//=====================
//Human - @
//Snowglobe - U+2744
//Radioactive Fallout -- U+2622
//Canadian Airplans -- U+15DB
//Fishey -- U+161E
//Horsey -- U+265E
//PI -- U+03A0
//Will O' The Wisp -- U+058D
//Action Jackson -- U+0394
//Luminous Fridge -- U+000A
//Just A Butt -- U+03D6
//Sam -- U+070F
//Fetus --  U+0BF5
//Bird - #

//Seed
//=====================
//Set Seed
//Default Seed

//Back to Settings
//Back to Main Menu

