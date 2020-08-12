import { Store } from './../todo-list/todo.store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { TasksService } from '../../todo.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$: Observable<any[]>
  toDoSubscription: Subscription;

  constructor(
    private taskService: TasksService,
    private store: Store
  ) { }

  ngOnInit() {
    // precisamos fazer um subscribe em getTodoList$, pois eh esse servico o responsavel por buscar os
    // dados do backend para popular a lista da store, apos isso a store trata das informacoes sozinha
    this.toDoSubscription = this.taskService.getTodoList$.subscribe();

    this.todolist$ = this.store
      .getTodoList()
      .pipe(
        map(todolist => todolist.filter(task => !task.iniciado && !task.finalizado))
      )
  }

  ngOnDestroy() {
    this.toDoSubscription.unsubscribe();
  }
}