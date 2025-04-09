//LAB 4 HW
"use strict"

//parameter deconstruction
function MakeVideoGameReview({   gameTitle = "N/A",                   //title of game
                                 imgFileName = "./pics/placeholder.jpg",                   //initial image to be loaded
                                 imgObjList = [{"display":"Main Cover", "val":"./pics/placeholder.jpg"}, //list of images
                                               {"display":"Alt Cover 1", "val":"./pics/placeholder.jpg"},
                                               {"display":"Alt Cover 2", "val":"./pics/placeholder.jpg"}],
                                 review = "awaiting review...",                            //review    //NEEDS TO BE EDITABLE
                                 rating = 1                                             //rating    //NEEDS TO BE EDITABLE
                             }){

    //create the DOM element to be returned by the func
    var gameObj = document.createElement("div"); //gameObj is now a div element
    gameObj.classList.add("gameCardContainer"); // gameObj div element is set to class="game"


    //build the html that we will stick inside gameObj div tag
    gameObj.innerHTML =
        `
         <h3>${gameTitle}</h3>
         <img class="vgCover" src="${imgFileName}">
         <br>
         <select class="vgCoverSelection">
         </select>
         <div class="vgInfo">
           <input class="vgReviewInput" type="text" placeholder="Leave a Review...">
           <button class="vgPostButton">Post</button>
           <br>
           <span>Rating: </span><select class="vgRatingC" >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <p class="vgReviewP">Awaiting Review</p>
         </div>
        `



    // create variables for all aspects of carObj.innerHtml that we need to reference
    var vgReviewInput = gameObj.getElementsByClassName("vgReviewInput")[0]; // p tag ref
    var vgRating = gameObj.getElementsByClassName("vgRatingC")[0]; // ref to rating select
    var vgCoverSelection = gameObj.getElementsByClassName("vgCoverSelection")[0]; // ref to the select tag we made above
    var vgCover = gameObj.getElementsByClassName("vgCover")[0];
    var vgButton = gameObj.getElementsByClassName("vgPostButton")[0];
    var vgReviewP = gameObj.getElementsByClassName("vgReviewP")[0];

    // so usually dropdowns have a <select> tag surronding a bunch of 'option' tags, since we are getting the options
    // from the parameters we will make a helper function that uses a for loop to individually make a <option> tag for
    // each parameter option

    for (var element of imgObjList) { //iterate through list passed to function
        var option = document.createElement("option"); // create option element
        option.innerHTML = element.display; // take the string from field labeled 'display'
        option.value = element.val; // all option tags have a 'value' field, kinda like how <img> has src so were just extracting that from the oassed object and putting that in here as well
        vgCoverSelection.appendChild(option); // put the inidividual option tag into the select tag from above
    }
    vgCoverSelection.value = imgFileName; // a default for us to start on

    // when the user uses the dropdown that <select> and <option> provides us we will call display to update UI,
    // all done with event listener
    vgCoverSelection.onchange = function () {
        display();
    }

    // event listener to call display when 'post' button is clicked
    vgButton.onclick = function (){
        display();
    }


    //some intitial values for when the page is first loaded
    vgRating.value = rating;

    vgReviewInput.value = review;





    function display(){
        vgCover.src = vgCoverSelection.value;
        vgReviewP.innerHTML = vgReviewInput.value;

    }


    display();







    return gameObj;

}