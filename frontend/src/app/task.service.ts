import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

import { Task } from './task';
import { Utils } from './utils';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  public findAll():Observable<Task[]>{
    return this.http.get<Task[]>(Utils.base_url)
  }
  public findById(id:string):Observable<Task>{
    return this.http.get<Task>(Utils.getUrlWithTaskId(id));
  }
  public save(task:Task){
    return this.http.post<Task>(Utils.base_url, task);
  }
  public update(id:string, task:Task){
    return this.http.put<Task>(Utils.getUrlWithTaskId(id), task);
  }
  public delete(id:string){
    return this.http.delete<Task>(Utils.getUrlWithTaskId(id));
  }

}
