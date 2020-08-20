// const notANumber = "sad" * 8; // NaN
// console.log(notANumber);

// let noValue; // undefined
// console.log(noValue);

// Data types
// 1. Boolean
// 2. Symbol
// 3. BigInt
// 4. null && undefined
// 5. Object
// 6. String
// 7. Number

// Dynamic types of variables and type conversion
// String(5) -> converts to a number to string
// console.log(concat + {}) -> [object Object]
// Number('10') -> converts a string into number or (+'10')
// console.log(!!'asd') -> converts a string into true. ! false

// Functions

// let abonement = "иииииКингуруиииии";

// let letter = "и";
// let letterCount = 0;

// for (let i = 0; i < abonement.length; i++) {
//   if (abonement.charAt(i) == letter) {
//       letterCount += 1;
//   }
// }

// console.log(letterCount);

// let counterA = ["г"];
// console.log(abonement.length);

// for (let i = 0; i < abonement.length; i++) {
//     console.log(abonement.charAt());
// }

// for (let i = 0; i < counterA.length; i++) {
//     console.log(counterA);
//     // console.log(abonement.charAt(2));
// }

// const howMuchA = () => {
// Counter init
//   let counter = 0;

//   // Looping through the text to search a letter "a"
//   for (let i = 0; i < abonement.length; i++) {
//     if (abonement.includes(counterA));
//     counter++;
//   }
//   // Log the response from console
//   console.log(`Этот текст содержит ${counter} counterA`);
// // };

// const firstRow = "мама мыла раму";
// const secondRow = "собака друг человека";

// // function getRow(firstRow, secondRow) {
//   let letterCountF = 0;
//   let letterCountS = 0;
//   let letter = "а";

//   for (let i = 0; i < firstRow.length; i++) {
//     if (firstRow.charAt(i) == letter) {
//       letterCountF += 1;
//     }
//   }

//   for (let i = 0; i < secondRow.length; i++) {
//     if (secondRow.charAt(i) == letter) {
//       letterCountS += 1;
//     }
//   }

//   if (letterCountF > letterCountS) {
//     console.log(firstRow);
//   } else {
//     console.log(secondRow);
//   }
// // }

// console.log(firstRow, secondRow);
// console.log(getRow(firstRow, secondRow)); // мама мыла раму

const firstRow = "мама мыла раму";
const secondRow = "собака друг человека";

function getRow(firstRow, secondRow) {
let letter = "м";
let letterCountA = 0;
let letterCountD = 0;

for (let i = 0; i < firstRow.length; i++) {
  if (firstRow.charAt(i) == letter) {
    letterCountA += 1;
  }
}

for (let i = 0; i < secondRow.length; i++) {
  if (secondRow.charAt(i) == letter) {
    letterCountD += 1;
  }
}

if (letterCountA > letterCountD) {
    console.log('Result 1 wins ' + firstRow);
} else {
    console.log('Result 2 wins ' + secondRow);
}
}
// console.log(firstRow, secondRow);

console.log(getRow(firstRow, secondRow)); // мама мыла раму
