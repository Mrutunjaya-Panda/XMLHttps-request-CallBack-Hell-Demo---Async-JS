// I want to maintain the order using callBack function.
const divEle = document.querySelector(".card-container");

function getUser(userId) {
  const request = new XMLHttpRequest();
  console.log(request);// to see what all things are there in the request object.
  request.open("GET", `https://dummyjson.com/users/${userId}`);
  
  request.send();

  //now I want to display the data on the screen when it is loaded/the request has been completed.
  request.addEventListener("load", function () {
    if(request.status === 404) return;
    console.log(typeof request.responseText);

    const data = JSON.parse(request.responseText);
    console.log(data); // now my data will be coming in form of object and not string
    console.log(typeof data);

    displayUser(data, "beforeend");

    //I am making callback function inside another request to maintain the order of user cards
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://dummyjson.com/users/${userId - 1}`);
    //send the request
    request2.send();

    //now I want to display the data on the screen when it is loaded/the request has been completed.
    request2.addEventListener("load", function () {
        //edge
        if(request2.status === 404) return;
      console.log(typeof request2.responseText);
      //console.log(request.responseText);
      //is in json format
      //whatever I will get from the server will be in the form of a string and is in responseText property of the request object
      const data = JSON.parse(request2.responseText);
      console.log(data); // now my data will be coming in form of object and not string
      //console.log(typeof data);

      displayUser(data, "afterbegin", "other");

      const request3 = new XMLHttpRequest();
      request3.open("GET", `https://dummyjson.com/users/${userId + 1}`);
      //send the request
      request3.send();

      //now I want to display the data on the screen when it is loaded/the request has been completed.
      request3.addEventListener("load", function () {
        console.log(typeof request3.responseText);
        //console.log(request.responseText);
        //is in json string format
        //whatever I will get from the server will be in the form of a string and is in responseText property of the request object
        const data = JSON.parse(request3.responseText);
        console.log(data); // now my data will be coming in form of object and not string
        //console.log(typeof data);

        displayUser(data, "beforeend", "other");
      });
    });
  });
}

function displayUser(data, pos, className = "") {
  const card = `<div class="user-card ${className}">
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
  divEle.insertAdjacentHTML(pos, card);
}

getUser(2);
