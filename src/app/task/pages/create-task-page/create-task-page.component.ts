import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskModel } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-create-task-page',
  templateUrl: './create-task-page.component.html',
  styleUrls: ['./create-task-page.component.scss'],
})
export class CreateTaskPageComponent {
  constructor(
    private router: Router,
    private taskService: TaskService,
  ) {}

  onSubmit(task: TaskModel) {
    const task$ = this.taskService.createTask(task);
    task$.subscribe(() => this.router.navigate(['/tasks']));
  }

  onCancel() {
    this.router.navigate(['/tasks']);
  }
}
