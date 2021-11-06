function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

let jsonData;
$.getJSON("test.json", function(json) {
    jsonData = json;
    console.log(json); // this will show the info it in firebug console
});

$("#result").click(function() {
  let attentionVal = $('select[name=attention]').val();
  let homeworkVal = $('select[name=homework]').val();
  let text = $("#name").val() + ", " + attentionArray[attentionVal][randomInt(0,attentionArray[attentionVal].length)] + homeworkArray[homeworkVal][randomInt(0,homeworkArray[homeworkVal].length)];
  $("#resultVal").val(text)
});
