const counter = document.getElementById("counter");
const addButton = document.getElementById("button-add");
const subButton = document.getElementById("button-sub");

addButton.addEventListener("click", () => {
    counter.textContent++;
});

subButton.addEventListener("click", () => {
    if (counter.textContent == 0) { return; }
    counter.textContent--;
});