// grab DOM elements

// set event listeners
const nameDisplay = document.getElementById('name');
console.log(nameDisplay);

const updateBtn = document.getElementById('update-btn');
updateBtn.addEventListener('click', () => {
    console.log('i am clicking the button');
const nameInput = document.getElementById('name-input');
nameDisplay.textContent = nameInput.value;
}); 
