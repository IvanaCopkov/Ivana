/*
et js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN');
*/

/* Coding challenge 1 */
/*
const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI);
*/
/*
const fisrtName = 'Ivana';
const job = 'student';
const birthYear = 1999;
const year = 2021;

const ivana = "I'm " + fisrtName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(ivana);

const ivanaNew = `I'm ${fisrtName}, a ${year - birthYear} years old ${job}!`;
console.log(ivanaNew);

console.log(`I'm ${fisrtName}, a ${year - birthYear} years old ${job}!`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);
*/
/*
const age = 17;

if (age >= 18) {
    console.log(`Ivana can start driving licence!`);
} else {
    const yearsLeft = 18 - age;
    if (yearsLeft === 1) {
        console.log(`Ivana is too young. Wait another ${yearsLeft} year!`)
    } else {
        console.log(`Ivana is too young. Wait another ${yearsLeft} years!`)
    }
}

const birthYear = 1956;
let century;
if (birthYear <= 2000) {
    century = 20;
    console.log(`You are born in ${century}th century.`)
} else {
    century = 21;
    console.log(`You are born in ${century}st century.`)
}
console.log(century);
*/

/* Coding challenge 2 */
/*
const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI})!`)
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI(${markBMI})!`);
}
*/

/*
const age = '18';

if (Number(age) === 18) console.log('You just became an adult!'); // najsigurniji nacin za poredjenje stringa i broja

if (age === 18) console.log('You just became an adult!'); // nije moguce uporediti string i broj sa ===

if (age == 18) console.log('You just became an adult!'); // moguc nacin, ali moze proizvesti bagove
*/

/* Coding Challenge 3 */
/*
const avgDolphins = (96 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;
console.log(`Average Dophins(${avgDolphins})`);
console.log(`Average Koalas(${avgKoalas})`);
if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log("Dolphins are the winner of the competition!");
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
    console.log("Koalas are the winner of the competition!");
} else if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log("They have the same average score!");
} else {
    console.log("No team wins the trophy!");
}
*/

/* Coding challenge 4 */
/*
const bill = 275;
let tip;

console.log(`The bill was ${bill}, the tip was ${tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2}, and the total value ${bill + tip}`);
 */
