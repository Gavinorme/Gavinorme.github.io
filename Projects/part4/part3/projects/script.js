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

    //link
    let h4 = document.createElement("a");
    section.append(h4);
    h4.href = project.a;
    h4.classList.add("link");
    //text
    let p = document.createElement("p");
    h4.append(p);
    p.append(getTitle(project.title));
    //link
    let h3 = document.createElement("a");
    section.append(h3);
    h3.href = project.a;
    h3.classList.add("link");
    //images
    let h2 = document.createElement("img");
    h2.src = project.img;
    h2.classList.add("image");
    h3.append(h2);
    //descript
    p.classList.add("descript");
    p.append(getDescript(project.descript));

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