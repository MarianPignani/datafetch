const navbar = document.querySelector("#navbar");
const open = document.querySelector("#open");
const closed = document.querySelector("#one");
const closedT = document.querySelector("#two");
const closedTh = document.querySelector("#three");
const closedF = document.querySelector("#four");
const closedFi = document.querySelector("#five");
const closedS = document.querySelector("#six");


open.addEventListener("click", () => {
    navbar.classList.add("visible");
})

closed.addEventListener("click", () => {
    navbar.classList.remove("visible");
})

closedT.addEventListener("click", () => {
    navbar.classList.remove("visible");
})

closedTh.addEventListener("click", () => {
    navbar.classList.remove("visible");
})

closedF.addEventListener("click", () => {
    navbar.classList.remove("visible");
})

closedFi.addEventListener("click", () => {
    navbar.classList.remove("visible");
})

closedS.addEventListener("click", () => {
    navbar.classList.remove("visible");
})