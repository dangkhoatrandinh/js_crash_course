// alert("Hello World from main.js")
//console.log("Hello World")
//console.error("This is an error")
//console.warn("This is a warning")

// let, const
const age = 500;
//console.log(age);

let score = 10;
score++;
//console.log(score);

// Data Type: string, number, boolean, null, undefined
const name = "John";
const year = 12;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

// Template String
const hello = (`My name is ${name} and I'm ${age}`);
//console.log(hello);

const s = 'Hello World';
//console.log(s.length);
//console.log(s.toUpperCase());
//console.log(s.substring(0, 5).toUpperCase());
//console.log(s.split(''));

// Arrays
const fruits = ["apples", "oranges", "pears"];
fruits.push("graphs");
fruits.unshift("mangos");
fruits.pop();
fruits.shift();
//console.log(Array.isArray(fruits));
//console.log(fruits.indexOf("apples"));
//console.log(fruits);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "movies", "sport"],
    address: {
        street: "50 Main st",
        city: "Boston",
        state: "MA"
    }
};
//console.log(person);
const { firstName, lastName, address: {city} } = person;
//console.log(firstName, lastName, city);

person.emmail = "johndoe@gmail.com";
//console.log(person);

const todos = [
    {
        id: 1, 
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2, 
        text: "Meeting with boss",
        isCompleted: true
    }, 
    {
        id: 3, 
        text: "Dentist appt",
        isCompleted: false
    }
];

const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);

// Array Loop
//for (let todo of todos)
    //console.log(todo.id);

// forEach, map, filter
//todos.forEach((todo) => { console.log(todo.text) });
//const todoText = todos.filter((todo) => { return todo.text} );
//console.log(todoText);
const todoCompleted = todos.filter((todo) => { return todo.isCompleted == true; })
                        .map((todo) => {return todo.text});
//console.log(todoCompleted);

// Condition
const a = 10;
// if (a === 10) // match data type
//     console.log(`a === 10`);
// else if (a == 10) // not match data type
//     console.log(`a == 10`);
// else 
//     console.log('a != 10');

const color = x > 10 ? "red" : "green";
// switch (color) {
//     case "red":
//         console.log("Red");
//         break;
//     case "blue":
//         console.log("Blue");
//         break;
//     default:
//         console.log("Not red or blue");
//         break;
// }

// Function

function addNums2(num1, num2) {
    //console.log(num1 + num2);
}

const addNums = (num1, num2) => { return num1 + num2; }
//console.log(addNums(3, 10));

// Constructor function Pre-Classes
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// Instantiate object
// const person1 = new Person("John", "Doe", "4-3-1980");
// const person2 = new Person("Mary", "Smith", "3-6-1970");
// console.log(person1);

// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person("John", "Doe", "4-3-1980");
//console.log(person1.getFullName());

// // DOM 
// console.log(document);
// // Single element
// const form = document.getElementById('my-form');
// console.log(form);
// console.log(document.querySelector('#my-form'));

// Multiple element
// const items = document.querySelectorAll('.item');
// items.forEach((item) => { console.log(item); });

// const ul = document.querySelector('.items');

// console.log(ul.lastElementChild.innerHTML);
// ul.lastElementChild.textContent = "Hello";

// ul.children[1].textContent = "Khoa";
// //ul.lastElementChild.innerHTML = "<h1>Hello</h1>"

// const btn = document.querySelector('.btn');
// // click, mouseover, mouseout
// btn.addEventListener('mouseover', (event) => {
//     //console.clear();
//     event.preventDefault();
//     document.querySelector('#my-form')
//                 .style.class = '#ccc';
//     //document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(nameInput.value);
    console.log(emailInput.value);

    if (nameInput.value == "" || emailInput.value == "") {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => { msg.remove(); }, 3000);
    } 
    else {
        const li = document.createElement('li');
        //li.appendChild(document
        //    .createTextNode(`${nameInput.value} ${emailInput.value}`));
        li.innerHTML = `${nameInput.value} : ${emailInput.value}`;
        console.log(li);
        userList.appendChild(li);
    }
});