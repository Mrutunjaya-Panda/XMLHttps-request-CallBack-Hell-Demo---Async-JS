//Now let's see how to do the same thing using Promise and Fetch API
const divEle = document.querySelector(".card-container");
function getDetails(userId){
     //we can actually chain the above two then methods
    fetch(`https://dummyjson.com/users/${userId}`)
    .then((response) => {
        if(!response.ok){
            throw new Error("Id not found"); // It will be caught in catch block
        }
        return response.json();
    })
    .then((user) => {
        //console.log(user);//it is returning the actual data
        displayUser(user, "beforeend");
        return fetch(`https://dummyjson.com/users/${userId - 1}`);
    }).then((response) => {
        if(!response.ok){
            throw new Error("No previous Id exists."); // It will be caught in catch block
        }
        return response.json();
    })
    .then((user) => {
        //console.log(user);//it is returning the actual data
        displayUser(user, "afterbegin", "other");
         return fetch(`https://dummyjson.com/users/${userId + 1}`);
    }).then((response) => {
        if(!response.ok){
            throw new Error("Id not found"); // It will be caught in catch block
        }
        return response.json();
    })
    .then((user) => {
        //console.log(user);//it is returning the actual data
        displayUser(user, "beforeend","other");
        //return fetch(`https://dummyjson.com/users/${userId - 1}`);
    }).catch((error) => {
        //console.log(error);
        console.error(error);
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

getDetails(2); // here although promise is fulfilled but the response is not ok
// in such scenario also error arises alongside when the promise is rejected


/** Note:
 * By adding a single catch() block at the end, you can centralize the error 
 * handling logic and ensure consistent error handling for all fetch requests in the chain.
 */