const counter = document.getElementById("counter");
const addButton = document.getElementById("button-add");
const subButton = document.getElementById("button-sub");
const randButton = document.getElementById("button-bgc");
const body = document.getElementsByTagName("body")[0];
const clrButton = document.getElementById("button-clear");

addButton.addEventListener("click", () => {
    counter.textContent++;
});

subButton.addEventListener("click", () => {
    if (counter.textContent == 0) { return; }
    counter.textContent--;
});

randButton.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    body.style.backgroundColor = randomColor;
});

clrButton.addEventListener("click", () => {
    counter.textContent = 0;
});