import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: { title: string; completed: boolean } = { title: '', completed: false };
  @Output() toggle = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();

  onToggle() {
    this.toggle.emit();
  }

  onRemove() {
    this.remove.emit();
  }
}
