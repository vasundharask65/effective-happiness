import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-todo',
  templateUrl: './selected-todo.component.html',
  styleUrls: ['./selected-todo.component.scss'],
})
export class SelectedTodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() selectedTodo: string = '';
}
