import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; 
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TaskFormComponent } from './task-form/task-form.component';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailComponent,
    TaskFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
