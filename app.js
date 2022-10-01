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

const locationName = document.getElementById('location');
console.log(locationName);

const updateBtn2 = document.getElementById('update-btn2');
updateBtn2.addEventListener('click', () => {
    console.log('i am clicking the button');
    const locationInput = document.getElementById ('location-input');
    locationName.textContent = locationInput.value;
});
