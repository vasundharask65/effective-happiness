import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  search(searchName: string) {
    this.searchEvent.emit(searchName);
  }
}
