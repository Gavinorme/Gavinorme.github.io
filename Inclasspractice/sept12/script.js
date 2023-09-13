const changeText = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "<strong>DANG IT DESMOND</strong>";
    helloP.classList.add("special");
}

const showHead = () => {
    document.getElementById("head").classList.remove("hide");
}

const hideHead = () => {
    document.getElementById("head").classList.add("hide");
}



// window.onload = () => {
//     const clickButton = document.getElementById("button-click");
//     clickButton.onclick = changeText;
// }

window.onload = () => {
document.getElementById("button-click").onclick = changeText;
document.getElementById("button-show").onclick = showHead;
document.getElementById("button-hide").onclick = hideHead;
}


