//snippet for demostrating <template> version 1:
const tempSpace = document.querySelector("#template-space");
const template = document.querySelector(".template1");
const button = document.querySelector(".template-btn1");

button.addEventListener("click", () => {
  let clone = template.content.cloneNode(true);
  tempSpace.append(clone);})


//snippet for demostrating <template> version 2:
const template2 = document.querySelector(".template2");

function display() {
  let clone2 = template2.content.cloneNode(true);
  tempSpace.append(clone2);
} 