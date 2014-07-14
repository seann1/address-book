$(document).ready(function(){
  $("form#task-list").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedFirstTask = $("input#new-first-task").val();

    var newWorker = { firstName: inputtedFirstName, lastName: inputtedLastName, firstTask: inputtedFirstTask };
    var Worker = [];
    Worker.push(newWorker);
    console.log(Worker);
    $("ul#tasks").append("<li><span class='task'>" + newWorker.firstName + " " + newWorker.lastName + " " + newWorker.firstTask + "</span></li>");
    //console.log(newWorker);
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-first-task").val("");

    $(".task").last().click(function() {
      //console.log(newWorker);

      $("#show-tasks").show();
      $("#show-tasks h2").text(newWorker.firstName + " " + newWorker.lastName);
      $(".first-name").text(newWorker.firstName);
      $(".last-name").text(newWorker.lastName);
      $(".tasked").text(newWorker.firstTask);
    });
  });
});
