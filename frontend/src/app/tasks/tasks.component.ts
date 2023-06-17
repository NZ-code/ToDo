import { Component } from '@angular/core';
import { TaskService } from '../task.service';

import { Task } from '../task';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] | undefined;
  sortingOptions = ['header', 'dueDate'];
  selectedSorting : string = this.sortingOptions[0];
  headerPrefix: string = "";
  constructor(private taskService: TaskService){
    
  }
  ngOnInit():void{
    this.attachAllTasks();
  }
  attachAllTasks(sorting:string=this.selectedSorting){
    this.taskService.findAll(sorting).subscribe(
      tasks => {this.tasks = tasks;}
    )
  }
  newTask(){
    this.attachAllTasks(this.selectedSorting);
    
  }
  onInputChange(){
    this.attachAllTasksByHeaderPrefix(this.headerPrefix, this.selectedSorting);
  }
  refreshTasks(){
    if (this.headerPrefix.length === 0){
     
      this.attachAllTasks(this.selectedSorting);
    }
    else{
      
      this.attachAllTasksByHeaderPrefix(this.headerPrefix, this.selectedSorting);
    }
  }
  attachAllTasksByHeaderPrefix(headerPrefix:string, sorting:string){
    this.taskService.attachAllTasksByHeaderPrefix(headerPrefix,sorting).subscribe(
      tasks => {this.tasks = tasks;}
    );
  }
  getNotDoneTasks(){
    return this.tasks?.filter(
      task => !task.isDone
    );
  }
  getDoneTasks(){
    return this.tasks?.filter(
      task => task.isDone
    );
  }

}
