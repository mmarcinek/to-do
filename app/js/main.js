// (function(){

//   "use strict";

// create constructor function for Todo:
var Todo = function (options) {
  var args = options || {};
  this.text = args.text;
  this.status = 'Open';
  this.id = _.random(200, 6000);
  // '+ x.id +'
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
  $('.open').append('<li id="' + task.id + '">' + task.text + '<img src="images/trash.png" class="delete"></li>');

// resets input
  this.reset();
  });

// delete the item from the list as a protype:
var wipe = function (list) {
    taskTodo.forEach( function (task){
    if(task.status !== "Open");
      taskTodo = _.without(taskTodo, task);
    $('#' + task.id).remove();
  });
};

// prototype invoked on 'click'
 $('.open').on('click', 'img', function(event){
    Todo.prototype.wipe = wipe;
});

// Swaps status from Open to Closed and moves to completed list:

  $('.open').on('click', 'li', function (event) {
    event.preventDefault();
    var taskDone = $(this).text();
    var taskEdit = _.find(taskTodo, {text: taskDone});
    taskEdit.status = 'Closed';
    $('.closed').append('<li id="' + this.id + '">' + taskDone + '<img src="images/trash.png"></li>');
    $(this).remove();

  });

// Swaps status back to Open and moves item to to-do list:
  $('.closed').on('click', 'li', function (event) {
    event.preventDefault();
    var taskReDo = $(this).text();
    var taskSwap = _.find(taskTodo, {text: taskReDo});
    taskSwap.status = 'Open';
    $(this).remove();
    $('.open').append('<li id="' + this.id + '">' + taskReDo + '<img src="images/trash.png"></li>');
  });

// Accordion:
$('section').on('click', function(){
  $('section').removeClass('home');
  $(this).addClass('home');
});

// })();


