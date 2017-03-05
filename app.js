$("#searchButton").on("click", function() {
  var searchTerm = $("#searchTerm").val()
  var startYear = $("#startYear").val()
  var endYear = $("#endYear").val()

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

  var parameterObj = {
    "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
    q: searchTerm,
    begin_date: startYear + "0101",
    end_date: endYear + "0101"
  };



function runQuery(numArticles){

  $.ajax({
    url: queryURL + $.param(parameterObj),
    method: "GET"
  })

  .done(function(artResponse){
    console.log(artResponse)



    // 
    // 

for (var i = 0; i < numArticles; i++) {
      // Add to the Article Counter (to make sure we show the right number)
      articleCounter++;
      // Create the HTML well (section) and add the article content for each
      var wellSection = $("<div>");
      wellSection.addClass("well");
      wellSection.attr("id", "resultsDiv" + articleCounter);
      $("#well-section").append(wellSection);
      // Confirm that the specific JSON for the article isn't missing any details
      // If the article has a headline include the headline in the HTML
      if (artResponse.response.docs[i].headline !== "null") {
        $("#resultsDiv" + articleCounter)
          .append(
            "<h3 class='articleHeadline'><span class='label label-primary'>" +
            articleCounter + "</span><strong> " +
            artResponse.response.docs[i].headline.main + "</strong></h3>"
          );
        // Log the first article's headline to console
        console.log(artResponse.response.docs[i].headline.main);
      }
      // If the article has a byline include the headline in the HTML
      if (artResponse.response.docs[i].byline && artResponse.response.docs[i].byline.original) {
        $("#resultsDiv" + articleCounter)
          .append("<h5>" + artResponse.response.docs[i].byline.original + "</h5>");
        // Log the first article's Author to console.
        console.log(artResponse.response.docs[i].byline.original);
      }
      // Then display the remaining fields in the HTML (Section Name, Date, URL)
      $("#articleWell-" + articleCounter)
        .append("<h5>Section: " + artResponse.response.docs[i].section_name + "</h5>");
      $("#articleWell-" + articleCounter)
        .append("<h5>" + artResponse.response.docs[i].pub_date + "</h5>");
      $("#articleWell-" + articleCounter)
        .append(
          "<a href='" + artResponse.response.docs[i].web_url + "'>" +
          artResponse.response.docs[i].web_url + "</a>"
        );
      // Log the remaining fields to console as well
      console.log(artResponse.response.docs[i].pub_date);
      console.log(artResponse.response.docs[i].section_name);
      console.log(artResponse.response.docs[i].web_url);
    }
  });
};
runQuery();
});
// METHODS

