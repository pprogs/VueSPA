import MainLoop from "mainloop.js";

import Res from "./res.js";
import Man from "./some.js";

function Game() {
  this.title = "Hello world 2";
  this.mainLoop = MainLoop;

  this.resources = [
    Res(1, "r_coal"),
    Res(2, "r_iron"),
    Res(3, "r_stone"),
    Res(4, "r_wood"),
    Res(5, "r_copper"),
    Res(6, "r_oil"),
    Res(7, "r_platina"),
    Res(8, "r_cvartz")
  ];

  this.resourcesStats = {};

  this.resources.forEach(r => {
    this.resourcesStats[r.name + "Counts"] = { link: r };
  });

  this.machines = {};
}

Game.prototype = {
  getTitle: function() {
    return this.Title;
  },

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

  stop: function() {
    this.mainLoop.stop();
  },

  update: function(delta) {
    this.resources.forEach(function(res) {
      res.update(delta);
    }, this);

    this.updateResourcesStats();
  },

  updateResourcesStats: function() {
    this.resources.forEach(r => {
      this.resourcesStats[r.name + "Counts"] = {
        count: r.count(),
        name: r.name,
        id: r.id,
        link: r
      };
    });
  },

  buyResource: function(id, amount) {
    const r = this.resources.find(res => res.id == id);
    r.produce(amount);
  }
};

export default Game;
