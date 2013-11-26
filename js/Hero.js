Game.Hero = function (myX, myY) {
    'use strict';
    var my = new createjs.Bitmap("img/hero.png");
    
    my.moveTo = function(newX, newY, tween){
    	var newXpx, newYpx;
    	my.posX = newX;
    	my.posY = newY;

    	if (tween) {
    		// find out where we want to go, then start tweening
			newXpx = my.posX * my.image.width + Game.offsetX;
			newYpx = my.posY * my.image.height + Game.offsetY;
    		createjs.Tween.get(my).to({x:newXpx, y:newYpx}, 200);
    	} else {
    		// just jump to the correct position
    	    my.x = my.posX * my.image.width + Game.offsetX;
    		my.y = my.posY * my.image.height + Game.offsetY;
    	}
    	
    	Game.stage.update();
    };
    my.moveBy = function(dirX, dirY){
    	var testX = my.posX + dirX,
            testY = my.posY + dirY, 
            tileToTest,
            ttype;
            
            //find out if we are 'inside' the world
    	if (testX < 0 || testY < 0 || testX > 14 || testY > 7) {
    		return;
    	}
        //get the tile we want to test
                tileToTest = Game.tiles[testY][testX],
                ttype = tileToTest.type;
    	if (ttype === 1 || ttype === 3) {
    		return;
    	}   else if (ttype === 4){ //this is the key
            tileToTest.changeTo(0); //key becomes floor
            Game.door.changeTo(0);
            
        } else if ( ttype === 2){ //exit tile
            Game.isWon = true;
            Game.update();
        }
    	
        //ok, now we can move
    	my.moveTo(testX, testY, true);
    };
    my.moveTo(myX, myY);
    return my;
};