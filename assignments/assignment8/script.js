//Exercise 1



//Exercise 2
const colorRectangle = () => 
{
    const funds = parseInt(document.getElementById("txt-funds").value);

    //loop to make every number of funds show on the thermometer

    for(let i=0; i<=10000;i++)
    {
        
    }

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

window.onload = () => 
{
    document.getElementById("button-display").onclick = colorRectangle;
}