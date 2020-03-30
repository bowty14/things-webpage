$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var movie = $("input#movie").val();
    
    var food = $("input#food").val();
    
    var drink = $("input#drink").val();
    
    var show = $("input#tv-show").val();
   
    var activity = $("input#activity").val();
    
   var things = [movie, food, drink, show, activity]
 

  var newArray = []
  newArray.push(things[1], things[0], things[2]);
  console.log(newArray);
    $('#favorites1').text(newArray[0]);
    $('#favorites2').text(newArray[1]);
    $('#favorites3').text(newArray[2]);

  //  $('#myList').append("<li>" + things[0] + "</li>")
   

    // $("#favorites").append(things[0, 1, 2);


    
  });
});