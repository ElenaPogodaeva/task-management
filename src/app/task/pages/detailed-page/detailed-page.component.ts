import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModel } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export class DetailedPageComponent implements OnInit {
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

  onBack() {
    this.router.navigate(['/tasks']);
  }
}
