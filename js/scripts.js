$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var movie = $("input#movie").val();
    console.log(movie);
    var food = $("input#food").val();
    console.log(food);
    var drink = $("input#drink").val();
    console.log(drink);
    var show = $("input#tv-show").val();
    console.log(show);
    var activity = $("input#activity").val();
    console.log(activity);
   var things = [movie, food, drink, show, activity,]
   console.log(things);
   var nstr = things[0,1,2]
   console.log(nstr);
    event.preventDefault();

    // $("#favorites").append(things[0, 1, 2);


    
  });
});