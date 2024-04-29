import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModel } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrls: ['./edit-task-page.component.scss'],
})
export class EditTaskPageComponent implements OnInit {
  task!: TaskModel;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.taskService.getTaskById(id).subscribe((task) => (this.task = task as TaskModel));
  }

  onSubmit(task: TaskModel) {
    const task$ = this.taskService.updateTask(task);
    task$.subscribe(() => this.router.navigate(['/tasks']));
  }

  onCancel() {
    this.router.navigate(['/tasks']);
  }
}
