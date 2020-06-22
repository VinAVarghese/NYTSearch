
$("button").on("click", function() {
    var searchTerm = "pizza";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      searchTerm + "&api-key=9i2yCPGHzonOCXAjz9iGZXWOsUcWyXC2";


            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                console.log(response)
            })

})