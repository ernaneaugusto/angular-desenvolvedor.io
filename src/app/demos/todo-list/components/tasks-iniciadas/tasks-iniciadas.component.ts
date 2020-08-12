import { map } from 'rxjs/operators';
import { Store } from './../todo-list/todo.store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html'
})
export class TasksIniciadasComponent implements OnInit {

  iniciados$: Observable<any[]>;

  constructor(
    private tasksService: TasksService,
    private store: Store
  ) { }

  ngOnInit() {
    this.iniciados$ = this.store
      .getTodoList()
      .pipe(
        map(todoList => todoList.filter(task => task.iniciado && !task.finalizado))
      )

  }
}