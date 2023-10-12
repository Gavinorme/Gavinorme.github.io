var opacity = 0;
class Toy {
    constructor(title, price, ageRange, rating, pic) {
        this.title = title;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
        this.pic = pic;
    }

get item() {
    const section = document.createElement("section");
    section.classList.add("toy");

    const h3 = document.createElement("h3");
    section.append(h3);
    
    const ul = document.createElement("ul");
    section.append(ul);
    ul.classList.add("hidden");
    ul.append(this.title+ "\n");
    ul.append(this.listItem("Price: " + this.price));
    ul.append(this.listItem(" Age range: " + this.ageRange));
    ul.append(this.listItem(" Rating: " + this.rating));
    
    section.append(this.picture(this.pic));

    // const opaquePic = (size) =>
    // {
    //     document.getElementById("toy").style.setProperty("--x" + size);
    // }
    // opaquePic(opacity += 0.3);

    section.onmouseover = () => {
        ul.classList.remove("hidden");
    };
    section.onmouseout = () => {
        ul.classList.add("hidden"); 
    };

    return section;
    
}

listItem(info) {
    const li = document.createElement("li");
    li.textContent = info;
    return li;
}

picture(info) {
    const pic = document.createElement("img");
    pic.src = "images/" + info;
    return pic;
}

}

const showToys = () => {
    const toysList = document.getElementById("toy-list");
    const toys = [];
    toys.push(new Toy("Basketball", "20", "1-125", 5, "basketball.png"));
    toys.push(new Toy("Football", "20", "1-125", 5, "basketball.png"));
    toys.push(new Toy("Baseball", "20", "1-125", 5, "basketball.png"));
    toys.push(new Toy("Volleyball", "20", "1-125", 5, "basketball.png"));
    toys.push(new Toy("Kickball", "20", "1-125", 5, "basketball.png"));
    toys.push(new Toy("Tennis Ball", "20", "1-125", 5, "basketball.png"));

    toys.forEach(toy => {
        toysList.append(toy.item);
    });
}

// const hide = () => {
//     const section = document.createElement("section");
//     section.classList.add("toy");
//     section.onmouseover = () => {
//         ul.classList.add("hidden");
//     };
// }



window.onload = () => 
{
    showToys();
}