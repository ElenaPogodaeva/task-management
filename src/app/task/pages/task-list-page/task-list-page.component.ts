import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.scss'],
})
export class TaskListPageComponent implements OnInit {
  readonly columns = ['title', 'deadline', 'priority', 'status', 'assignee'];

  tasks$!: Observable<TaskModel[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.getTasks();
  }
}
