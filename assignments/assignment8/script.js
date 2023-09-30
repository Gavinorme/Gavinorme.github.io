//Exercise 1
var margin = 0;
const move = () =>
    {
        //let walk = 0;
        const updateWalk = setInterval(() => 
        {
        //walk++;
        for(i=0;i<10;i++)
        {
            moveRight(margin += 1);
        }
        if(margin >= 300)
        {
            document.getElementById("walking-man").classList.add("hidden");
            document.getElementById("running-man").classList.remove("hidden");
            for(i=0;i<10;i++)
            {
                moveRight(margin += 2);
                if(margin >= 590)
                    clearInterval(updateWalk);
            }
        }
        }, 1000);
    }
const moveRight = (size) =>
    {
        document.getElementById("walking-man").style.setProperty("--x", size + "px");
        document.getElementById("running-man").style.setProperty("--x", size + "px");
    }

    

//Exercise 2
//var background = none;
const colorRectangle = () => 
{
    const funds = parseInt(document.getElementById("txt-funds").value);
    //const startNumber = parseInt(document.getElementById("txt-funds").value);


    //loop to make every number of funds show on the thermometer
    for(let i=funds;i<=10000;i++)
    {
        const fill = document.getElementById("rectangle").root.style.setProperty("--x", background + "px");
        fill.background = i;
        fill.append(i);
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
    document.getElementById("button-walk").onclick = move;
    //document.getElementById("button-run").onclick = move;
}