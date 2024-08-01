package com.sntzrr.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.io.Serializable;

@Data
@Entity(name = "Tasks")
@Table(name = "\"Tasks\"", schema = "public")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Tasks implements Serializable {
    @Id
    @Column(name = "id_task", nullable = false)
    String id;
    @Column(name = "title_task")
    String title;
    @Column(name = "description_task")
    String description;
    @Column (name = "completed_task")
    Boolean completed;
}
