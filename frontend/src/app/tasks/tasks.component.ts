import { Component } from '@angular/core';
import { TaskService } from '../task.service';

import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] | undefined;
  constructor(private taskService: TaskService){
    
  }
  ngOnInit():void{
    this.attachAllTasks();
  }
  attachAllTasks(){
    this.taskService.findAll().subscribe(
      tasks => {this.tasks = tasks;}
    )
  }
  newTask(){
    this.attachAllTasks();
    
  }
  
}
