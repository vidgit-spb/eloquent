for (let i = 0; i < 20; i++) {
  if (i % 3 == 0) {
    if (i % 5 != 0) {
      console.log("Fizz");
    } else {
      console.log("FizzBuzz");
    }
  } else {
    if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
