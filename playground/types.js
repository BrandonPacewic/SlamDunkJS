'use strict';

const char = 'a';
const num = 100;

const me = {
    age: 16,
    name: 'Brandon',
    pet: 'Leo'
};

console.log(me);

document.body.innerHTML = `
    <body>
        <div>
            <h3> ${Math.round(Math.random() * 1000)} </h3>
        </div>

        <h2>${me.name}</h2>
        <h3>${me.age}, ${me.pet}</h3>
    </body>
`