package com.mz.todo.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@ToString
public class Task {
    public Task(String header, String text, Boolean isDone){
        this.header = header;
        this.text = text;
        this.isDone = isDone;
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
    private String text;
}
