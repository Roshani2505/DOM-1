// ------------------ FIXED BUGS BELOW ------------------

// FIX 1: Wrong ID "massage" → corrected to "message"
const para = document.querySelector('#message');

// FIX 2: Wrong method getElementByName → corrected to getElementById
const textButton = document.getElementById('textButton');

// FIX 3: Wrong method addClickEventListener → corrected to addEventListener
textButton.addEventListener('click', () => {

    // FIX 4: Wrong property contentText → corrected to textContent
    para.textContent = 'New Message';
});


// Selecting correct elements (no bugs here)
const box = document.getElementById('box');
const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', () => {

    // FIX 5: Typo styl → corrected to style
    box.style.backgroundColor = 'blue';
});
