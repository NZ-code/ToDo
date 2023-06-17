import { Component, Input,Output,EventEmitter } from '@angular/core';


import { Task } from '../task';
import { TaskService } from '../task.service';
import { Expansion } from '@angular/compiler';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
 task : Task;
  constructor(private taskService:TaskService){
    this.task =new Task();
  }
  @Output()
  messageSent = new EventEmitter();
  
  onSubmit(){
    this.taskService.save(this.task).subscribe(
      _ =>this.messageSent.emit());
    
  }
}
