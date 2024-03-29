// Get Values From The Page
// starts or controller function
function getValues() {
    //get values from page
    let startValue = document.getElementById("fizzValue").value;
    let endValue = document.getElementById("buzzValue").value;
    // Valadition Is Needed For Input
    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //call displaynumbers
        displayNumbers(numbers);
    } else {
        alert("Enter Intergers Only")
    }

}


// Generate Numbers Between Start Value and End Value
// logic function(s)
function generateNumbers(sValue, eValue) {

    let numbers = [];


    // get all numbers fron start to end
    // check to see if divisible by (3 and 5)
    // check to see if divisible by (3)
    // check to see if divisible by (5)
    for (let i = 1; i <= 100; i++) {
        if (i % sValue == 0 && i % eValue == 0) {
            numbers.push("FizzBuzz");
        } else if (i % sValue == 0) {
            numbers.push("Fizz");
        } else if (i % eValue == 0) {
            numbers.push("Buzz");
        } else {
            numbers.push(i);
        }

    }

    return numbers;
}


// Generate Numbers Between Start Value and End Value
// using a switch statement as an alternative is an option
function generateNumbersAlt(sValue, eValue) {
    let numbers = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i <= 100; i++) {
        Fizz = i % sValue == 0;
        Buzz = i % eValue == 0;

        switch (true) {
            case Fizz && Buzz: {
                numbers.push('FizzBuzz');
                break;
            }
            case Fizz: {
                numbers.push('Fizz');
                break;
            }
            case Buzz: {
                numbers.push('Buzz');
                break;
            }
            default: {
                numbers.push(i);
                break;
            }

        }
    }
    return numbers;
}


// Generate Numbers Between Start Value and End Value
// using a ternary operator as an another option
function generateNumbersAlt2(sValue, eValue) {

    let numbers = [];

    for (let i = 0; i <= 100; i++) {
        let value = ((i % sValue == 0 ? 'Fizz' : '') + (i % eValue == 0 ? 'Buzz' : '') || i);
        numbers.push(value);
    }

    return numbers;
}


// loops over the array and creates a tablerow for each item
// display or view function
function displayNumbers(numbers) {

    // get the table body element from the page 
    let tableBody = document.getElementById("results");

    // get template row
    let templateRow = document.getElementById("fbTemplate");

    // clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < numbers.length; i += 5) {

        let tableRow = document.importNode(templateRow.content, true);

        // grab use to put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(numbers[i]);
        rowCols[0].textContent = numbers[i];

        rowCols[1].classList.add(numbers[i + 1]);
        rowCols[1].textContent = numbers[i + 1];

        rowCols[2].classList.add(numbers[i + 2]);
        rowCols[2].textContent = numbers[i + 2];

        rowCols[3].classList.add(numbers[i + 3]);
        rowCols[3].textContent = numbers[i + 3];

        rowCols[4].classList.add(numbers[i + 4]);
        rowCols[4].textContent = numbers[i + 4];



        tableBody.appendChild(tableRow);
    }

}