function getSynonyms() {
  $.ajax({
    url: URL + "text/synonyms",
    type: "GET",
    success: function(result) {
      console.log(result);
      $(".resultsDiv").append(JSON.stringify(result));
    },
    error: function(error) {
      console.log(`Error ${error}`);
    }
  });
}
