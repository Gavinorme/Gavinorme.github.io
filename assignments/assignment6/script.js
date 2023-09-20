const showHead = () => {
    document.getElementById("head").classList.remove("hide");
}

const hideHead = () => {
    document.getElementById("head").classList.add("hide");
}

const moveLion = () => {
    document.getElementById("lion").classList.add("move-lion");
}

const addComment = () => {
    const productName = document.getElementById("txt-product-name").value;
    const productP = document.getElementById("product-message");
    const ratingNum = document.getElementById("txt-rating").value;
    const ratingR = document.getElementById("rating");
    const comment = document.getElementById("txt-comment").value;
    const commentC = document.getElementById("comment");
    const userName = document.getElementById("txt-user-name").value;
    const userN = document.getElementById("user-message");

    productP.innerHTML += (productName);
    ratingR.innerHTML += ("Rating: "+ratingNum + "/5 stars ");
    commentC.innerHTML += ("Description: "+comment+". ");
    userN.innerHTML += ("By: " + userName);
    
}


window.onload = () => {
    document.getElementById("button-show").onclick = showHead;
    document.getElementById("button-hide").onclick = hideHead;
    document.getElementById("button-dance").onclick = moveLion;
    document.getElementById("button-input").onclick = addComment;
    }