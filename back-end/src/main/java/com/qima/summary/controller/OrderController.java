package com.qima.summary.controller;


import com.qima.summary.model.Order;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
public class OrderController {


    @GetMapping
    public Order get(String orderId) {
        return new Order();
    }
}
