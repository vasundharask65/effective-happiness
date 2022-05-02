import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../types/ITodo';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  constructor() {}

  @Input() todo: ITodo = {
    name: '',
    isCompleted: false,
  };

  @Output() selectEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteEvent: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  ngOnInit(): void {}

  //3. delete todo function
  deleteTodo(todo: ITodo) {
    this.deleteEvent.emit(todo);
  }

  //5. IsCompleted todo
  onCompleted(todo: ITodo) {
    todo.isCompleted = true;
  }

  selectedTodo(todoName: string) {
    debugger;
    this.selectEvent.emit(todoName);
  }
}
