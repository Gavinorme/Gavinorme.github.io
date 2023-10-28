const toggleNav = () => 
{
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const getProjects = async () => {
    const url = "https://Gavinorme.github.io/Projects/part4/part3/projects/projects.json";

    try {
        const reponse = await fetch(url);
        return await reponse.json();
    } catch (error) {
        console.log(error);
    }
};

const showProjects  = async () => {
    let projects = await getProjects();
    let projectsSection = document.getElementById("projects");

    projects.forEach((project) => {
        projectsSection.append(getProjectItem(project));
    });
};

const getProjectItem = (project) => 
{
    let section = document.createElement("section");
    section.classList.add("project");

    //image
    let h2 = document.createElement("img");
    h2.src = project.img;
    section.append(h2);

    //text
    let ul = document.createElement("ul");
    section.append(ul);
    ul.append(getTitle(project.title));
    ul.append(getDescript(project.descript));



    return section;
};

const getTitle = title => {
    const h1 = document.createElement("h1");
    h1.textContent = title;
    return h1;
}

// const getImg = img => {
//     const section3 = document.createElement("section");
//     section3.classList.add("section3");
//     const p = document.createElement("img");
//     p.innerHTML = project.img;
//     section3.append(p);
//     return section3;
// }

const getDescript = descript => {
    // const section2 = document.createElement("section");
    // section2.classList.add("section2");
    const p = document.createElement("p");
    p.textContent = descript;
    return p;
    // section2.append(p);
    // return section2;
}


const getLi = data => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
};

window.onload = () => 
{
    document.getElementById("hamburger").onclick = toggleNav;
    showProjects();
}