let ul = document.querySelector("#item-list");

let button = document.querySelector("#btn");

button.addEventListener("click", function () {

    let count = ul.children.length + 1;

    let newLi = document.createElement("li");
    newLi.textContent = "Item " + count;

    if (count % 2 === 1) {
        newLi.style.fontWeight = "bold";
        newLi.style.color = "blue";
    } else {
        newLi.style.fontStyle = "italic";
        newLi.style.color = "red";
    }

    ul.appendChild(newLi);
});
