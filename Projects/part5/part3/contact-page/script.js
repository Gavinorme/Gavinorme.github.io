const toggleNav = () => 
{
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const contact = () =>
{
    document.getElementById("goodbye").classList.remove("hidden");
}


window.onload = () => 
{
    document.getElementById("hamburger").onclick = toggleNav;
    contact();
}