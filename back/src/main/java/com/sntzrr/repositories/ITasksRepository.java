package com.sntzrr.repositories;

import com.sntzrr.models.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITasksRepository extends JpaRepository<Tasks, String> {
}
