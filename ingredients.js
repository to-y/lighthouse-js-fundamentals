var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i = 0;
var limit = ingredients.length;


while (i < limit) {
  console.log(ingredients[i]);
  i++;
}

console.log("\n");

// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < limit; i++) {
  console.log(ingredients[i]);
}

console.log("\n");
// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var arrayLength = limit - 1; arrayLength != -1; arrayLength--) {
  console.log(ingredients[arrayLength]);
}


