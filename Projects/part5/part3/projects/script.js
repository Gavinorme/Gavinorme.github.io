const toggleNav = () => 
{
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const getProjects = async () => {
    try {
        const response = (await fetch("/api/projects"));
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
        img.src = project.img;
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
    let response = await fetch(`/api/projects/${project.id}`, { //fix
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

    //new player
    if(form._id.value == -1) {
        formData.delete("_id");
        // console.log(...formData);
    
        response = await fetch(`/api/projects`, {
            method: "POST",
            body: formData,
        });
    }

        else { //existing player
            response = await fetch(`/api/projects/${form._id.value}`,{
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
        //get the player with the indicated id
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





// const getProjectItem = (project) => 
// {
//     let section = document.createElement("section");

//     //link
//     let h4 = document.createElement("a");
//     section.append(h4);
//     h4.href = project.a;
//     h4.classList.add("link");
//     //text
//     let p = document.createElement("p");
//     h4.append(p);
//     p.append(getTitle(project.title));
//     //link
//     let h3 = document.createElement("a");
//     section.append(h3);
//     h3.href = project.a;
//     h3.classList.add("link");
//     //images
//     let h2 = document.createElement("img");
//     h2.src = project.img;
//     h2.classList.add("image");
//     h3.append(h2);
//     //descript
//     p.classList.add("descript");
//     p.append(getDescript(project.descript));

//     return section;
// };

// const getTitle = title => {
//     const h1 = document.createElement("h1");
//     h1.textContent = title;
//     return h1;
// }

// const getDescript = descript => {
//     const p = document.createElement("p");
//     p.textContent = descript;
//     return p;
// }


// const getLi = data => {
//     const li = document.createElement("li");
//     li.textContent = data;
//     return li;
// };







window.onload = () => 
{
    showProjects();
    document.getElementById("add-project").onsubmit = addProject;
    document.getElementById("add-link").onclick = showHideAdd;


    document.querySelector(".close").onclick = () => {
        document.querySelector(".dialog").classList.add("transparent");
    };
    
    document.getElementById("hamburger").onclick = toggleNav;
    // showProjects();
}