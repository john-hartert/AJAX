var URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders";
var FORM_SEL = '[data-coffee-order]'

function getData(){
    $.get(URL, function (data) {
        console.log(data);
        return data;
    })
}

function postData(x){
    $.post(URL, x, function (datas){
        console.log(datas);
        return datas;
    })
}

function append(x){
    var disOne = $("<p></p>").text(x)
    $("header").append(disOne);//This works, but I need a checkbox to show up.
}

function deleteOrder(id){ //This will delete the entry based on the email, not on the
    return $.ajax( {      //order id.
        url: URL + '/' + id,
        method: 'DELETE'
    });
}

//FORM-SEL is a variable that refers to the entire form on the HTML
//due to '[data-coffee-order]'.
//$(FORM_SEL) uses jQuery to look through the entire form. .on listens to the event,
//in this case it listens to "submit". The anonmous function takes the argument event,
//and uses preventDefault() to keep it from relocating to another page. Default action
//is to submit. The next variable takes the keys 'coffee' and 'emailAddress' and uses
//jQueary to look at the information inserted into the id coffeeOrder and emailInput.
//.val() pulls the value out and calls postData(dataToSendToServer), which posts the
//information to the server.
//Use network/headers/form data to see if everything worked.
$(FORM_SEL).on("submit", function(event){ 
    event.preventDefault();
    var dataToSendToServer = {
        "coffee": $("#coffeeOrder").val(), //Gets the value out.
        "emailAddress": $("#emailInput").val() //Gets the value out.
    };
    postData(dataToSendToServer);
    append($("#coffeeOrder").val());//Need to append a checkbox, but this works.
});
//--------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------
// 1. From your helper functions, return the result of calling these Ajax methods. 
// You can use this to chain other function calls.
//===================================================================================
//===================================================================================
//===================================================================================
// 2. Create a helper function that draws an individual coffee order to the DOM, 
// with a checkbox.
// Call this helper function using the data sent back after POSTing a new coffee order.
//===================================================================================
//===================================================================================
//===================================================================================
// 3. Write a function "deleteOrder" that makes an additional $.ajax call to send a 
// DELETE request, given a particular order ID.
//===================================================================================
//===================================================================================
//===================================================================================
// 4. Create a helper function that adds a listener to the container that holds all 
// your coffee order listing.
//----------------------------------------------------------------------------------
// 5. When a checkbox is clicked, call "deleteOrder" for that order.
//----------------------------------------------------------------------------------
// 6. Write a helper function, "removeOrderListing" that removes the individual 
// order listing from the DOM
//-----------------------------------------------------------------------------------
// 7. When the Response comes back from the server after sending a DELETE Request, 
// call "removeOrderListing" for that order.
//-----------------------------------------------------------------------------------
// 8. To coordinate all of this activity, you will want to make good use of Promises, 
// chaining together your sequence of function calls using the .then() method.