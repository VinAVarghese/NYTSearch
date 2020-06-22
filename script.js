
$("button").on("click", function() {
    var searchTerm = //get search results here from search bar;
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      searchTerm + "&api_key=9i2yCPGHzonOCXAjz9iGZXWOsUcWyXC2";


            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {

            })

})