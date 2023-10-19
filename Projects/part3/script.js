//Main Page
//Slideshow
const Slideshow = () => {
    document.getElementById("img2").classList.add("hidden");
    document.getElementById("img3").classList.remove("hidden");
}
const Slideshow2 = () => {
    document.getElementById("img3").classList.add("hidden");
    document.getElementById("img2").classList.remove("hidden");
}

const toggleNav = () => 
{
    document.getElementById("nav-items").classList.toggle("hide-small");
};




window.onload = () => 
{
    document.getElementById("button-right").onclick = Slideshow;
    document.getElementById("button-left").onclick = Slideshow2;
    document.getElementById("hamburger").onclick = toggleNav;
}
