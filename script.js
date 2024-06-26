function myRotate(x) {    
    x.classList.toggle("change");
}   
function toggleNav() {    
    let elements = document.getElementsByClassName('top-nav');
    if(document.getElementById('hamburger').style.marginBottom === "10rem") {
        document.getElementById('hamburger').style.marginBottom="0";
    }
    else {
       document.getElementById('hamburger').style.marginBottom="10rem"; 
    }
    for(let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('show');
    }
}

/* This is some TypeScript fun 
// This is to test in the terminal. 
let name = 0;
let sami = "sami";
const interestRate = 0.3;
typeof name;
console.log(name);
console.log(interestRate);
console.log(sami);
console.log('This is a test, will delete soon. \ntoodles! \t !\n\n\n\n');

// Object Literal
let person = {
    name: 'Mosh', 
    age: 30
};
console.log(person);
console.log(person.age);

// Bracket Notation 
person['name'] = 'Belinda Vivero';
console.log(person.name);

let selection = 'name';
person[selection] = 'Mary';
console.log(person.name);


let selectedColors = ['red', 'blue'];
console.log(selectedColors + "\n");
selectedColors[2] = "green";

console.log(selectedColors[0]);

// Performing a task Functions 
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName + '.');
}

greet('Adan', 'Vivero');
greet('Belinda', 'Vivero');

// Calculate a value
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);
*/