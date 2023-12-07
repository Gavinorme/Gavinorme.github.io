const toggleNav = () => 
{
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const getProjects = async () => {
    try {
        const response = (await fetch("https://server-qh9v.onrender.com/api/projects"));
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const showProjects  = async () => {
    let projects = await getProjects();
    let projectsDiv = document.getElementById("project-list");
    projectsDiv.innerHTML = "";
    projects.forEach((project) => {
        const section = document.createElement("section");
        projectsDiv.append(section);

        const  a = document.createElement("a");
        a.href = "#";
        section.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = project.title;
        a.append(h3);

        if(project.img) {
        const img = document.createElement("img");
        section.append(img);
        img.src = "https://server-qh9v.onrender.com/" + project.img;
        } 

        const h4 = document.createElement("p");
        h4.innerHTML = project.descript;
        a.append(h4);

        a.onclick = (e) => {
            e.preventDefault();
            displayDetails(project);
        }
    });
};

const displayDetails = (project) => 
{
    const projectDetails = document.getElementById("project-details");
    projectDetails.innerHTML = "";

    const dLink = document.createElement("a");
    dLink.innerHTML = " &#x2715;";
    projectDetails.append(dLink);
    dLink.id = "delete-link";

    const eLink = document.createElement("a");
    eLink.innerHTML = "&#9998;";
    projectDetails.append(eLink);
    eLink.id = "edit-link";

    const h3 = document.createElement("h3");
    h3.innerHTML = project.title;
    projectDetails.append(h3);

    const h4 = document.createElement("p");
    h4.innerHTML = project.descript;
    projectDetails.append(h4);


    eLink.onclick = (e) => {
        e.preventDefault();
        document.querySelector(".dialog").classList.remove("transparent");
        document.getElementById("second-title").innerHTML = "Edit Project";
    };
    dLink.onclick = (e) => {
        e.preventDefault();
        deleteProject(project);
    };
    populateEditForm(project);
};



const deleteProject = async (project) => {
    let response = await fetch(`https://server-qh9v.onrender.com/api/projects/${project.id}`, { //id could be wrong
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });

    if(response.status != 200)
    {
        console.log("Error delete");
        return;
    }

    let result = await response.json();
    showProjects();
    document.getElementById("project-details").innerHTML = "";
    resetForm();
};

const populateEditForm = (project) => {
    const form = document.getElementById("add-project");
    form._id.value = project.id;
    form.title.value = project.title;
    form.descript.value = project.descript;
};

const addProject = async (e) => 
{
    e.preventDefault();
    const form = document.getElementById("add-project");
    const formData = new FormData(form);
    let response;

    //new project
    if(form._id.value == -1) {
        formData.delete("_id");
        // console.log(...formData);
    
        response = await fetch("https://server-qh9v.onrender.com/api/projects", {
            method: "POST",
            body: formData,
        });
    }

        else { //existing project
            response = await fetch(`https://server-qh9v.onrender.com/api/projects/${form._id.value}`,{
                method: "PUT",
                body: formData,
            });
        }
    if(response.status != 200) {
        console.log("Error contacting server");
        return;
    }
    project = await response.json();

    //in edit mode
    if(form._id.value != -1)
    {
        //get the project with the indicated id
        //then display
        displayDetails(project);
    }

    document.querySelector(".dialog").classList.add("transparent");
    resetForm();
    showProjects();
};

const resetForm = () => {
    const form = document.getElementById("add-project");
    form.reset();
    form._id = "-1";
};

const showHideAdd = (e) => {
    e.preventDefault();
    document.querySelector(".dialog").classList.remove("transparent");
    document.getElementById("second-title").innerHTML = "Add your Project";
    resetForm();
};


window.onload = () => 
{
    showProjects();
    document.getElementById("add-project").onsubmit = addProject;
    document.getElementById("add-link").onclick = showHideAdd;


    document.querySelector(".close").onclick = () => {
        document.querySelector(".dialog").classList.add("transparent");
    };
    
    document.getElementById("hamburger").onclick = toggleNav;
}