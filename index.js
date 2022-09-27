let entriesPara = document.getElementById("entries");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    // console.log("increment button clicked");
    count += 1;
    countEl.textContent = count;
}

function save() {
    // console.log("saved button clicked");
    let countStr = count + " - ";
    entriesPara.textContent += countStr;
    count = 0;
    countEl.textContent = count;
}

function reset() {
    // console.log("clear button clicked");
    entriesPara.textContent = "Previous entries: ";
}