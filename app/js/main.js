// (function(){
// create constructor function for Todo:
var Todo = function (options) {
  var args = options || {};
  this.text = args.text;
  this.status = args.status;
};

var openTasks = [];
var closedTasks = [];


//Connect input field and button event to Todo:
$('.input').on('submit', function (e) {
  e.preventDefault();

  var x = $('textDo').val();
  var task = new Todo({text: $('.textDo').val(), status: 'Open'});

// push tasks to array openTasks
  openTasks.push(task);

// appends HTML list item
  $('ul').append('<li class="taskList">' + task.text + '</li>');

// resets input
  this.reset();

  console.log(task);


// moves openTasks list item to closedTasks array when clicked

  $('#tasks').on('click', function (event) {
    $(this).toggleClass('strike');
    var taskDone = $(this).text();
    var taskToEdit = _.find(openTasks, {task: taskDone});
//     taskToEdit.status = 'Closed';
    console.log(openTasks);
  });


  // $('.taskList').on('click', function (event) {
  //   closedTasks.push(task);
  // });

});

// $('#tasks').on('click', 'li', function() {
//  event.preventDefault();
//  $(this).toggleClass('complete');
//  var tTask = $(this).text();
//  var taskToEdit = _.find(storage, {task: tTask});
//  taskToEdit.status = 'Complete';
// });


