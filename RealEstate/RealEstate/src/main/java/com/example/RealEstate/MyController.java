package com.example.RealEstate;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping()
public class MyController {
	
    @Autowired
    private MongoTemplate mongoTemplate;
    
    @PostMapping("/register")
    public String register(@RequestBody RegistrationData registrationData) {
        User existingUser = mongoTemplate.findOne(
                Query.query(Criteria.where("username").is(registrationData.getUsername())),
                User.class, "users");

        if (existingUser != null) {
            return "Username already exists";
        }
    	
        // Hash the password before saving it
        String hashedPassword = hashData(registrationData.getPassword());

        // Create a User object with registration data
        User user = new User();
        user.setMail(registrationData.getMail());
        user.setUsername(registrationData.getUsername());
        user.setHashedPassword(hashedPassword);

        // Save the user data to the database
        mongoTemplate.save(user, "users");

        return "Registration successful";
    }
    
    @PostMapping("/login")
    public String login(@RequestBody LoginData loginData) {
        // Retrieve the user from the database based on the username
        User user = mongoTemplate.findOne(
                Query.query(Criteria.where("username").is(loginData.getUsername())),
                User.class, "users");

        // Check if the user exists and if the provided password is correct
        if (user != null && verifyPassword(loginData.getPassword(), user.getHashedPassword())) {
            return "Login successful";
        } else {
            return "Invalid credentials";
        }
    }
	
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
	
	@PostMapping("/create")
	public String createListing(@RequestBody RealEstateListing listing) {
	    mongoTemplate.save(listing, "listings");
	    return "Listing created successfully";
	}
	
    @GetMapping("/listings")
    public List<RealEstateListing> getAllListings() {
        return mongoTemplate.find(new Query(), RealEstateListing.class, "listings");
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
    
    private boolean verifyPassword(String inputPassword, String hashedPassword) {
        // Hash the input password and compare it with the stored hashed password
        String hashedInputPassword = hashData(inputPassword);
        return hashedInputPassword != null && hashedInputPassword.equals(hashedPassword);
    }
    
    
	
}
