import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  newTodo: string = '';
  todos: { title: string; completed: boolean }[] = [];

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({ title: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  toggleCompletion(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
