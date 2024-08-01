package com.sntzrr.services;

import com.sntzrr.models.Tasks;
import com.sntzrr.repositories.ITasksRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TasksServiceImpl {

    private final ITasksRepository repository;

    // Service to get the list of tasks
    public List<Tasks> findAllTasks (){
        return repository.findAll();
    }

    // Service to create a task
    public Tasks saveTask (Tasks task){
        return repository.save(task);
    }

    // Service to delete a task
    public void deleteTaskById (String task_id){
        repository.deleteById(task_id);
    }
}
