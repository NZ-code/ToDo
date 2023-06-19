import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs'

import { Task } from './task';
import { Utils } from './utils';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  public findAll(sorting:string):Observable<Task[]>{
    let params = new HttpParams().set('sorting',sorting);
    console.log("Service: No prefix:" );
    return this.http.get<Task[]>(Utils.base_url,{params:params})
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
  public attachAllTasksByHeaderPrefix(headerPrefix:string, sorting:string){
    let params = new HttpParams().set('headerPrefix',headerPrefix).set('sorting',sorting);
    
    console.log("Service: Header prefix:" + headerPrefix);
    console.log(Utils.base_url + "/search",{params:params})
    return this.http.get<Task[]>(Utils.base_url + "/search",{params:params});
  } 

}
