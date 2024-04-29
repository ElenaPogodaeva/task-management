import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TaskRoutingModule } from './task-routing.module';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';

@NgModule({
  declarations: [TaskListPageComponent],
  imports: [CommonModule, TaskRoutingModule, MatTableModule, MatButtonModule, MatIconModule],
})
export class TaskModule {}
