package com.mz.todo.repositories;

import com.mz.todo.entities.Task;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByHeaderStartingWithIgnoreCaseOrderByHeaderAsc(String headerPrefix, Sort sorting);


}
