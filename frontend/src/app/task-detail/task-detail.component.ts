import { Component,Output,EventEmitter } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Location, DatePipe} from '@angular/common'

import { FormsModule } from '@angular/forms';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  task: Task | undefined
  id: string | undefined
  constructor(private taskService:TaskService,
              private route: ActivatedRoute,
              private location:Location,
              private datePipe: DatePipe){

  }
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('task_id')!;
    this.taskService.findById(this.id).subscribe(
      data => {this.task = data;}
    )
    ;
  }
  goBack(){
    this.location.back();
  }
  onUpdate(){
    this.taskService.update(this.id!, this.task!).subscribe(
      _ => this.taskChangedEvent.emit()
      
    );
    
    
  }
  @Output()
  taskChangedEvent = new EventEmitter();

  onDelete(){
    this.taskService.delete(this.id!).subscribe(
      _ => 
      {
        this.taskChangedEvent.emit()
        this.location.back();
      }
    );
    
  }
  onSaveIsDoneChange(value:boolean){
    this.task!.isDone = value;
    //console.log(this.task!.isDone);
    
  }
  getFormatedDate(date:Date){
    return this.datePipe.transform(date,'MM/dd/yyyy');
  }
}

