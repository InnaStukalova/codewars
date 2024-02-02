// function shortcut (string) {
//   return string.replace(/[aeiou]/g, '');
// }

// const quarterOf = (month) => {
//   return Math.ceil (month / 3);
// };

// function invert(array) {
//   return array.map((number) => number * -1);
// }

// function repeatStr (n, s) {
//   return s.repeat(n);
// }

// console.log(repeatStr(1, 'lol'));

// function getTimeFromMinutes(t) {
//     return Math.ceil(t / 60);
// }


// console.log(getTimeFromMinutes(150));

// function digits(n) {
//     return String(n).length;
//   }


//   function perimeterSequence(a,n) {
//     return (a * 4) * n;
//   }

// function removeChar(str){
//     return str.slice(1, -1);
//    }

// function noSpace(x){
//     return x.replaceAll(' ', '');
// }


// function solution(str, ending){
//     return str.endsWith(ending);
//   }


// function simpleMultiplication(number) {
//     return number % 2 === 0 ? number * 8 : number * 9;
// }


// function finalGrade (exam, projects) {
//     return exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0;
//   }

// function switchItUp(number){
//       switch (number) {
//         case 1 : return 'One';
//         case 2 : return 'Two';
//         case 3 : return 'Three';
//         case 4 : return 'Four';
//         case 5 : return 'Five';
//         case 6 : return 'Six';
//         case 7 : return 'Seven';
//         case 8 : return 'Eight';
//         case 9 : return 'Nine';
//         case 0 : return 'Zero';
//       }
//   }

// function updateLight (current) {
//   switch (current) {
//           case 'green' : return 'yellow';
//           case 'yellow' : return 'red';
//           case 'red' : return 'green';
// }
// }

// function rentalCarCost(d) {
//     switch (d) {
//               case d >= 7 : return d * 40 - 50;
//               case d >= 3 && d < 7 : return d * 40 - 20;
//               case d < 3 : return d * 40;
// }
// }

// function rentalCarCost(d) {
//   return d >= 7 ? d * 40 - 50 : d >= 3 && d < 7 ? d * 40 - 20 : d * 40;
// }


function typeOfSum(a, b) {
  return typeof(a + b);
}
