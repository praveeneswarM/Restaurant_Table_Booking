package com.example.Restaurant.Repostitory;


import com.example.Restaurant.Model.Bookings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Booking_Repo extends JpaRepository<Bookings,Integer> {

    Bookings findByDateAndTime(String date,String time);

}
