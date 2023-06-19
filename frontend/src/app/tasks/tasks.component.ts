import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,  Validators} from '@angular/forms';

import { TaskService } from '../task.service';

import { Task } from '../task';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[];
  searchForm:FormGroup;
  sortingOptions = ['header', 'dueDate'];
  selectedSorting : string = this.sortingOptions[0];
  headerPrefix:string = ""
  constructor(private taskService: TaskService,private fb: FormBuilder){
    this.searchForm = this.fb.group(
      {
        sorting:this.sortingOptions[0],
        headerPrefix: "",
    
      }
    );
    this.searchForm.valueChanges.subscribe(
      _ => {
        if(this.searchForm.valid){
          this.headerPrefix = this.searchForm.get("headerPrefix")?.value;
          this.selectedSorting =this.searchForm.get("sorting")?.value;
          this.refreshTasks();
        }
        
      }
    )
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
