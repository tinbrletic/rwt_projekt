package com.example.Projekt0;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // Replace with your React frontend URL
public class MyController {

    @GetMapping("/hey")
    public String getHey() {
        return "hey";
    }
}
