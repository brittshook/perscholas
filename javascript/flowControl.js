const num = 100;

if (num > 0) {
    if (num > 100) {
        console.log("This number is positive and greater than 100.");
    } else if (num === 100) {
        console.log("This number is positive and exactly 100.");
    } else {
        console.log("This number is positive and less than 100.");
    }
} else if  (num == 0) {
    console.log("This number is neither positive nor negative and exactly 0.");
} else {
    console.log("This number is negative.");
}

const grade = 90;

if (grade >= 90) {
    console.log("A")
} else if (grade >= 80) {
    console.log("B")
} else if (grade >= 70) {
    console.log("C")
} else if (grade >= 55) {
    console.log("D")
} else {
    console.log("F")
};