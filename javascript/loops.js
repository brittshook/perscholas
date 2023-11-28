// Count down from 10 to 1.
for (let i = 10; i > 0; i--) {
    console.log(i);
};

// Output odd numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
        console.log(i);
    };
};

// Output even number from 1 to 10.
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    };
};

// Output multiples of 3, starting at 6 and ending at 60.
for (let i = 6; i <= 60; i++) {
    if (i % 3 === 0) {
        console.log(i);
    };
};

// Output an increasing number of # symbols, from 1 to 7, as shown below.
// let poundStr = '';

for (let i = 1; i <= 7; i++) {
    poundStr += '#';
    console.log(poundStr);
};

// Now, write a for loop that iterates from 1 to 20. The loop should:
// Print “prime” for all prime numbers.
// Print “even” for all even numbers.
// Print “odd” for all odd numbers.
// Treat 2 as an even number and 1 & 3 as odd, rather than prime.

for (let i = 1; i <= 20; i++) {
    let multiples = 0;
    let evenOrOdd = '';
    let primeOrNot = '';

    (i % 2 === 0) ? evenOrOdd =('even') : evenOrOdd = ('odd');

    for (let j = 1; j <= i; j++) {   
        if (i % j === 0) {
            multiples++;
        }
    };
    
    (multiples === 2) ? primeOrNot = 'prime' : primeOrNot = 'not prime';

    console.log(`${i} is ${evenOrOdd} and ${primeOrNot}`);
};

// Count down to 0 from a given number.
let num = 30;

while (num >= 0) {
    console.log(num--);
};

// Log integers in multiples of 3 as long as they are less than 35.
// let intsMultiplesOf3 = 1;

while (intsMultiplesOf3 < 35) {
    if (intsMultiplesOf3 % 3 === 0) {
        console.log(intsMultiplesOf3);
    }

    intsMultiplesOf3++;
};

// Print integers in multiples of 5 as long as they are less than 100.
let intsMultiplesOf5 = 1;

while (intsMultiplesOf5 < 100) {
    if (intsMultiplesOf5 % 5 === 0) {
        console.log(intsMultiplesOf5);
    }

    intsMultiplesOf5++;
};

// Print integers between 0 and 20 with the following conditions:
// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.
let ints = 0;

while (ints <= 20) {
    if (ints % 2 === 0) {
        ints *= 3;
        console.log(ints);
    };

    ints++;
};

// Print all prime numbers between 0 and 20.
let prime = 0;

while (prime <= 20) {
    let multiples = 0;

    let i = 1 
    
    while (i <= prime) {   
        if (prime % i === 0) {
        multiples++;
        }

        i++
    };

    if (multiples === 2) {
        console.log(prime);
    };

    prime++;
};