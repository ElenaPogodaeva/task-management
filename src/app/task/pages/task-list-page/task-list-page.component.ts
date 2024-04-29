import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.scss'],
})
export class TaskListPageComponent implements OnInit {
  readonly columns = ['title', 'deadline', 'priority', 'status', 'assignee', 'action'];

  tasks$!: Observable<TaskModel[]>;

  constructor(
    private taskService: TaskService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.tasks$ = this.taskService.getTasks();
  }

  onClick(id: number) {
    // this.router.navigate([id, 'edit']);
  }

  onEdit(id: number) {
    this.router.navigate([id, 'edit']);
  }

  onDelete(id: number) {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }
}
