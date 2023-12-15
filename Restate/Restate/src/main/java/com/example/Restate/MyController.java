package com.example.Restate;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

@RestController
@RequestMapping()
public class MyController {
	
    @Autowired
    private MongoTemplate mongoTemplate;	
	
	@GetMapping("/greet")
	public String greet() {
		return "hey";
	}
	
	@PostMapping("/processData")
    public String processData(@RequestBody String requestBody) {
		String hashedData = hashData(requestBody);
		
		//spremam u mongo
        HashedData hashedDataObject = new HashedData();
        hashedDataObject.setHashedData(hashedData);
        mongoTemplate.save(hashedDataObject);
		
        return hashedData;
    }
	
    private String hashData(String data) {
        try {
            // Using SHA-256 for hashing
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hashBytes = md.digest(data.getBytes());

            // Convert the byte array to a hexadecimal representation
            StringBuilder hexStringBuilder = new StringBuilder();
            for (byte b : hashBytes) {
                hexStringBuilder.append(String.format("%02x", b));
            }

            return hexStringBuilder.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }
	
}
