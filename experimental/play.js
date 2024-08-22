import { styleText } from "node:util";
import { stdout } from "node:process";
import { log } from "node:console";

console.clear();
log("  o    ______________ ");
log(" /\_  _|             |");
log("_\__`[_______________|");
log("] [ \, ][         ][\n");

const lyrics = [
  "I see 🌳 ",
  styleText("green", "trees of green\n"),
  `${styleText("red", "Red roses")}🌹 too\n`,
  `I see them ${styleText("bgBlue", " bloom ")}🌸\n`,
  "For me and you\n\n",
];

let i = 0;
const interval = setInterval(() => {
  if (i === lyrics.length - 1) {
    clearInterval(interval);
  }
  stdout.write(lyrics[i]);
  i++;
}, 2000);
