$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var movie = $("input#movie").val();
    var food = $("input#food").val();
    var drink = $("input#drink").val();
    var show = $("input#tv-show").val();
    var activity = $("input#activity").val();
    console.log(movie);
    // var things = 
    event.preventDefault();
    
  });
});