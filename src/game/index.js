

import MainLoop from 'mainloop.js'

import Res from './res.js'



function Game(canvas)
{

    this.Title = "Hello world 2";
    this.Canvas = canvas;
    this.MainLoop = MainLoop;

    this.Resources = [
        Res("coal"),
        Res("iron"),
        Res("stone"),
        Res("wood"),
        Res("copper"),
        Res("oil"),
        Res("platina"),
        Res("cvartz")
    ]
}

Game.prototype = {

    getTitle : function() {
        return this.Title;
    },

    start : function() {
        console.log("Start " + this.Title );

        this.MainLoop.setSimulationTimestep(100);
        this.MainLoop.setUpdate(
            (function(game) {
                return function(delta) {
                    game.update(delta);
                }
            })(this)
        ).start();
    },

    stop : function() {
        this.MainLoop.stop();
    },

    update : function(delta) {
        //console.log(this);
        //console.log('update ' + this.coal.getCount());

        this.Resources.forEach(function(res) {
            res.update(delta);
        }, this);
    }
}



export default Game;