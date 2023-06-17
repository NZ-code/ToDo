import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { TasksComponent } from '../tasks/tasks.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';


const routes: Routes = [
  {path:'', redirectTo: 'tasks', pathMatch: 'full'},
  {path: 'tasks', component:TasksComponent},
  {path: 'tasks/:task_id/details', component: TaskDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
