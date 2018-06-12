// Example: Filtering
// Conventional
const animals = ["cat", "dog", "fish"];
var threeLetterAnimals = [];
for (let i = 0; i < animals.length; i++) {
    if (animals[i].length === 3) {
        threeLetterAnimals.push(animals[i]);
    }
}
console.log(threeLetterAnimals); // ["cat", "dog"]
