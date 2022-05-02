import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() addEvent: EventEmitter<string> = new EventEmitter<string>();

  addTodo(name: string) {
    this.addEvent.emit(name);
  }
}
