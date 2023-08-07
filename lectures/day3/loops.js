var i = 15;

for (var i = 0; i < 5; i = i + 1) {
  console.log(i)
}

console.log("This is outside the looop the value of i: ",i)


for (var num = 0; num <= 10; num++) {
  console.log(num / 2)
  if (num % 2 == 0) {
    console.log("Num is even", num)
  } 
}



var dogNames = ["Vicky", "Leia", "Shiro", "Audi", "Rey", "Blue", "Soup", "Pickle", "Baxter", "Titan"]

// index
for (var i = 0; i < dogNames.length; i++) {
  console.log("My favorite dog name is:", dogNames[i]);
  if (dogNames[i] == "Soup") {
    console.log("Give that dog a cookie!")
  }
}