

let myButton = document.getElementsByClassName("hide");
let myButtonLength = document.getElementsByClassName("hide").length;
console.log(myButton);

let counter = 0;

for (let i = 0; i < myButtonLength; i++) {
    let button = document.createElement("button");
    let myText = document.getElementById("more-text");

    counter++;
    console.log(counter);

    button.type = "button";
    button.innerHTML = "Read More";
    button.className = "closed";

    button.onclick = function() {
        if (button.className == "closed"){
            button.className = "open"
            myText.className = "show";
            button.innerHTML = "Close"; 
        } else {
            button.className = "closed"
            myText.className = "hide";
            button.innerHTML = "Read More";
        }   
    };

    let container = document.getElementById("button-container-" + counter);
    container.appendChild(button);
    
}




