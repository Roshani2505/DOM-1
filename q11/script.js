let heading = document.getElementById("This is main-heading");
heading.textContent = "Welcome to the DOM World!";

let allParagraphs = document.getElementsByTagName("p");

for (let i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].style.color = "blue";
}

let containerDiv = document.querySelector(".container");
containerDiv.style.backgroundColor = "yellow";
