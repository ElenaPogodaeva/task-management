import { Component, OnInit } from '@angular/core';
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

  tasks!: TaskModel[];

  sortField: string = '';

  sortReverse: boolean = false;

  filterWord: string = '';

  constructor(
    private taskService: TaskService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  onClick(id: number) {
    this.router.navigate(['details', id]);
  }

  onEdit(id: number) {
    this.router.navigate([id, 'edit']);
  }

  onDelete(id: number) {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }

  onSort({ sortField, sortReverse }: { sortField: string; sortReverse: boolean }) {
    this.sortField = sortField;
    this.sortReverse = sortReverse;
  }

  onFilter(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filterWord = target.value;
  }
}
