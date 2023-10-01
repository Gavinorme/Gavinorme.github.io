//Exercise 1
var margin = 0;
const move = () =>
    {
        const updateWalk = setInterval(() => 
        {
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
var background = 0;
const colorRectangle = () => 
{
    const funds = parseInt(document.getElementById("txt-funds").value);
    const updateRec = setInterval(() =>
    {
        for(let i=0;i<=10;i++)
        {
            const fill = document.getElementById("rectangle").classList.add("red");
            colorFillx(background = funds/100);
            colorFilly(background = 100-(funds/100));
        }
    }, 1000);
}    

const colorFillx = (fill) =>
{
    document.documentElement.style.setProperty("--a", fill + "%");
}
const colorFilly = (fill) =>
{
    document.documentElement.style.setProperty("--b", fill + "%");
}

window.onload = () => 
{
    document.getElementById("button-display").onclick = colorRectangle;
    document.getElementById("button-walk").onclick = move;
}
