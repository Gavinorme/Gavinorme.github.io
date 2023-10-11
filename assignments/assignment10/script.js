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
    ul.append("Price: " + this.price);
    ul.append("age range: " + this.ageRange);
    ul.append("Rating: " + this.rating);

//
    section.append(this.picture(this.pic));
    section.onmouseover = () => {
        ul.classList.remove("hidden");
    };
    return section;
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
    toys.push(new Toy("Basketball", "20", "1-125", 5, "basketball.png"));
    toys.push(new Toy("Basketball", "20", "1-125", 5, "basketball.png"));
    toys.push(new Toy("Basketball", "20", "1-125", 5, "basketball.png"));
    toys.push(new Toy("Basketball", "20", "1-125", 5, "basketball.png"));
    toys.push(new Toy("Basketball", "20", "1-125", 5, "basketball.png"));

    toys.forEach(toy => {
        toysList.append(toy.item);
    });
}

//if user hovers showToys


window.onload = () => 
{
    showToys();
}