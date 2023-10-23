const toggleNav = () => 
{
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const showExp = () =>
{
    document.getElementById("addExp").classList.remove("hide");
    document.getElementById("p").classList.remove("hide");
    const resultDiv = document.getElementById("result");
    const name1 = document.getElementById("txt-name").value;
    const description = document.getElementById("txt-description").value;
    const skills = document.getElementById("txt-skills").value;
    const reference = document.getElementById("txt-reference").value;

    const section = document.createElement("section");
    resultDiv.append(section);
    const h3 = document.createElement("h3");
    section.append(h3);
    const p = document.createElement("p");
    section.append(p);
    const p1 = document.createElement("p");
    section.append(p1);
    const p2 = document.createElement("p");
    section.append(p2);

    h3.textContent = `${name1}`;
    p.textContent = `${description}`;
    p1.textContent = `${skills}`;
    p2.textContent = `${reference}`;

    document.getElementById("button-add").classList.remove("hidden");
}

const showEmailResult = async (e) => {
    e.preventDefault();
    const result = document.getElementById("result");
    let response = await getEmailResult();
    if (response.status == 200) {
      result.innerHTML = "Email Successfully Sent";
    } else {
      result.innerHTML = "Sorry, your email was not sent.";
    }
  };
  
  const getEmailResult = async (e) => {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Please wait...";
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      return response;
    } catch (error) {
      console.log(error);
      document.getElementById("result").innerHTML =
        "Sorry your email couldn't be sent";
    }
  };


window.onload = () => 
{
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("button-login").onclick = showExp;
    document.getElementById("button-add").onclick = showExp;
}