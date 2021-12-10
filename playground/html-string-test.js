'use strict';

let string = '';
const times = 5;

for (let i = 0; i < times; i++) {
    string += i + ' cool' + '<br></br>';
}

const html = `
    <body>
        <div>
            <h2> ${string} </h2>
        </div<
    </body>
`

document.body.innerHTML = html;