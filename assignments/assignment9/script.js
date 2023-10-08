//Quotes
let count = 0;
const quote = () =>
{
    const resultDiv = document.getElementById("result");
    const section = document.createElement("section");
    resultDiv.append(section);
    const h3 = document.createElement("h3");
    section.append(h3);
    const p = document.createElement("p");
    section.append(p);
    const p2 = document.createElement("p");
    section.append(p2);
    var result = document.getElementById("result");

    var list = ["Victory, however long and hard the road may be, for without victory there is no survival. - Winston Churchill", "In three words I can sum up everything I've learned about life: it goes on. -Robert Frost", "I find that the harder I work, the more luck I seem to have. -Thomas Jefferson", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein", "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde"];
    result.innerHTML = list[count];
    count++; 

    let nextResult = list[count];

    if(!nextResult)
    {
        count = 0;
    }
};

//Rainbow
const drawRainbow = () =>
{
        let count = 0;
        document.getElementById("gold").classList.add("hidden");
        setInterval(myRainbow, 0);
        document.getElementById("red").classList.add("rainbow-red");
        setInterval(myOrange, 1000);
        document.getElementById("orange").classList.add("rainbow-orange");
        setInterval(myYellow, 2000);
        document.getElementById("yellow").classList.add("rainbow-yellow");
        setInterval(myGreen, 3000);
        document.getElementById("green").classList.add("rainbow-green");
        setInterval(myBlue, 4000);
        document.getElementById("blue").classList.add("rainbow-blue");
        setInterval(myIndigo, 5000);
        document.getElementById("indigo").classList.add("rainbow-indigo");
        setInterval(myGold,6001);
        clearInterval();
        
        function myRainbow() { 
            document.getElementById("red").classList.remove("hidden");
            colorRed(background = 80);
        }

        function myOrange() {
            document.getElementById("orange").classList.remove("hidden");
            colorRed(background = 80);
        }
        function myYellow() {
            document.getElementById("yellow").classList.remove("hidden");
            colorRed(background = 80);
        }
        function myGreen() {
            document.getElementById("green").classList.remove("hidden");
            colorRed(background = 80);
        }
        function myBlue() {
            document.getElementById("blue").classList.remove("hidden");
            colorRed(background = 80);
        }
        function myIndigo() {
            document.getElementById("indigo").classList.remove("hidden");
            colorRed(background = 80);
        }
        function myGold() {
            document.getElementById("gold").classList.remove("hidden");
        }
}

        const colorRed = (fill) => {
            document.documentElement.style.setProperty("--a", fill + "%");
        }

window.onload = () => 
{
    document.getElementById("button-draw").onclick = drawRainbow;
    setInterval(quote, 1000);
    quote();
}