import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from './types/ITodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'What do you want to schedule today?';

  ngOnInit(): void {
    this.tempTodo = this.todos;
  }

  // Initialising todos
  selectTodo: string = '';

  tempTodo: ITodo[] = [];
  completedTodo: ITodo[] = [];
  inCompletedTodo: ITodo[] = [];

  //adding "completedTask" class
  isCompletedTask: boolean = false;

  //1. creating static data to loop
  todos: ITodo[] = [
    {
      name: 'angular task',
      isCompleted: false,
    },
    {
      name: 'project work',
      isCompleted: true,
    },
    {
      name: 'learning',
      isCompleted: true,
    },
    {
      name: 'practise',
      isCompleted: false,
    },
  ];

  //2.add todo function
  addTodo(name: string) {
    this.todos.push({
      name: name,
      isCompleted: false,
    });
  }

  //3. delete todo function
  deleteTodo(todo: ITodo) {
    //this.todos.splice(id, 1);
    this.todos = this.todos.filter((i) => i.name != todo.name);
  }

  //4. get all, completed & incompleted todo list
  allTodos() {
    this.todos = this.tempTodo;
  }

  completedTodos() {
    this.todos = this.tempTodo.filter((i) => i.isCompleted == true);
  }

  incompletedTodos() {
    this.todos = this.tempTodo.filter((i) => i.isCompleted == false);
  }

  //5. IsCompleted todo
  onCompleted(todo: ITodo) {
    todo.isCompleted = true;
  }

  selectedTodo(name: any) {
    debugger;
    this.selectTodo = name;
  }

  //searching
  searchTodo(name: string) {
    this.todos = this.tempTodo.filter(
      (x) => x.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }
}
