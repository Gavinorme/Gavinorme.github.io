const showHead = () => {
    document.getElementById("head").classList.remove("hide");
}

const hideHead = () => {
    document.getElementById("head").classList.add("hide");
}

window.onload = () => {
    document.getElementById("button-show").onclick = showHead;
    document.getElementById("button-hide").onclick = hideHead;
    }