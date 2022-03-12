const people = [
    { name: 'Wes', cool: true, country: 'Canada' },
    { name: 'Scott', cool: true, country: 'Merica' },
    { name: 'Snickers', cool: false, country: 'Dog Country' },
];

console.table(people);

people.forEach((person, index) => {
    console.log(person.name);
});

// Console Methods

// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

const lots_of_logs = () => {
    console.group('looping');

    for (let i = 0; i < 20; i++) {
        console.log(`hi i am ${i}`);
    }
}

const clickable = document.querySelector('.runningALot');

console.log(clickable);

clickable.addEventListener('click', lots_of_logs);

function doctorize(name) {
    return `Dr. ${name}`;
}

function greet(name) {
    doesntExist();
    return `Hello ${name}`;
}

function go() {
    const name = doctorize(greet('Wes'));
    console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
    const newFontSize =
        parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
    e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
    const res = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'text/plain',
        },
    });
    const joke = await res.text();
    console.log(joke);
    return joke;
}
