var seltext = null;
console.log("test");
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  switch (request.message) {
    case "setText":
      window.seltext = request.data;
      break;

    default:
      sendResponse({ data: "Invalid arguments" });
      break;
  }
});
$(document).ready(function() {
  const URL = "https://wordsapiv1.p.mashape.com/words/";
  if (seltext.length) {
    $.ajax({
      url: URL + seltext + "/synonyms",
      type: "GET",
      success: pasteResults(result),
      error: function(error) {
        console.log(`Error ${error}`);
      }
    });
  }

  function pasteResults(result) {
    console.log(result);
    $(".resultsDiv").append(JSON.stringify(result));
  }
});
