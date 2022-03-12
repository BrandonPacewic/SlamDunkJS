// functions in vars

function docterise(firstname) {
    return `Dr. ${firstname}`;
}

// anon function
// function (firstname) {
//     return `Dr. ${firstname}`;
// }

// function expression
const expression = function(name) {
    return `a name ${name}`;
}

function in_to_ch(inches) {
    const cm = inches * 2.54;
    return cm;
}

// arrow functions
const cm_to_in = (cm) => {
    return cm / 2.54;
}

const in_to_ft = (inches) => inches  / 12;

console.log(in_to_ft(12));

function _add(a, b = 3) {
    const total = a + b;
    return total;
}

const add = (a, b = 3) => a + b;

// returning an object
const make_baby = (first, last) => {
    const baby = {
        name: {first, last},
        age: 0,
    }

    return baby;
}

// one line object retrun
// dont do this

// const make_baby = (first, last) => ({name: {first, last}, age: 0});

// IIFE
// immediately invoked function expression
(function() {
    return 'you are cool';
})();

// methods
const wes = {
    name: 'me',
    hi: function() {
        console.log('hi');
    },
    // shorthand mothod
    yell() {
        console.log('yell');
    },
    wisper: () => {
        console.log('wisper');
    }
}

wes.hi();
wes.yell();

// callback functions
// click callback 
const button = document.querySelector('.clickme');

console.log(button);

button.addEventListener('click', () => {
    console.log('click detected');
});

// timer callback
setTimeout(() => {
    console.log('time is up!!');
}, 10000);
