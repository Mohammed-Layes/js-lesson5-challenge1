var button = document.querySelector(".show-cat");
// console.log(button);
var cat = document.querySelector("figure.cat");
// console.log(cat);

button.addEventListener("click", function () {
    // console.log("It's working!!!");
    cat.classList.add("show");
});