const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
/*
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
};*/
console.log("These are the ingredients for banana bread: ");
/*let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
};*/

 //figure out the .reverse method later
for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);

};