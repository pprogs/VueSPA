



function Game(canvas)
{

    this.Title = "Hello world 2";
    this.Canvas = canvas;



}

Game.prototype.getTitle = function() {
    return this.Title;
}



export default Game;