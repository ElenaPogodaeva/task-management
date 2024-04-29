import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map, of } from 'rxjs';
import { TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly localStorageKey = 'tasks';

  getTasks(): Observable<TaskModel[]> {
    const tasks = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    console.log(tasks);
    return of(tasks).pipe(
      catchError((error) => {
        console.log('ERROR', error);
        return EMPTY;
      }),
    );
  }

  getTaskById(id: number): Observable<TaskModel | null> {
    return this.getTasks().pipe(
      map((tasks) => tasks.find((task) => task.id === id) || null),
      catchError((error) => {
        console.log('ERROR', error);
        return EMPTY;
      }),
    );
  }

  createTask(task: TaskModel): Observable<TaskModel> {
    return this.getTasks().pipe(
      map((tasks) => {
        tasks.push(task);
        localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
        return task;
      }),
      catchError((error) => {
        console.log('ERROR', error);
        return EMPTY;
      }),
    );
  }

  updateTask(changedTask: TaskModel): Observable<TaskModel> {
    return this.getTasks().pipe(
      map((tasks) => {
        const taskIndex = tasks.findIndex((item) => item.id === changedTask.id);
        tasks[taskIndex] = changedTask;
        localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
        return changedTask;
      }),
      catchError((error) => {
        console.log('ERROR', error);
        return EMPTY;
      }),
    );
  }

  deleteTask(id: number) {
    return this.getTasks().pipe(
      map((tasks) => {
        tasks = tasks.filter((item) => item.id !== id);
        localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
      }),
      catchError((error) => {
        console.log('ERROR', error);
        return EMPTY;
      }),
    );
  }
}
