let index = 0;

function next() {
    const slider = document.getElementById("slider");
    index -= 200;
    slider.style.transform = `translateX(${index}px)`;
}

function prev() {
    const slider = document.getElementById("slider");
    index += 200;
    slider.style.transform = `translateX(${index}px)`;
}