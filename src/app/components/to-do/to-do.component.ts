import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  headline = "Angular Todo app"
  AllTodos: ToDo[] = []

  constructor() { }

  ngOnInit(): void {
    this.AllTodos = [
      {
        id: 0,
        title: '1st',
        completed: false
      },
      {
        id: 1,
        title: '2nd',
        completed: true
      }
    ]
  }
  toggleComplete(id: number) {
    this.AllTodos.map(x => {
      if (x.id === id) {
        x.completed = !x.completed
      }
      return x
    })
  }
  handleDelete(id: number) {
    this.AllTodos = this.AllTodos.filter(x => x.id !== id)
  }

}
