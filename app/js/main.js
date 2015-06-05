// (function(){
// create constructor function for Todo:
var Todo = function (options) {
  var args = options || {};
  this.text = args.text;
  this.status = args.status;
};



//Connect input field and button event to Todo:
$('.addDo').on('click', function (e) {
  e.preventDefault();

  var x = $('textDo').val();
  var b = new Todo({text: $('.textDo').val(), status: 'Open'});

  $('.list').append('<li>' + b.text + '</li>');

  console.log(b);
});


