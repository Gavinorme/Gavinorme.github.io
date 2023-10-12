const toggleNav = () => 
{
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const contact = () =>
{
    const resultDiv = document.getElementById("result");
    const name1 = document.getElementById("txt-name").value;
    const number = parseInt(document.getElementById("txt-number").value);
    const email = document.getElementById("txt-email").value;
    const contact = document.getElementById("txt-contact").value;

    const section = document.createElement("section");
    resultDiv.append(section);
    const h3 = document.createElement("h3");
    section.append(h3);
    const p = document.createElement("h3");
    section.append(p);
    const p1 = document.createElement("h3");
    section.append(p1);
    const p2 = document.createElement("h3");
    section.append(p2);

    h3.textContent = `${name1}`;
    p.textContent = `${number}`;
    p1.textContent = `${email}`;
    p2.textContent = `${contact}`;

    document.getElementById("goodbye").classList.remove("hidden");

}


window.onload = () => 
{
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("button-contact").onclick = contact;
}