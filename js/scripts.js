$(document).ready(function(){
  $("form#task-list").submit(function(event){
    event.preventDefault();

    var name = $("input#new-list").val();
    var inputtedTask = $("input#new-tasks").val();
    var newList = { list: name, tasks: []};
    //var currentList = Object.create(newList);

    // This is the list of created lists:
    $("ul#list").append("<li><span class='list'>" + newList.list + "</span></li>");
    $("input#new-list").val("");

    // Clicking on the .list class should display the tasks for this list
    $(".list").last().click(function() {
      $("#show-lists").show();
      $("#show-lists h2").text(newList.list);
      $("ul#tasks").empty();
      newList.tasks.forEach(function(task) {
        $("ul#tasks").append("<li><span class='task'>" + task.description + "</li></span>");
      });
      console.log(newList.tasks);
    });

    //Clicking on this submit button should display the tasks for
    $("form#add-tasks").submit(function(event){
      event.preventDefault();
      var inputtedTask = $("input#new-tasks").val();
      var newTask = { description: inputtedTask };
      newList.tasks.push(newTask);
      $("ul#tasks").empty();
      newList.tasks.forEach(function(task) {
        $("ul#tasks").append("<li><span class='task'>" + task.description + "</li></span>");
      });
    });
  });
});
