// (function(){

// create constructor function for Todo:
var Todo = function (options) {
  var args = options || {};
  this.text = args.text;
  this.status = 'Open';
};

// create an array of tasks to-do
var taskTodo = [];


//Connect input field and button event to Todo:
$('.input').on('submit', function (e) {
  e.preventDefault();

  var taskItem = $('.textDo').val();
  var task = new Todo({text: taskItem});


// push tasks to array openTasks
  taskTodo.push(task);

// appends HTML list item
  $('.open').append('<li>' + task.text + '</li>');

// resets input
  this.reset();
  });

// Swaps status from Open to Closed and moves to completed list:

  $('.open').on('click', 'li', function (event) {
    event.preventDefault();
    var taskDone = $(this).text();
    var taskEdit = _.find(taskTodo, {text: taskDone});
    taskEdit.status = 'Closed';
    $(this).remove();
    $('.closed').append('<li>' + taskDone + '</li>');

  });

// Swaps status back to Open and moves item to to-do list:
  $('.closed').on('click', 'li', function (event) {
    event.preventDefault();
    var taskReDo = $(this).text();
    var taskSwap = _.find(taskTodo, {text: taskReDo});
    taskSwap.status = 'Open';
    $(this).remove();
    $('.open').append('<li>' + taskReDo + '</li>');
  });
// });






