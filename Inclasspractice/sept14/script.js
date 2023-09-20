//console.log("Gavin")
//const add = (a,b) => a+b;

//const add = (a,b) => { return a + b; }

//console.log(add(5,6));

// const square = a => a*a;

// console.log(square(5));

// const hello = () => console.log("Hello and dang it desmond");
// hello();

// const helloSpecific = userName => console.log("Hello " + userName + "!");

// helloSpecific("Gavin");

// const helloFullName = (firstName, lastName) => {
//     console.log("Hello "+firstName+" "+lastName);
//     console.log("Desmond is mid");
// };

// helloFullName("Gavin", "Orme");

//Not ok to change a constant
// const myName = "Gavin";
// myName = "sally";

//const myFunct = () => console.log("Funk");

// const moveSqaure = () => {
//     document.getElementById("square").classList.add("move-square");
// }

// const displayName = () => {
//     const firstName = document.getElementById("txt-first-name").value;
//     console.log("Hello "+firstName+"!");
// }

// window.onload = () => {
//     document.getElementById("button-move").onclick = moveSqaure;
//     document.getElementById("button-show-name").onclick = displayName;
//     }


const moveSqaure = () => {
    // document.getElementById("square").classList.toggle("move-square");

    const square = document.getElementById("square");

    //is it currently animating
    if(square.classList.contains("move-sqaure"))
    {
        square.classList.remove("remove-square");
    }
    else 
    {
        square.classList.add("move-square");
    }
}

window.onload = () => {
    document.getElementById("button-move").onclick = moveSqaure;
    }