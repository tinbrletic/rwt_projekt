package com.example.Projekt0;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping()
public class MyController {
	
	@GetMapping("/greet")
	public String greet() {
		return "hey";
	}
	
	@PostMapping("/processData")
    public String processData(@RequestBody String requestBody) {
        return requestBody;
    }
}
