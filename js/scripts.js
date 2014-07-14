// $(document).ready(function(){
//   $("form#task-list").submit(function(event){
//     event.preventDefault();
//     $("#add-task").click(function() {
//       $("#new-task").append('<div class="new-task">' +
//                                  '<div class="form-group">' +
//                                    '<label for="new-street">New Task</label>' +
//                                    '<input type="text" class="form-control new-task">' +
//                                  '</div>' );
//     });
//   });
// });


$(document).ready(function(){
  $("form#task-list").submit(function(event){
    event.preventDefault();

    var inputtedList = $("input#new-list").val();
    var inputtedTask = $("input#new-tasks").val();
    var newList = { list: inputtedList, tasks: []};

    $("ul#list").append("<li><span class='list'>" + newList.list + "</span></li>");
    $("input#new-list").val("");
    $("input#new-tasks").val("");

    $(".list").last().click(function() {
      $("#show-lists").show();
      $("#show-lists h2").text(newList.list);
    });

    $("#add-tasks").click(function() {
      var inputtedTask = $("input#new-tasks").val();
      var newTask = { description: inputtedTask };
      newList.tasks.push(newTask);
      console.log(newList.tasks);
      newList.tasks.forEach(function(task) {
        $("ul#tasks").append("<li><span class='task'>" + task.description + "</li></span>");
      });
    });
  });
});
