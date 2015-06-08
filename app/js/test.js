// create constructor function for Todo:
var Todo = function (options) {
  var args = options || {};
  this.text = args.text;
  this.status = 'Open';
  this.id = _.random(200, 6000);
};

// Display list prototype
var taskTodo = [];
// input
$('.input').on('submit', function (e) {
  e.preventDefault();
  // var taskItem = $('.textDo').val();
  // var task = new Todo({text: taskItem});

  taskTodo.push(task);
  // $('.open').append('<li id="' + task.id + '">' + task.text + '<img src="images/trash.png" class="delete"></li>');
  Todo.prototype.output = function (task) {
    var task = $('ul').append('<li id="' + task.id + '">' + this.text + '<img src="images/trash.png"></li>');
  };

  this.reset();
  });

//  $('.open').on('click', 'li', function (event) {
//     event.preventDefault();
//     var taskText = $(this).text();
//     var taskEdit = _.find(taskTodo, {text: taskDone});
//     taskEdit.status = 'Closed';
//     $('.closed').append('<li id="' + task.id + '">' + taskDone + '<img src="images/trash.png"></li>');
//     $(this).remove();

//   });

// // delete
//  $('.open').on('click', 'img', function(event){
//   console.log('Hello');
//   taskTodo.forEach( function (task){
//     if(task.status !== "Open");
//       taskTodo = _.without(taskTodo, task);
//     $('#' + task.id).remove();
//   });
// });

