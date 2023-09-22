const showExercise1 = () => 
{
    document.getElementById("col1of2").classList.remove("age-comparison")
    document.getElementById("col2of2").classList.add("funds-raised")
};
const showExercise2 = () => 
{
    document.getElementById("col2of2").classList.remove("funds-raised")
    document.getElementById("col1of2").classList.add("age-comparison")
};

const displayData = () =>
{
    const resultDiv = document.getElementById("result");
    const name1 = document.getElementById("txt-name-1").value;
    const age1 = parseInt(document.getElementById("txt-age-1").value);
    const name2 = document.getElementById("txt-name-2").value;
    const age2 = parseInt(document.getElementById("txt-age-2").value);
    const name3 = document.getElementById("txt-name-3").value;
    const age3 = parseInt(document.getElementById("txt-age-3").value);

    const section = document.createElement("section");
    resultDiv.append(section);
    const h3 = document.createElement("h3");
    section.append(h3);
    const p = document.createElement("p");
    section.append(p);


    //add equal toos and error messages
    //Exercise 1
    if(age2 > age1 && age2 > age3)
    {
        if(age1 > age3)
        {
            h3.textContent = `Names: ${name2} ${name1} ${name3}`;
            p.textContent = `Ages from oldest to youngest: ${age2} ${age1} ${age3}`;
        }
        else if(age3 > age1)
        {
            h3.textContent = `Names: ${name2} ${name3} ${name1}`;
            p.textContent = `Age from oldest to youngest: ${age2} ${age3} ${age1}`;
        }
    }
    if(age1 > age2 && age1 > age3)
    {
        if(age2 > age3)
        {
            h3.textContent = `Names: ${name1} ${name2} ${name3}`;
            p.textContent = `Age from oldest to youngest: ${age1} ${age2} ${age3}`;
        }
        else if(age3 > age2)
        {
            h3.textContent = `Names: ${name1} ${name3} ${name2}`;
            p.textContent = `Age from oldest to youngest: ${age1} ${age3} ${age2}`;
        }
    }
    if(age3 > age1 && age3 > age2)
    {
        if(age1 > age2)
        {
            h3.textContent = `Names: ${name3} ${name1} ${name2}`;
            p.textContent = `Age from oldest to youngest: ${age3} ${age1} ${age2}`;
        }
        else if(age2 > age1)
        {
            h3.textContent = `Names: ${name3} ${name2} ${name1}`;
            p.textContent = `Age from oldest to youngest: ${age3} ${age2} ${age1}`;
        }
    }
};

//Exercise 2
const colorRectangle = () => 
{
    const funds = parseInt(document.getElementById("txt-funds").value);

    if(funds >= 2500)
    {
        document.getElementById("rectangle").classList.add("fill");
    }
    if(funds >= 5000)
    {
        document.getElementById("rectangle").classList.add("fill2");
    }
    if(funds >= 7500)
    {
        document.getElementById("rectangle").classList.add("fill3");
    }
    if(funds >= 10000)
    {
        document.getElementById("rectangle").classList.add("fill4");
    }
}

const toggleNav = () => 
{
   const button1 = document.getElementById("button-exercise1").classList.toggle("button-exercise");
   const button2 = document.getElementById("button-exercise2").classList.toggle("button-exercise");
};

window.onload = () => 
{
    document.getElementById("button-display").onclick = colorRectangle;
    document.getElementById("button-compare").onclick = displayData;
    document.getElementById("button-exercise1").onclick = showExercise1;
    document.getElementById("button-exercise2").onclick = showExercise2;
    document.getElementById("hamburger").onclick = toggleNav;
};