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


// function typeOfSum(a, b) {
//   return typeof(a + b);
// }


// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump <= mpg * fuelLeft ? true : false;
// };


// console.log(zeroFuel(300, 50, 1));


// var ArrowFunc = function(arr) {
//   return arr.map(e => String.fromCharCode(e)).join('');
// };


// function mergeArrays(arr1, arr2) {
//   return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b); 
// }


// function add(num1, num2) {
//     num1 = num1.toString().split('').reverse();
//     num2 = num2.toString().split('').reverse();
//     let max = Math.max(num1.length, num2.length);
//     let newArr = [];
//     for (let i = max - 1; i >= 0; i--) {
//         newArr.push(Number(num1[i] || 0) + Number((num2[i]) || 0));
//     }
//     let result = newArr.reduce((acc, ell) => acc.toString() + ell.toString());
//     return Number(result);
// }



// for (let obj of questions) {
//   obj.usersAnswer = null;
// }


function getTimeFromMinutes(hr) {

  let minutes = hr % 60;
  let hour = Math.floor(hr / 60);

switch (hour) {
  case 0:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log(`Это ${hour} часов и ${minutes} минут`);
    break;
  
  case 1:
    console.log(`Это ${hour} час и ${minutes} минут`);
    break;

  case 2:
  case 3:
  case 4:
    console.log(`Это ${hour} часа и ${minutes} минут`);
    break;
  
  default:
    console.log("Ошибка, проверьте данные");
    break;
}
  return hour;

}

getTimeFromMinutes(-1);




