// (function(){
// create constructor function for Todo:
var Todo = function (options) {
  var args = options || {};
  this.text = args.text;
  this.status = args.status;
};

var openTasks = [];

//Connect input field and button event to Todo:
$('.addDo').on('click', function (e) {
  e.preventDefault();

  var x = $('textDo').val();
  var task = new Todo({text: $('.textDo').val(), status: 'Open'});

  openTasks.push(task);

  $('.list').append('<li>' + task.text + '</li>');

  this.reset();



  console.log(b);
});


