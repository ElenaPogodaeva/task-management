import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { CreateTaskPageComponent } from './pages/create-task-page/create-task-page.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { EditTaskPageComponent } from './pages/edit-task-page/edit-task-page.component';

const routes: Routes = [
  {
    path: '',
    component: TaskListPageComponent,
  },
  {
    path: 'new',
    component: CreateTaskPageComponent,
  },
  {
    path: 'details/:id',
    component: DetailedPageComponent,
  },
  {
    path: ':id/edit',
    component: EditTaskPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
