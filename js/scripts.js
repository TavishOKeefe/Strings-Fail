function stringOfWords(input){

  var array = [];

  for (i = 0; i < input.length; i++){
    if (i !=="a")
    {
        array.push(i);
      }
    }
  return array;
}

//front end user interraction

$(document).ready(function(){
  $("form#info").submit(function(event){
    event.preventDefault();

    var string = stringOfWords("input#words");
    var result = stringOfWords(string);
    $("#result").text(result);
  });
});
