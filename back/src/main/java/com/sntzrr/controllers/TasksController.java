package com.sntzrr.controllers;

import com.sntzrr.models.Tasks;
import com.sntzrr.services.TasksServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

// Creating REST API with CRUD operations for tasks
@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class TasksController {
    private final TasksServiceImpl service;

    @GetMapping
    public ResponseEntity<List<Tasks>> getTasks() {
        List<Tasks> tasks = this.service.findAllTasks();
        if (!tasks.isEmpty()){
            return new ResponseEntity<>(tasks, HttpStatus.OK);
        }else {
            return ResponseEntity.ok(Collections.emptyList());
        }
    }

    @PostMapping
    public ResponseEntity<Tasks> createTask(@Validated @RequestBody Tasks task) {
        return new ResponseEntity<>(service.saveTask(task), HttpStatus.CREATED);
    }

    @PutMapping("/{id_task}")
    public Tasks updateTask (@PathVariable String id_task ,@Validated @RequestBody Tasks task){
        return this.service.saveTask(task);
    }

    @DeleteMapping("/{id_task}")
    public void deleteTask(@PathVariable String id_task) {
        this.service.deleteTaskById(id_task);
    }
}
