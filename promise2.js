//Now let's see how to get rid of the redundancy i.e code optimization.
const divEle = document.querySelector(".card-container");
function getUser(url){
    return fetch(url)
    .then((response) => {
        if(!response.ok){
            throw new Error("Id not found"); // It will be caught in catch block
        }
        return response.json();
    });
}

function getDetails(userId){
     //we can actually chain the above two then methods
    getUser(`https://dummyjson.com/users/${userId}`)
    .then((user) => {
        //console.log(user);//it is returning the actual data
        displayUser(user, "beforeend");
        return getUser(`https://dummyjson.com/users/${userId - 1}`);
    }).then((user) => {
        //console.log(user);//it is returning the actual data
        displayUser(user, "afterbegin", "other");
        return getUser(`https://dummyjson.com/users/${userId + 1}`);
    }).then((user) => {
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
  divEle.insertAdjacentHTML(pos, card);
}

getDetails(2); // here although promise is fulfilled but the response is not ok
// in such scenario also error arises alongside when the promise is rejected


/** Note:
 * By adding a single catch() block at the end, you can centralize the error
 * handling logic and ensure consistent error handling for all fetch requests in the chain.
 */
    