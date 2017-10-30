// backend
function Thing(thing, date, remove){
  this.thing = thing;
  this.date = date;
};


//front end

$(document).ready(function(){
  $("form#new-thing").submit(function(event){
    event.preventDefault();
    var inputThing = $("input#new-thing").val();
    var inputDate = $("input#new-date").val();

    var newThing = new Thing(inputThing, inputDate);
    var li =
    ("<h3>" + newThing.thing + "</h3>" +
    "<p>" + newThing.date + "</p>" +
    "<p class='link'> Click Here When Complete </p>");
    // $("ul#to-do").append("<li><span class='list-item'>" + newThing.thing + "</span></li>");
    $("#to-do").append("<li class ='remove'>" + li + "</li>");

    $(".remove").click(function(){
      $(this).hide();
    });
  });
});
