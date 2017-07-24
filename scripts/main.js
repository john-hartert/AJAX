var URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders";
var stuff = {
    "coffee": "good kind",
    "emailAddress": "guy@guy.com"
};

function getData(){
    $.get(URL, function (data) {
        console.log(data);
        return data;
    })
}

function postData(){
    $.post(URL, stuff, function (datas){
        console.log(datas);
        return datas;
    })
}

// function main(){
//     var function1 = getData();
//     var function2 = postData();
// }

// main();

//-------------------------------------------------------------------------------
// 1. From your helper functions, return the result of calling these Ajax methods. 
// You can use this to chain other function calls.
//--------------------------------------------------------------------------------

// 2. Create a helper function that draws an individual coffee order to the DOM, 
// with a checkbox.
// Call this helper function using the data sent back after POSTing a new coffee order.

// Write a function "deleteOrder" that makes an additional $.ajax call to send a 
// DELETE request, given a particular order ID.
// Create a helper function that adds a listener to the container that holds all 
// your coffee order listing.
// When a checkbox is clicked, call "deleteOrder" for that order.
// Write a helper function, "removeOrderListing" that removes the individual 
// order listing from the DOM
// When the Response comes back from the server after sending a DELETE Request, 
// call "removeOrderListing" for that order.
// To coordinate all of this activity, you will want to make good use of Promises, 
// chaining together your sequence of function calls using the .then() method.