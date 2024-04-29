import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup = {} as FormGroup;

  @Input() task: TaskModel = {} as TaskModel;

  @Output() save = new EventEmitter<TaskModel>();

  @Output() cancel = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      id: [this.task.id ? this.task.id : this.getRandomId(), Validators.required],
      title: [this.task.title, [Validators.required, Validators.maxLength(50)]],
      description: [this.task.description, [Validators.required, Validators.maxLength(500)]],
      deadline: [this.task.deadline, Validators.required],
      priority: [this.task.priority, Validators.required],
      status: [this.task.status, Validators.required],
      assignee: [this.task.assignee, Validators.required],
    });
  }

  onSubmit(): void {
    this.save.emit(this.taskForm.value);
  }

  onCancel(): void {
    this.cancel.emit();
  }

  getRandomId() {
    return Date.now();
  }
}
