Looping a Triangle:

for (let number = "#"; number.length <= 7; number += "#") {
    console.log(number);
  }

Fizz Buzz:

for (let number = 1; number <= 100; number += 1) {

    if(number % 3 == 0){
      console.log("Fizz");
    }
  
    if(number % 5 == 0){
      console.log("Buzz");
    }
  
    if(number % 5 == 0 && number % 3 == 0){
      console.log("FizzBuzz");
    }
  
    else console.log(number);
  }

Chessboard:

/* (I tried my best to figure this one out
but I had trouble so eventually had to look 
at the solution to work backwards)*/

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);