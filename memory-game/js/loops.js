// While Loop Example
let ovenTemperature = 0;

while (ovenTemperature < 350) {
   console.log('Keep preheating the oven.');
   ovenTemperature += 5;
}

// For loop Example
for (let i = 0; i < 10; i += 1) {
    // Do ten push-ups
    console.log('Do another push-up!');
 }

// Looping through an array example
const students = ["Mark", "Melissa", "Noopur", "Olga", "Vivek"];

// Loop over the array of students
for (let i = 0; i < students.length; i += 1) {
   // Greet each student by name
   console.log("Hello " + students[i]);
}



let max = 20;
let result;

for (let i = 1; i <= max; i += 1) {
    switch (true) {
        case (i % 3 === 0 && i % 5 === 0):
            result = "fizzbuzz";
            break;
        case (i % 3 === 0):
            result = "fizz";
            break;
        case (i % 5 === 0):
            result = "buzz";
            break;
        default:
            result = i;
    }
    console.log(result);
}

