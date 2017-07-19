// Requirements:
// - It should allow users to create a todo
// - it should allow users to delete todos
// - It should allow user to toggle a todos completed state
// - It should allow users to toggle all todos completed state
// - It should allows users to edit todos
// - It should allow users to create and display multiple todo lists
// - It should display all todos in a selected todolist on the web page
// - It should display the date the todo item was created
// - It should update date when todo is edited
// - It should store all todo lists in the browser local storage.

// Reference Material: http://todomvc.com/
// Shows the implementation of a todo list in many frameworks in javascript as well as
// in vanilla javascript.



var todoApp = {
	todoList: [],
	formatDate: function(date) {
		var time = (date.getHours() % 12 || 12) + ':' + date.getMinutes();
		var date = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' (time: ' + time + ')';
		return date; 
	},
	displayTodo: function() {
		this.todoList.forEach(function(i){
			if (i.completed === true) {
				var truth = '(x)' + i.todo + ' : ' + i.date;
				console.log(truth);
			} else {
				var lion = '( )' + i.todo + ' : ' + i.date;
				console.log(lion);
			}
		});
	},
	createTodo: function(todo) {
		this.todoList.push({
			todo: todo,
			completed: false,
			date: this.formatDate(new Date())
		});
		this.storeTodo();
		this.displayTodo();
	},
	deleteTodo: function(position) {
		this.todoList.splice(position, 1);
		this.storeTodo();
		this.displayTodo();
	},
	toggleComplete: function(position) {
		this.todoList[position].completed = !this.todoList[position].completed;
		this.storeTodo();
		this.displayTodo();
	},
	toggleAll: function() {
		var completedTodos = 0;

		this.todoList.forEach(function(i){
			if (i.completed === true) {
				completedTodos++;
			}

		});

		if (completedTodos === this.todoList.length) {
			this.todoList.forEach(function(i){
				i.completed = false;
			});
		} else {
			i.completed = true;
		}
		this.storeTodo();
		this.displayTodo();
	},
	editTodo: function(position, newTodo) {
		this.todoList[position].todo = newTodo;
		this.todoList[position].date = this.formatDate(new Date());
		this.storeTodo();
		this.displayTodo();
	},
	storeTodo: function() {
		var store = JSON.stringify(this.todoList);
		localStorage.setItem("todoList", store);
	},
	getTodo: function() {
		var store = localStorage.getItem("todoList");
		if (store === null) {
			this.todoList = [];
		} else {
			this.todoList = JSON.parse(store);
		};

		this.displayTodo();
	}




}


todoApp.getTodo();