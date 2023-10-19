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
    toys.push(new Toy("Basketball", "20", "1-125", 5, "Basketball.png"));
    toys.push(new Toy("Football", "25", "1-125", 5, "nflfootball.jpeg"));
    toys.push(new Toy("Baseball", "5", "1-125", 1, "baseball.jpeg"));
    toys.push(new Toy("Volleyball", "15", "1-125", 4, "volleyball.jpeg"));
    toys.push(new Toy("Kickball", "3", "1-125", 3, "kickball.jpg"));
    toys.push(new Toy("Tennis Ball", "2", "1-125", 5, "tennis.jpeg"));

    toys.forEach(toy => {
        toysList.append(toy.item);
    });
}





window.onload = () => 
{
    showToys();
}