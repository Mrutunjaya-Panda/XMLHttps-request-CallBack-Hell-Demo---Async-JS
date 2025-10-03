//Now let's see how to do the same thing using Promise and Fetch API
const divEle = document.querySelector(".card-container");
function getDetails(userId){
    //fetch returns a promise
    // const request = fetch(`https://dummyjson.com/users/${userId}`);
    // //console.log(request);//to check what it is returning, returning a promise
    // //to handle the promise we use then method
    // const response = request.then(function(response){
    //     console.log(response);//it is returning a response object
    //     return response.json();// now since json is also an asynchronous operation it also returns a promise
    // });
    // response.then((user) => {
    //     console.log(user);//it is returning the actual data
    // });

    //we can actually chain the above two then methods
    fetch(`https://dummyjson.com/users/${userId}`)
    .then((response) => {
        if(!response.ok){
            throw new Error("Id not found"); // It will be caught in catch block
        }
        return response.json();
    })
    .then((user) => {
        console.log(user);//it is returning the actual data
    }).catch((error) => {
        //console.log(error);
        console.error(error);
    });//catch method is used to handle the error if any occurs
}
getDetails(0); // here although promise is fulfilled but the response is not ok
// in such scenario also error arises alongside when the promise is rejected