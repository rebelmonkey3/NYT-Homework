
// Functionality for search button
$("#searchButton").on("click", function() {
  var searchTerm = $("#searchTerm").val()
  var startYear = $("#startYear").val()
  var endYear = $("#endYear").val()

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
// API key
  var parameterObj = {
    "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
    q: searchTerm,
    begin_date: startYear + "0101",
    end_date: endYear + "0101"
  };

  //Ajax request call 
  $.ajax({
    url: queryURL + $.param(parameterObj),
    method: "GET"
  })
  //responce from Ajax call, and call back function when data is recieved back
  .done(function(artResponse){
    console.log(artResponse)

      // Jquery function to append headlines found
        $("#resultsDiv")
          .append(
            "<h3 class='articleHeadline'><span class='label label-primary'>" +
             + "</span><strong> " +
            artResponse.response.docs[0].headline.main + "</strong></h3>"
          );
        console.log(artResponse.response.docs[i].headline.main);

        //For loop to loop through headlines and append to HTML
});
});
 

