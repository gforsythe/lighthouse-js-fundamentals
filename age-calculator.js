function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth

  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Bianca", 2001, 2020));
