import { styleText } from "node:util";

const lyrics = `I see ${styleText('green', 'trees of green')}
${styleText('red', 'Red roses')} too
I see them ${styleText('bgBlue', ' bloom ')}🌸`;

console.log(lyrics);
