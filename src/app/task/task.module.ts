import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskRoutingModule } from './task-routing.module';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { CreateTaskPageComponent } from './pages/create-task-page/create-task-page.component';
import { EditTaskPageComponent } from './pages/edit-task-page/edit-task-page.component';

@NgModule({
  declarations: [
    TaskListPageComponent,
    TaskFormComponent,
    CreateTaskPageComponent,
    EditTaskPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [TaskListPageComponent],
})
export class TaskModule {}
