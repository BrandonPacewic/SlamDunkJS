const removeButton = document.querySelector('.remove');
removeButton.addEventListener('click', () => {
  removeButton.remove();
});

document.querySelector('.butts').addEventListener('click', () => {
  console.log('it got clicked');
  document.body.append(removeButton)
});

const handleManyButtonClick = (event) => {
  const button = event.target;

  console.log('You pressed a button');
  console.log(event.target.dataset.item);

  console.log(event.target);
  console.log(event.currentTarget);
  console.log('are the the same?', button === event.currentTarget);

  // Stop Propagation
  // event.stopPropagation();
};

const manyButtons = document.querySelectorAll('.manyButtons');
manyButtons.forEach(button => {
  button.addEventListener('click', handleManyButtonClick);
});

// Propagation, Both the window and the button 
// can be clicked on at the same time
// Captrure ? start at the top then go down or start at the bottom
// and work it's way up
window.addEventListener('click', () => {
  console.log('you clicked the window');
}, { capture: true });
