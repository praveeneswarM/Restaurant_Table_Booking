package com.example.Restaurant.Service;

import com.example.Restaurant.Model.Bookings;
import com.example.Restaurant.Repostitory.Booking_Repo;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Booking_Service {

    @Autowired
    Booking_Repo rpo;

    public boolean bookingCheck(String name,String email,String date,String time) {
        Bookings one=rpo.findByDateAndTime(date,time);
        if(one==null)
            return true;
        else
            return false;
    }

    public boolean bookingConfirm(String name, String email, String date, String time) {
        try{
             Bookings add=new Bookings(name,email,date,time);
        rpo.save(add);
        return true;
        }catch(Exception error)
        {
            return false;
        }
       
    }
}
