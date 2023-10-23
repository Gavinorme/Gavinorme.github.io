const toggleNav = () => 
{
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const show = () =>
{
    document.getElementById("addExp").classList.remove("hide");
    document.getElementById("p").classList.remove("hide");
    document.getElementById("button-add").classList.remove("hidden");
}

const showExp = () =>
{
    const resultDiv = document.getElementById("result");
    const name1 = document.getElementById("txt-name").value;
    const age = document.getElementById("txt-age").value;
    const description = document.getElementById("txt-description").value;
    const skills = document.getElementById("txt-skills").value;
    const reference = document.getElementById("txt-reference").value;

    const section = document.createElement("section");
    resultDiv.append(section);
    const h1 = document.createElement("h1");
    section.append(h1);
    const h3 = document.createElement("h3");
    section.append(h3);
    const p3 = document.createElement("p");
    section.append(p3);
    const p = document.createElement("p");
    section.append(p);
    const p1 = document.createElement("p");
    section.append(p1);
    const p2 = document.createElement("p");
    section.append(p2);

    h1.textContent = `Your form has been submitted successfully`;
    h3.textContent = `${"Name of Company: " +name1}`;
    p3.textContent = `${"Age: " + age}`;
    p.textContent = `${"Description: " +description}`;
    p1.textContent = `${"Skills: "+ skills}`;
    p2.textContent = `${"References: "+reference}`;

    document.getElementById("button-add").classList.remove("hidden");
}


window.onload = () => 
{
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("button-login").onclick = show;
    document.getElementById("button-add").onclick = showExp;
}