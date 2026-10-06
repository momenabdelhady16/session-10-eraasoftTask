function isNumber(...input) {
    for (let element of input) {
        if (Number.isNaN(element) || typeof element != "number") {
            console.log(`Error: ${element} is not a number!`);
            return false;
        }
    }
    return true;
}
function isInfinity(input) {
    return !Number.isFinite(input);
}
// function oddOrEven(inputToTest) {
//     if (!isNumber(inputToTest)) {
//         return;
//     }
//     if (isInfinity(inputToTest)) {
//         console.log(
//             `${inputToTest} is neither even nor odd, it's not a fixed number.`,
//         );
//         return;
//     }
//     if (inputToTest % 2 == 0) {
//         console.log(`${inputToTest} is an even number`);
//     } else {
//         console.log(`${inputToTest} is an odd number`);
//     }
// }
// oddOrEven(1);
// oddOrEven(2);
// oddOrEven(10);
// oddOrEven(10.6);
// oddOrEven("1");
// oddOrEven({});
// oddOrEven([]);
// oddOrEven(Infinity);
// oddOrEven("a");
// oddOrEven(null);
// oddOrEven(undefined);
// oddOrEven(NaN);

// function compareNumbers(num1, num2) {
//     if (!isNumber(num1,num2)) {
//         return;
//     }
//     if (num1 > num2) {
//         console.log(`${num1} is greater than ${num2}, ${num1} is greater.`);
//     } else if (num1 < num2) {
//         console.log(`${num1} is less than ${num2}, ${num2} is greater.`);
//     } else {
//         console.log(`${num1} equals ${num2} !`);
//     }
// }
// compareNumbers(1, 2);
// compareNumbers(5, 4);
// compareNumbers(6, 6);
// compareNumbers(Infinity, 10);
// compareNumbers(-Infinity, 10);
// compareNumbers(Infinity, -Infinity);
// compareNumbers(-Infinity, Infinity);
// compareNumbers("a", 10);
// compareNumbers("a", "b");
// compareNumbers({}, []);
// compareNumbers(1, null);
// compareNumbers(1, false);
// compareNumbers(NaN, NaN);

// function getCurrentYear() {
//     return new Date().getFullYear();
// }
// function calcAge(birthYear, currentYear) {
//     if (!isNumber(birthYear,currentYear)) {
//         return;
//     }
//     if (
//         isInfinity(currentYear) ||
//         isInfinity(birthYear) ||
//         birthYear > currentYear
//     ) {
//         console.log(
//             "Invalid input, Years must be not infinity, and birth year must be less than current year.",
//         );
//         return;
//     }
//     console.log(`Your age is: ${currentYear - birthYear}`);
// }
// calcAge(2000, getCurrentYear());
// calcAge(1960, getCurrentYear());
// calcAge(2010, 2030);
// calcAge(Infinity, getCurrentYear());
// calcAge(-Infinity, getCurrentYear());
// calcAge([], getCurrentYear());
// calcAge(NaN, getCurrentYear());
// calcAge(null, getCurrentYear());
// calcAge("hi", getCurrentYear());
// calcAge(2000, "2026");

// function printOdd(input) {
//     if (!isNumber(input)) {
//         return;
//     }
//     if (isInfinity(input)) {
//         console.log("Error: Infinity loop!");
//         return;
//     }
//     if (input < 1) {
//         console.log(`Error: ${input} is less than 1!`);
//         return;
//     }
//     for (let i = 1; i <= input; i += 2) {
//         console.log(i);
//     }
// }
// printOdd(101);
// printOdd(Infinity);
// printOdd(-1);
// printOdd(0);
// printOdd("a");
// printOdd(null);
// printOdd(undefined);
// printOdd(NaN);
// printOdd([]);
// printOdd({});

function sumTo(input) {
    if (!isNumber(input)) return;
    if (isInfinity(input)) {
        console.log("Error: Infinity loop!");
        return;
    }
    let sum = 0;
    let counter = Math.trunc(Math.abs(input));
    let fraction = input - Math.trunc(input);
    //الطريقة دي معتمدة على معادلة المتسلسلة الرياضية
    // if (!Number.isInteger(input)) {
    //     counter += 1;
    //     sum = (counter * Math.abs(input + fraction)) / 2;
    // } else {
    //     sum = (counter * (Math.abs(input) + 1)) / 2;
    // }
    // // هنا كونسل مخصصة للعمل مع معادلة المتسلسلة لان المعادلة بتشتغل على القيم المطلقة وبتهمل الاشارة فبيتم اضافة الاشارة هنا
    // if (input < 0) {
    //     console.log(`The sum from 0 to ${input} is: ${-sum.toFixed(2)} `);
    // } else {
    //     console.log(`The sum from 0 to ${input} is: ${+sum.toFixed(2)} `);
    // }

    for (let i = fraction;; ) {
        sum += i;
        if(i == input) break;
        if (input > 0) {
            i++;
        } else {
            i--;
        }
    }
    console.log(`The sum from 0 to ${input} is: ${+sum.toFixed(3)} `);
}
sumTo(-5);
sumTo(5);
sumTo(5.6);
sumTo(-5.6);
sumTo(55.6);
sumTo(-55.6);
sumTo(-0);
sumTo(0);
sumTo(+[]); // 0
sumTo(0.005);
sumTo('a');
sumTo(null);
sumTo(Infinity);
sumTo({});
sumTo([]);
