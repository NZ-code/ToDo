import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-display-item',
  templateUrl: './task-display-item.component.html',
  styleUrls: ['./task-display-item.component.css']
})
export class TaskDisplayItemComponent {
  @Input()
  task!:Task

  constructor(private taskService:TaskService){

  }
  onIsDoneChange(task: Task, isDone:boolean){
    task.isDone = isDone
    this.taskService.update(task.id, task).subscribe(
      _ => this.taskUpdated.emit()
    );
  }
  @Output()
  taskUpdated = new EventEmitter();
}
