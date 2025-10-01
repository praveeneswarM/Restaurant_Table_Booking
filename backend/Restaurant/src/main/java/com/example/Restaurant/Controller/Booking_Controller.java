package com.example.Restaurant.Controller;

import com.example.Restaurant.Model.Bookings;
import com.example.Restaurant.Service.Booking_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class Booking_Controller {

    @Autowired
    Booking_Service src;

    @PostMapping("/booktable")
    public HttpStatus booking(@RequestParam String name,
                                  @RequestParam String email,
                                  @RequestParam String date,
                                  @RequestParam String time){
        boolean res = src.bookingCheck(name,email,date,time);
        if(res) {
            return HttpStatus.OK;
        }
        else {
            return HttpStatus.NOT_ACCEPTABLE;
        }
    }


    @PostMapping("/booktable-confirm")
    public HttpStatus bookingConfirm(@RequestParam String name,
                                  @RequestParam String email,
                                  @RequestParam String date,
                                  @RequestParam String time){
        boolean res = src.bookingConfirm(name,email,date,time);
        if(res) {
            return HttpStatus.OK;
        }
        else {
            return HttpStatus.NOT_ACCEPTABLE;
        }
    }
}
