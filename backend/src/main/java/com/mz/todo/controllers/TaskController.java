package com.mz.todo.controllers;


import com.mz.todo.entities.Task;
import com.mz.todo.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins ="http://localhost:4200")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping("/api/tasks/{id}")
    public Task getTask(@PathVariable("id") String id){
        return taskService.getTask(id);
    }
    @GetMapping("/api/tasks")
    public List<Task> getTasks(){
        return taskService.getTasks();
    }
    @PostMapping("/api/tasks")
    public void postTask(@RequestBody Task task){
        taskService.createTask(task);
    }
    @PutMapping("/api/tasks/{id}")
    public void updateTask(@RequestBody Task task, @PathVariable("id") String id){
        taskService.updateTask(task, id);
    }
    @DeleteMapping("/api/tasks/{id}")
    public void deleteTask(@PathVariable("id") String id){
        Task task = taskService.getTask(id);
        taskService.deleteTask(task);
    }
}
