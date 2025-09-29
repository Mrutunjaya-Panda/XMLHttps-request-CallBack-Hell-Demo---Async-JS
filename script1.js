const divEle = document.querySelector(".card-container");
//we are gonna make use of the XMLHttpRequest request object to fetch data from the API
//const request = new XMLHttpRequest();
// XMLHttpRequest is a built-in browser object that allows us to make HTTP requests in JavaScript
//XMLHttpRequest is used heavily in AJAX programming
//open a get request
//to handle multiple users request
function getUser(userId) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://dummyjson.com/users/${userId}`);
  //send the request
  request.send();

  //now I want to display the data on the screen when it is loaded/the request has been completed.
  request.addEventListener("load", function () {
    console.log(typeof request.responseText);
    console.log(request.responseText);
    //is in json format
    //whatever I will get from the server will be in the form of a string and is in responseText property of the request object
    const data = JSON.parse(request.responseText);
    console.log(data); // now my data will be coming in form of object and not string
    console.log(typeof data);

    const card = `<div class="user-card">
            <img src=${data.image} alt="Profile Image">
            <h3>${data.firstName}</h3>
            <h3>${data.lastName}</h3>
            <p class="email">${data.email}</p>
            <button class="btn">View Profile</button>
        </div>`;
    // now we have not appended it to the DOM yet
    // I want to append multiple user cards
    // divEle.innerHTML = card;// This is the easiest way to put HTML in JS. But this is not the best way to do it.
    //instead of replacing the existing content I want to append to it
    divEle.insertAdjacentHTML("beforeend", card);
  });
}
getUser(4);
getUser(2);
getUser(10);
