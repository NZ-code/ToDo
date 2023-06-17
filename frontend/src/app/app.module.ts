import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; 
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDisplayItemComponent } from './task-display-item/task-display-item.component';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailComponent,
    TaskFormComponent,
    TaskDisplayItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
