package com.example.Restaurant.Model;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Bookings {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;
    @Column (nullable = false)
    private String name;
    @Column (nullable = false)
    private String email;
    @Column(nullable = false)
    private String date;
    @Column (nullable = false)
    private String time;

    public Bookings() {}


    public Bookings(String name, String email, String date, String time) {
//        this.id = id;
        this.name = name;
        this.email = email;
        this.date = date;
        this.time = time;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getDate() {
        return date;
    }

    public String getTime() {
        return time;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
