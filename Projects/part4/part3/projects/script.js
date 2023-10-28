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


    //text
    let ul = document.createElement("ul");
    section.append(ul);
    ul.append(getTitle(project.title));
    //images
    let h2 = document.createElement("img");
    h2.src = project.img;
    section.append(h2);
    ul.append(getDescript(project.descript));



    return section;
};

const getTitle = title => {
    const h1 = document.createElement("h1");
    h1.textContent = title;
    return h1;
}

const getDescript = descript => {
    const p = document.createElement("p");
    p.textContent = descript;
    return p;
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