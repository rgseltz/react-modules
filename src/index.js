import { choice, remove } from './helpers';
import foods from './foods';

let randomFruit = choice(foods);

console.log(`I'd like ${randomFruit} please`);
console.log(`Here's one ${randomFruit}`);
console.log(`Delicious! May I have another?`);
remove(foods, randomFruit);
console.log(`Sorry, we're all out. We only have ${foods.length} items left`);
