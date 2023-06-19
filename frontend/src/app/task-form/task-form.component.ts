import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Expansion } from '@angular/compiler';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ElementRef } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
 task : Task;
 taskForm: FormGroup;
  constructor(private taskService:TaskService, private fb: FormBuilder, private elementRef: ElementRef){
    this.task =new Task();
    this.taskForm = this.fb.group(
      {
        header: new FormControl("", [Validators.required,Validators.minLength(3),Validators.maxLength(25)],),
        text: new FormControl("", [Validators.required,Validators.minLength(3),Validators.maxLength(255)]),
        dueDate: "",
        
      }
    )
  }
  ngInit(){
    
    // emit
    //this.taskForm.valueChanges.subscribe(console.log);
  }
  @Output()
  messageSent = new EventEmitter();
  
  onSubmit(formRef: FormGroupDirective){
    if(this.taskForm.valid){
      this.task = new Task();
      this.task.header = this.taskForm.get('header')?.value;
      this.task.text = this.taskForm.get('text')?.value;
      this.task.dueDate = this.taskForm.get('dueDate')?.value;
      
      
      this.taskForm.reset();  // Reset the form to empty values
      formRef.resetForm();    // Reset the form state and clear errors

      this.elementRef.nativeElement.querySelectorAll('.ng-invalid').forEach((element: any) => {
        element.classList.remove('ng-invalid');
      });

      this.taskService.save(this.task).subscribe(
        _ =>this.messageSent.emit());
      
    }


  }
  
}
