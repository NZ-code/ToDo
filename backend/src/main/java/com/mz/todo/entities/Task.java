package com.mz.todo.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Entity
@NoArgsConstructor
@ToString
public class Task {
    public Task(String header, String text, Boolean isDone, Date dueDate){
        this.header = header;
        this.text = text;
        this.isDone = isDone;
        this.dueDate = dueDate;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long id;
    @Getter
    @Setter
    private String header;

    @Getter
    @Setter
    private Boolean isDone = false;

    @Getter
    @Setter
    private Date dueDate;

    @Getter
    @Setter
    private String text;
}
