var database,playerCount,form,player,game
var gameState = 0;
var allplayers
var car1,car2,car3,car4,cars ; 

function setup(){
    createCanvas(displayWidth,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}
function draw(){
    if(playerCount==4){
        game.update(1)
    }
    if(gameState==1){
        clear()
        game.play()
    }
}
