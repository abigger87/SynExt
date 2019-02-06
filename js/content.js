document.addEventListener("mouseup", function(event) {
  var sel = window.getSelection().toString();
  const URL = "https://wordsapiv1.p.mashape.com/words/";

  if (sel.length)
    chrome.extension.sendRequest({ message: "setText", data: sel }, function(
      response
    ) {
      $.ajax({
        url: URL + seltext + "/synonyms",
        type: "GET",
        success: function(result) {
          console.log(result);
          $(".resultsDiv").append(JSON.stringify(result));
        },
        error: function(error) {
          console.log(`Error ${error}`);
        }
      });
    });
});
