package com.qima.summary.controller;

import com.qima.summary.model.FactoryInspectionRecord;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/factory-inspection")
public class FactoryInspectionController {

    @GetMapping
    public FactoryInspectionRecord get(String orderId) {
        return new FactoryInspectionRecord();
    }
}
