import MainLoop from "mainloop.js";

import Res from "./res.js";
import Man from "./some.js";

function Game() {

  this.mainLoop = MainLoop;

  this.resources = [
    Res(1, "r_coal", "coal.jpeg"),
    Res(2, "r_iron", "iron.jpeg"),
    Res(3, "r_stone", "gold.jpeg"),
    Res(4, "r_wood", "wood.jpeg"),
    Res(5, "r_copper", "gold.jpeg"),
    Res(6, "r_oil", "oil.jpeg"),
    Res(7, "r_platina", "gold.jpeg"),
    Res(8, "r_cvartz", "gold.jpeg")
  ];

  this.resourcesStats = {};

  this.resources.forEach(r => {
    this.resourcesStats[r.name + "Counts"] = { link: r };
  });

  this.machines = {};
}

Game.prototype = {

  //
  //
  //
  start: function() {
    this.mainLoop.setSimulationTimestep(200);
    this.mainLoop
      .setUpdate(
        (function(game) {
          return function(delta) {
            game.update(delta);
          };
        })(this)
      )
      .start();
  },

  //
  //
  //
  stop: function() {
    this.mainLoop.stop();
  },

  //
  //
  //
  update: function(delta) {


    this.updateResourcesStats();
  },

  //
  //
  //
  updateResourcesStats: function() {
    this.resources.forEach(r => {
      this.resourcesStats[r.name + "Counts"] = {
        count: r.count,
        name: r.name,
        id: r.id,
        link: r
      };
    });
  },

  //
  //
  //
  buyResource: function(id, amount) {
    const r = this.resources.find(res => res.id == id);
    r.count += amount;
  }
};

export default Game;
