// (function(){
var taskDone, taskEdit;
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

  var taskItem = $('.textDo').val();
  var task = new Todo({text: taskItem, status: 'Open'});


// push tasks to array openTasks
  openTasks.push(task);

// appends HTML list item
  $('ul').append('<li class="taskList">' + task.text + '</li>');

// resets input
  this.reset();

  console.log(task);

// moves openTasks list item to closedTasks array when clicked

  $('.tasks').on('click', 'li', function (event) {
    event.preventDefault();
    $(this).addClass('strike');
    var taskDone = $(this).text();
    var taskEdit = _.find (openTasks, {text: taskDone});
    taskEdit.status = (this.status == 'Open') ? this.status : 'Closed';
    $('.done').append('<li class="taskList">' + taskDone + '</li>');
    closedTasks.push(taskEdit);
    $(this).remove();
    console.log('hello');
  });

// try to set status of 'completed' as variables that on click becomes a swappable function follow
// the logic of this without the callback if possible?:

// getFilteredTodos: function () {
//       if (this.filter === 'active') {
//         return this.getActiveTodos();
//       }

//       if (this.filter === 'completed') {
//         return this.getCompletedTodos();
//       }


});



    // $(this).remove(); will remove from list


