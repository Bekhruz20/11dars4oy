let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log("Sum:", sum);












let a = '12';
let numberA = parseInt(a);  
console.log(numberA); 









let d=Math.floor(Math.random()*100)
console.log(d)
if (d%2==0) {
    console.log('juft son');    
} else {
    console.log('toq son'); 
}













let m = prompt("Soz kiriting. Sozingizni 'MARS' bilan va u siz yozib koring")
m.toLowerCase
let mars='mars'
if (m.includes(mars)) {
    console.log('MARS')
} else {
    console.log('MARS IT SCHOOL')
}














let words = ["apple", "banana", "orange", "grape", "pineapple", "nut", "BMW"];
console.log("Starter arrey", words)
let longerWords = [];
for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
        longerWords.push(words[i]);
    } 
}
console.log("Words with length 5 or more:", longerWords);













let evenNumbers = [];
let oddNumbers = [];
for (let number = 1; number <= 100; number++) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    } else {
        oddNumbers.push(number);
    }
}
console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);


