// -------------------- CHALLENGE 1 -------------------- //
// const MassMark = 78;
// const MassJohn = 92;
// const HeightMark = 1.69;
// const HeightJohn = 1.95;

// const MassMark = 95;
// const MassJohn = 85;
// const HeightMark = 1.88;
// const HeightJohn = 1.76;

// const BMIMark = MassMark / HeightMark ** 2;
// const BMIJohn = MassJohn / HeightJohn ** 2;
// const makrHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, makrHigherBMI);

// -------------------- CHALLENGE 2 -------------------- //

// const MassMark = 78;
// const MassJohn = 92;
// const HeightMark = 1.69;
// const HeightJohn = 1.95;

// const MassMark = 95;
// const MassJohn = 85;
// const HeightMark = 1.88;
// const HeightJohn = 1.76;

// const BMIMark = MassMark / HeightMark ** 2;
// const BMIJohn = MassJohn / HeightJohn ** 2;
// const makrHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI is higher than John's`);
// } else {
//   console.log(`John's BMI is higher than Mark's`);
// }

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's`);
// }

// -------------------- CHALLENGE 3 -------------------- //

// const scoreDolphins = (96 + 100 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreKoalas > scoreDolphins) {
//   console.log(`Koalas win the trophy`);
// } else if (scoreDolphins > scoreKoalas) {
//   console.log(`Dolphins win the trophy`);
// } else if (scoreKoalas === scoreDolphins) {
//   console.log(`Both win the trophy`);
// }

// ------------ BONUS 1 ------------ //
// if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log(`Koalas win the trophy`);
// } else if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log(`Dolphins win the trophy`);
// } else if (scoreKoalas === scoreDolphins) {
//   console.log(`Both win the trophy`);
// }

// ------------ BONUS 2 ------------ //

// if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log(`Koalas win the trophy`);
// } else if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log(`Dolphins win the trophy`);
// } else if (
//   scoreKoalas === scoreDolphins &&
//   scoreKoalas >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log(`Both win the trophy`);
// } else {
//   console.log(`No one wins the trophy`);
// }

// -------------------- CHALLENGE 4 -------------------- //

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

// -------------------- CHALLENGE 5 -------------------- //

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// const scoreDolphins = (44, 23, 71);
// const scoreKoalas = (49, 54, 49);

// const scoreDolphins = (85, 54, 41);
// const scoreKoalas = (23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koala wins (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log(`No team wins...`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// -------------------- CHALLENGE 6 -------------------- //

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, total);

// -------------------- CHALLENGE 7 -------------------- //

// const mark = {
//   fullname: "Mark Miller",
//   mass: 78,
//   height: 1.68,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullname: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s BMI (${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullname}'s BMI (${jhon.bmi}) is higher than ${mark.fullname}'s BMI (${mark.bmi})`
//   );
// }

// -------------------- CHALLENGE 8 -------------------- //

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 80, 52];
// const tips = [];
// const total = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   total.push(tip + bills[i]);
// }

// console.log(bills, tips, total);

// const calcAverage = function (o) {
//   let sum = 0;
//   for (let i = 0; i < o.length; i++) {
//     sum += o[i];
//   }
//   return sum / o.length;
// };

// console.log(calcAverage(tips));
// console.log(calcAverage(total));
