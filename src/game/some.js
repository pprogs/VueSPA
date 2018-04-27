import * as items from "./items";

const coalDrill = function() {
  this.name = "Coal burning drill";
  this.baseCost = {
    [items.STONE]: 5
  };
  this.num = 0;

  this.produce = {
    [items.COAL]: {
      num: 0,
      baseRate: 3,
      consume: {
        [items.COAL]: 1
      }
    }
  };
};

const smallStoneFurnace = function() {
  this.name = "Small stone furnace";
  this.baseCost = {
    [items.STONE]: 5
  };
  this.num = 0;
  this.produce = {
    [items.IRON_ING]: {
      num: 0,
      baseRate: 2,
      consume: { [items.IRON_ORE]: 3, [items.COAL]: 1 }
    },

    [items.COPPER_ING]: {
      num: 0,
      baseRate: 2,
      consume: { [items.COPPER_ORE]: 3, [items.COAL]: 1 }
    }
  };
};

export default {
  coalDrill,
  smallStoneFurnace
};
