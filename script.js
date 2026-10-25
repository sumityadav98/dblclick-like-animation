
const imageBox = document.querySelector("#imageBox");
const love = document.querySelector(".love");

imageBox.addEventListener("dblclick", function () {
    love.classList.remove("show");

    // Animation ko dobara chalane ke liye
    void love.offsetWidth;

    love.classList.add("show");
});
