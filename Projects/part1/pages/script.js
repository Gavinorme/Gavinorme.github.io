//Main Page
//Slideshow
const Slideshow = () => {
    document.getElementById("img2").classList.add("hidden");
    document.getElementById("img3").classList.remove("hidden");
}

const toggleNav = () => 
{
    document.getElementById("nav-items").classList.toggle("hide-small");
};




window.onload = () => 
{
    document.getElementById("button-right").onclick = Slideshow;
    document.getElementById("hamburger").onclick = toggleNav;
}
