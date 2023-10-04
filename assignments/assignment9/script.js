//Quotes
const quote = () =>
{
    let quotes = ["I have no enemies", "dang it", "desmond"];
    const myArray = quotes.push("");
    document.getElementById("quotes").innerHTML = myArray[1]

// const resultDiv = document.getElementById("result");
// const section = document.getElementById("selection");
// resultDiv.append(section);
// const h3 = document.getElementById("h3");
// section.append(h3);
// const p = document.getElementById("p");
// section.append(p);


    for(let i in quotes)
    {
        console.log(quotes);
    }
}

const updateQuote = setInterval(() =>
    {
        for(let i=0;i<=10;i++)
        {
            
        }
    }, 1000);


//Rainbow
var background = 0;
var width = 0;
var root = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo"];
const drawRainbow = () =>
{
    //console.log("test2");

        const myTimeout = setTimeout(myRainbow, 1000);

        function myRainbow() {
            document.getElementById("rainbowDraw").classList.remove("hidden");
            colorRed(background = 80);
            move();
            rainbowWidth(width = 10);
        }

        const colorRed = (fill) => {
            document.documentElement.style.setProperty("--a", fill + "%");
        }

        const move = () => {
            let id = null;
            const moveRight = document.getElementById("rainbowDraw"); 
            let pos = 0;
            clearInterval(id);
            id = setInterval(frame, 5);

            function frame() {
                if (pos == 50) {
                  clearInterval(id);
                } else {
                  pos++;  
                  moveRight.style.left = pos + "px"; 
                }
              } //change up later
        }

        const rainbowWidth = (width) => {
            document.documentElement.style.setProperty("--x", width + "%");
        }



    //     const updateRainbow = setInterval(() =>
    //     {
    //         for(let i=0;i<=10;i++)
    //         {
    //             const fill = document.getElementById("rainbowDraw").classList.add("red");
    //             console.log("test");
    //             colorRed(background = 100);
    //             // colorFilly(background = 100-(funds/100));
    //         }
    //     }, 1000);
   
    
}
    // const colorFilly = (fill) =>
    // {
    //     document.documentElement.style.setProperty("--a", fill + "%");
    // }


    //const currentRow = document.querySelector("#rows not(.hidden)");
    //make a table of rows and add the class hidden to all
    //currentRow.classList.add("hidden");
    //let nextRow = currentRow.nextElementSibling;

    //if (nextRow == row);
    // {
    //     nextRow = document.querySelector(`#rainbow : first-child`);
    // }

    //nextRow.classList.remove("hidden")

    //}



window.onload = () => 
{
    document.getElementById("button-draw").onclick = drawRainbow;
    //setInterval(drawRainbow, 1000);
    quote();
}

//Notes for wireframe and arrays
//wireframe
//make multiple html pages
//arrays
//add a table for the quotes and use display hidden maybe
//loop through an array of colors and then add a paragraph
//z index? overlapping
//