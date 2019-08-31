
var topics = ["George of the Jungle", "Spiderman", "The Dark Knight", "The Mask", "Anchorman", "Blades of Glory", "The Matrix", "Old School", "Sherlock Holmes", "StarWars", "Benchwarmers", "Austin Powers", "Teenage Mutant Ninja Turtles"];

function createButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < topics.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        var button = $("<button>");
        // Adding multiple classes movie div to button
        button.addClass("movie");
        // button.addClass("btn-info");
        // button.addClass("m-1");


        // Adding a data-attribute
        button.attr("data-name", topics[i]);
        // Providing the initial button text
        button.text(topics[i]);
        // Adding the button to the HTML
        $("#buttons-view").append(button);
    };
};

// This function handles events where one button is clicked
$("#addMovie").on("click", function (event) {
    // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();
    // This line grabs the input from the textbox
    var movie = $("#movie-input").val().trim();

    // Adding the movie from the textbox to our array
    topics.push(movie);

    // Calling renderButtons which handles the processing of our movie array
    createButtons();

});


function displayTopicGif() {
// $("<button>").on("click", function () {
    //able to generate api response with value entry for add movie button
    // var name = $(movie-input).val().trim();

    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=zBVYqCxlWQzucELEgm9SniwzfKORwVmQ";

    //Need to figure out way to enact response with buttons displayed
    var name = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=zBVYqCxlWQzucELEgm9SniwzfKORwVmQ";
    

    // Performing AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

            console.log(response)

        });
    }
// });
// $(".gif").on("click", function() {
//     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//     var state = $(this).attr("data-state");
//     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//     // Then, set the image's data-state to animate
//     // Else set src to the data-still value
//     if (state === "still") {
//       $(this).attr("src", $(this).attr("data-animate"));
//       $(this).attr("data-state", "animate");
//     } else {
//       $(this).attr("src", $(this).attr("data-still"));
//       $(this).attr("data-state", "still");
//     }
//   });

//add listener for elements with class of "movie" *test run*
$(document).on("click", ".movie", displayTopicGif);
createButtons()