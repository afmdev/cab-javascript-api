console.log(myData);

let data = myData; 

let tbody = document.getElementById("tbody");

for (let i = 0; i < data.length; i++) {
    let tr = document.createElement("tr")

    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")

    td1.innerHTML = 1 + i;
    td2.innerHTML = data[i].views;
    td3.innerHTML = data[i].downloads;
    td3.innerHTML = data[i].downloads;
    td4.innerHTML = data[i].largeImageURL;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    tbody.appendChild(tr);
    
}