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

    public List<Tasks> findAllTasks (){
        return repository.findAll();
    }

    public Tasks saveTask (Tasks task){
        return repository.save(task);
    }

    public void deleteTaskById (String task_id){
        repository.deleteById(task_id);
    }
}
