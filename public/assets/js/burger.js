$(function() {
    $(".eatburger").on("click", function(event) {
      var id = $(this).data("id");
     
  
      var devouredState = {
        Devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log("Burger Devoured!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        Devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Added a new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".trashburger").on("click", function(event) {
        var id = $(this).data("id");
       

    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE",
          url: "/api/burgers/" + id
        }).then(
          function() {
        
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  
    
  });
  