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

    h3.textContent = `${"Name of Company:  "+ name1}`;
    p.textContent = `${"Phone Number: " +number}`;
    p1.textContent = `${"Email: " +email}`;
    p2.textContent = `${"Contact Reason: " +contact}`;

    document.getElementById("goodbye").classList.remove("hidden");
}

const showEmailResult = async (e) => {
    e.preventDefault();
    const result = document.getElementById("result");
    let response = await getEmailResult();
    if (response.status == 200) {
      result.innerHTML = "Email Successfully Sent. Thank You!";
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
    document.getElementById("button-contact").onsubmit = contact;
    document.getElementById("contact-form").onsubmit = showEmailResult;
}