
    var topics = ["George of the Jungle", "Spiderman", "The Dark Knight", "The Mask", "Anchorman", "Blades of Glory", "The Matrix", "Old School", "Sherlock Holmes", "StarWars", "Benchwarmers", "Austin Powers", "Teenage Mutant Ninja Turtles"]

    function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise we will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < topics.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var button = $("<button>");
          // Adding a class of movie to button
          button.addClass("movie");
          button.addClass("btn-info");
          button.addClass("m-1");


          // Adding a data-attribute
          button.attr("data-name", topics[i]);
          // Providing the initial button text
          button.text(topics[i]);
          // Adding the button to the HTML
          $("#buttons-view").append(button);
        };
      };

      // This function handles events where one button is clicked
      $("#add-movie").on("click", function(event) {
        // Preventing the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();
        // This line grabs the input from the textbox
        var movie = $("#movie-input").val().trim();

        // Adding the movie from the textbox to our array
        topics.push(movie);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();

      });

    // // Here we construct our URL
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    // movie + "&api_key=zBVYqCxlWQzucELEgm9SniwzfKORwVmQ&limit=10";
    
    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function(response) {
    //   $("#movie-view").text("Rated: " + JSON.stringify(response.Rated));
    // });
        

  

  renderButtons();