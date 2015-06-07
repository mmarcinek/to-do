// (function(){
var taskDone, taskEdit;
// create constructor function for Todo:
var Todo = function (options) {
  var args = options || {};
  this.text = args.text;
  this.status = 'Open';
};

var openTasks = [];
var closedTasks = [];


//Connect input field and button event to Todo:
$('.input').on('submit', function (e) {
  e.preventDefault();

  var taskItem = $('.textDo').val();
  var task = new Todo({text: taskItem});


// push tasks to array openTasks
  openTasks.push(task);

// appends HTML list item
  $('ul').append('<li class="taskList">' + task.text + '</li>');

// resets input
  this.reset();

  console.log(task);
  });

// moves openTasks list item to closedTasks array when clicked

  $('.tasks').on('click','li', function (event) {
    event.preventDefault();
//     $(this).toggleClass('strike');
    var taskDone = $(this).text();
    var taskEdit = _.find (openTasks, {text: taskDone});
    taskEdit.status = 'Closed';
    closedTasks.push(taskEdit);
  });


// });

// $('#tasks').on('click', 'li', function() {
//  event.preventDefault();
//  $(this).toggleClass('complete');
//  var tTask = $(this).text();
//  var taskToEdit = _.find(storage, {task: tTask});
//  taskToEdit.status = 'Complete';
// });

    // $(this).remove(); will remove from list


