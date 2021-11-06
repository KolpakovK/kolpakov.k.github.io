function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

let jsonData;
$.getJSON("js/data.json", function(json) {
    jsonData = json;
    console.log(json); // this will show the info it in firebug console
});

$("#result").click(function() {
  let attentionVal = $('select[name=attention]').val();
  let homeworkVal = $('select[name=homework]').val();

  let attentionArray;
  if (attentionVal==0){
    attentionArray = jsonData.attention.good;
  }
  else if(attentionVal==1){
    attentionArray = jsonData.attention.normal;
  }
  else{
    attentionArray = jsonData.attention.bad;
  }

  let homeworkArray;
  if (homeworkVal==0){
    homeworkArray = jsonData.hw.good;
  }
  else if(homeworkVal==1){
    homeworkArray = jsonData.hw.normal;
  }
  else{
    homeworkArray = jsonData.hw.bad;
  }

  let text = $("#name").val() + ", " + attentionArray[randomInt(0,attentionArray.length)] + homeworkArray[randomInt(0,homeworkArray.length)];
  $("#resultVal").val(text)
});
