function displayLinks(){
    var link = document.getElementById("navbar");
    if(link.className === "navbar"){
        link.className += " responsive";
    }
    else{
        link.className = "navbar";
    }
}