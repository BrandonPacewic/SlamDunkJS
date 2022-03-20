console.log('it works');

const paragraph = document.createElement('p');
paragraph.textContent = 'this is a paragraph';
paragraph.classList.add('myParagraph');

console.log(paragraph);

const newDiv = document.createElement('div');
newDiv.append(paragraph);

// document.body.appendChild(newDiv);
document.body.append(paragraph);

const newHeading = document.createElement('h2');
newHeading.textContent = 'I love Typescript';
newDiv.append(newHeading);

const newUnorderedList = document.createElement('ul');
newUnorderedList.classList.add('testList');

const textItems = ['one', 'two', 'three', 'four', 'five', 'six'];

for (let i = 0; i < textItems.length; i++) {
  const nexItem = document.createElement('li');
  nexItem.textContent = textItems[i];
  newUnorderedList.append(nexItem);
}

newDiv.append(newUnorderedList);

