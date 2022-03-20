console.log('it works');
const item = document.querySelector('.item');

// item.innerHTML = `<h1>this is some heading text</h1>`;
console.log(item.innerHTML);

const someNewHTML = `
  <h1>this is some new heading text</h1>
  <h2>This is more new heading text</h2>
`;

// item.innerHTML = someNewHTML;
console.log(item.innerHTML);
console.log(typeof item);

const fragment = document.createRange().createContextualFragment(someNewHTML);

console.log(fragment.querySelector('h1'));

document.body.append(fragment);