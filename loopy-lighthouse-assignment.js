var x = 100;
while (x <= 200) {
  if (x % 4 === 0 && x % 3 === 0) {
    console.log("LoopyLighthouse");
  }
  else if (x % 4 === 0) {
    console.log("Lighthouse");
  }
  else if (x % 3 === 0) {
    console.log("Loopy");
  }
  else {
    console.log(x);
  }
  x = x + 1;
}

const amounts = [61.00, 52.25, 112.99, 5.00];
let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);


var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];



