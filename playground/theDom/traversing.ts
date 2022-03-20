console.log('it works');

const wesItem = document.querySelector('.wes');
console.log('this is the first ', wesItem.childNodes);
console.log('this is the second', wesItem.firstChild);
console.log('this is the third', wesItem.lastChild);
console.log('this is the fourth', wesItem.children);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.append(p);

p.remove();

// Element still exists in code just not the dom
console.log(p);