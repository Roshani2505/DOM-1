// Selecting elements
const colorInput = document.getElementById("colorInput");
const textInput = document.getElementById("textInput");
const box = document.getElementById("box");
const changeBgBtn = document.getElementById("changeBgBtn");
const updateTextBtn = document.getElementById("updateTextBtn");

// Change Background Button
changeBgBtn.addEventListener("click", function () {
    let color = colorInput.value.trim();

    // Test color validity
    let testColor = document.createElement("div");
    testColor.style.borderColor = color;

    if (testColor.style.borderColor === "") {
        alert("Invalid color name!");
    } else {
        box.style.backgroundColor = color;
    }
});

// Update Text Button
updateTextBtn.addEventListener("click", function () {
    let text = textInput.value.trim();

    if (text === "") {
        alert("Please enter some text!");
    } else {
        box.textContent = text;
    }
});
