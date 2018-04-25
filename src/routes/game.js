import Game from "~/components/game/game.vue";
import GameRes from "~/components/game/gameRes.vue";
import GameStats from "~/components/game/gameStats.vue";

export default [
  {
    path: "/game",
    component: Game,
    children: [
      {
        path: "res",
        component: GameRes
      },
      {
        path: "stats",
        component: GameStats
      }
    ]
  }
];
