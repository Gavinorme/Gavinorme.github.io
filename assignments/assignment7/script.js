const displayExercise = () =>
{
    const showExercise1 = document.getElementById("age-comparison");
    const showExercise2 = document.getElementById("funds-raised");

    if(col1of2.classList.contains("age-comparison"))
    {
        col1of2.classList.remove("age-comparison");
    }
    else
    {
        col2of2.classList.remove("funds-raised");
    }
}

const showExercise1 = () => 
{
    document.getElementById("col1of2").classList.remove("age-comparison")
    document.getElementById("col2of2").classList.add("funds-raised")
}
const showExercise2 = () => 
{
    document.getElementById("col2of2").classList.remove("funds-raised")
    document.getElementById("col1of2").classList.add("age-comparison")
}


window.onload = () => 
{
    document.getElementById("age-comparison").onclick = displayExercise;
    document.getElementById("button-exercise1").onclick = showExercise1;
    document.getElementById("button-exercise2").onclick = showExercise2;
}