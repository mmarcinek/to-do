// (function(){
// create constructor function for Todo:
var Todo = function (options) {
  var args = options || {};
  this.text = options.text;
  this.status = options.status;
};

//Connect input field and button event to Todo:
$('.textTodo').val()



// sandbox:
var todo1 = new Todo({text: 'sell car', status: 'open'});
// var todo2 = new Todo({text: 'buy eggs'});


// })();
