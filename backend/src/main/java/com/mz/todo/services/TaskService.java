package com.mz.todo.services;

import com.mz.todo.entities.Task;
import com.mz.todo.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;


    public void createTask(Task task){
        taskRepository.save(task);
    }
    public List<Task> getTasks(String sortingParam){
        return (List<Task>) taskRepository.findAll(getSortingByParam(sortingParam));
    }
    Sort getSortingByParam(String sortingParam){
        Sort sort;
        if ("dueDate".equals(sortingParam)) {
            sort = Sort.by("dueDate").ascending();
        } else {
            sort = Sort.by("header").ascending();
        }
        return sort;
    }
    public Task getTask(String taskId){
        Long id =  Long.valueOf(taskId);
        Optional<Task> task =taskRepository.findById(id);
        if(task.isPresent()){
            return task.get();
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "this task cannot be found"
        );
    }
    public void deleteTask(Task task){
        taskRepository.delete(task);
    }
    public void updateTask(Task updatedTask, String id){

        Task oldTask = getTask(id);
        oldTask.setHeader(updatedTask.getHeader());
        oldTask.setText(updatedTask.getText());
        oldTask.setIsDone(updatedTask.getIsDone());
        oldTask.setDueDate(updatedTask.getDueDate());
        taskRepository.save(oldTask);
    }

    public List<Task> searchTasksByHeaderPrefix(String headerPrefix, String sorting) {
        return taskRepository.findByHeaderStartingWithIgnoreCase(headerPrefix, getSortingByParam(sorting));
    }

}
