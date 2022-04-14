// let myButton = document.getElementsByClassName("hide");
// let myButtonLength = document.getElementsByClassName("hide").length;
// console.log(myButton);

// let counter = 0;

// for (let i = 0; i < myButtonLength; i++) {
//     let button = document.createElement("button");
//     let myText = document.getElementById("more-text");

//     counter++;
//     console.log(counter);

//     button.type = "button";
//     button.innerHTML = "Read More";
//     button.className = "closed";

//     button.onclick = function() {
//         if (button.className == "closed"){
//             button.className = "open"
//             myText.className = "show";
//             button.innerHTML = "Close"; 
//         } else {
//             button.className = "closed"
//             myText.className = "hide";
//             button.innerHTML = "Read More";
//         }   
//     };

//     let container = document.getElementById("button-container-" + counter);
//     container.appendChild(button);
    
// }




window.onload = function(){ //show items after full page load

    let url = "https://pixabay.com/api/?key=26639219-c988cadef2f5d334da840ad52" //url api in a variable
    // let url = "https://jsonplaceholder.typicode.com/users"
    fetch(url) // use fetch to start working with json
        // fetch("./archivo.json") // load file from yor localhost
        .then(res => res.json()) // convert data from the api to a json
        .then(data => showMyData(data.hits))  //creamos la funcion showMyData  
        // .catch(error => console.log(error))

    const showMyData = (data) => {
        console.log(data)
        
        for (let i = 0; i < data.length; i++) {  //iterate the array
            // console.log("Num "+i);
            
            
            let items = document.getElementById("items"); //select where do you want to inject our html
        
            let container = document.createElement("div") //create new element div
            container.id = "element-" +i; //assign unique ID for each element
            container.className = "col-sm-6 col-lg-4 mb-4"; //add bootstrap classnames
        
        
            let card = document.createElement("div")  //create new element div
            card.className = "card"; //add class 
            card.id = "card-" +i; //assign a unique ID for each element
            // card.innerHTML = "<button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'></button><img src='" + data[i].largeImageURL + "' alt='test' width=100px'/></a>";
            card.innerHTML = "<a href='#exampleModal' data-bs-toggle='modal' data-bs-target='#exampleModal'><img src='" + data[i].largeImageURL + "' alt='test' width='100%'/></a>";
            // card.innerHTML = "<img src='" + data[i].largeImageURL + "' alt='test'/>";
        
            // All in one line
            // card.innerHTML = "<img src='" + data[i].largeImageURL + "' alt='test' 'width ='100px'/><div class='card-body'><h5 class='card-title'>"+ data[i].user+"</h5><p class='card-text'>"+ data[i].user+"</p></div>";
            
            let title = document.createElement("title")
            title.innerHTML = data[i].user;
            
        
            let cardBody = document.createElement("div")
            cardBody.className = "card-body"; //add class
            cardBody.innerHTML = "<h5 class='card-title'>Username: "+ data[i].user+"</h5><p class='card-text'>Likes: "+ data[i].likes+"</p>"
        
        
            items.appendChild(container)
            document.getElementById("element-"+i).appendChild(card)
            document.getElementById("card-"+i).appendChild(title)
            document.getElementById("card-"+i).appendChild(cardBody)
        }

        let myModal = document.getElementById("myModal");
        let myModalElem = document.createElement("p");

        for (let i = 0; i < data.length; i++) { 
            document.getElementById("card-"+i).addEventListener('click', function(){
                myModalElem.className = "fotoenmodal";
                myModalElem.innerHTML = "<img src='" + data[i].largeImageURL + "' alt='test' width='100%'/>";
                // myModalElem.innerHTML = "Name user: " + data[i].user;
                myModal.appendChild(myModalElem)
            })
        }
    }
}



// console.log(myData);

// let data = myData; 

// //incorrect selectors


// // let tbody = document.getElementById("tbody");
// // for (let i = 0; i < 3; i++) {
// // for (let i = 0; i < data.length; i++) { 
    
// window.onload = function(){ //show page when everything is loaded
//     for (let i = 0; i < data.length; i++) {
//         // let tr = document.createElement("tr")
//         // let td1 = document.createElement("td")
//         // let td2 = document.createElement("td")
//         // let td3 = document.createElement("td")
//         // let td4 = document.createElement("td")
//         // td1.innerHTML = 1 + i;
//         // td2.innerHTML = data[i].views;
//         // td3.innerHTML = data[i].downloads;
//         // td3.innerHTML = data[i].downloads;
//         // td4.innerHTML = "<img src='" + data[i].largeImageURL + "' alt='test'/>";
    
//         // tr.appendChild(td1);
//         // tr.appendChild(td2);
//         // tr.appendChild(td3);
//         // tr.appendChild(td4);
    
//         // tbody.appendChild(tr);
    
//   // ID the element where insert our new content dinamically
//         let items = document.getElementById("items");
    
//         let container = document.createElement("div")
//         container.id = "element-" +i; //unique id for each element
//         container.className = "col-sm-6 col-lg-4 mb-4"; //add bootstrap classnames
    
    
//         let card = document.createElement("div")
//         card.className = "card"; //add class 
//         card.id = "card-" +i;
//         card.innerHTML = "<img src='" + data[i].largeImageURL + "' alt='test' 'width ='100px'/>";
    
//         // All in one line
//         // card.innerHTML = "<img src='" + data[i].largeImageURL + "' alt='test' 'width ='100px'/><div class='card-body'><h5 class='card-title'>"+ data[i].user+"</h5><p class='card-text'>"+ data[i].user+"</p></div>";
        
//         let title = document.createElement("title")
//         title.innerHTML = data[i].user;
        
    
//         let cardBody = document.createElement("div")
//         cardBody.className = "card-body"; //add class
//         cardBody.innerHTML = "<h5 class='card-title'>"+ data[i].user+"</h5><p class='card-text'>"+ data[i].user+"</p>"
    
    
//         items.appendChild(container)
//         document.getElementById("element-"+i).appendChild(card)
//         document.getElementById("card-"+i).appendChild(title)
//         document.getElementById("card-"+i).appendChild(cardBody)
    
    
        
//     }
// } 

// // }