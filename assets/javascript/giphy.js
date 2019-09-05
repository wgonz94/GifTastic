
var topics = ["The Office", "Friends", "Marvel's Daredevil", "Parks and Recreation", "Anchorman", "Spider-Man", "The Matrix", "Talladega Nights: The Ballad of Ricky Bobby", "Sherlock Holmes", "StarWars", "Benchwarmers", "Austin Powers", "Semi-Pro", "Step-Brothers", "The Other Guys", "The Avengers", "Napoleon Dynamite", "Zoolander", "Shaun of the Dead", "The Simpsons Movie", "Whose Line Is It Anyway?"];

function createButtons() {

    // Empties the movies prior to adding new gifs
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of topics(movies/shows)
    for (var i = 0; i < topics.length; i++) {

        // Then dynamicaly generating buttons for each topic in the array
        var button = $("<button>");
        // Adding multiple classes movie div to button (only one class being applied)
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

    //rerun createButtons with new additions to array
    createButtons();

});


function displayTopicGif() {
// $("<button>").on("click", function () {
    //able to generate api response with value entry for add movie button
    // var name = $(movie-input).val().trim();

    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=zBVYqCxlWQzucELEgm9SniwzfKORwVmQ";

    //Need to figure out way to enact response with buttons displayed
    //update: Created function to generate response!! 
    

    var name = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=zBVYqCxlWQzucELEgm9SniwzfKORwVmQ&limit=10&offset=0&rating=g";
    
   
    // Performing AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // able to retrieve data. YES!!
            console.log(response.data)
            
            var results = response.data;
        
            $("#movieGif").empty();

            for(var i = 0; i <results.length; i++){

                //create div for topics/movie title chosen
                //append rating for chosen movie title/topics
                var movieTDiv = $("<div class='movies'>");

                var rating = response.data[i].rating;

                var pRating = $("<p>").text("Rating: " + rating);

                movieTDiv.append(pRating);

                //pull img gif from data

                var gifStillImage = response.data[i].images.downsized_still.url;
                var gifMotionImage = response.data[i].images.downsized.url;

                //create img element and add attributes

                var image = $("<img>").attr("src", gifStillImage);

                image.attr("data-still", gifStillImage);
                image.attr("data-animate", gifMotionImage);
                image.attr("data-state", "still");
                image.attr("id", "img" + i);

                //add class
                image.addClass("gifImages");
                image.addClass("m-2")

                //append gifs
                movieTDiv.append(image);
                $("#movieGif").prepend(movieTDiv);
            }

        });
    }

function gifMotion() {

    // allows precision selection with id for gif state change
    var choice = $(this).attr("id");
    choice = "#" + choice

    var state = $(choice).attr("data-state");
    

    if (state === "still") {
      $(this).attr("src", $(choice).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(choice).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  };

//add listener for elements with class of "movie" 
//added listener for elements with class of "gifImages"




$(document).on("click", ".movie", displayTopicGif);
$(document).on("click", ".gifImages", gifMotion)
createButtons()