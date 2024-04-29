import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly localStorageKey = 'tasks';

  getTasks(): Observable<Task[]> {
    // const tasks = of(localStorage.getItem(this.localStorageKey) || '');
    const storedTasks = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    const tasks = of(storedTasks);
    return tasks.pipe(
      catchError((error) => {
        console.log('ERROR', error);
        return EMPTY;
      }),
    );
  }
}
