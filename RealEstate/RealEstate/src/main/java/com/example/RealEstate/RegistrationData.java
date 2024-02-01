package com.example.RealEstate;

public class RegistrationData {
	private String username;
	private String password;
	
	public RegistrationData() {
        // Default constructor required for JSON deserialization
    }

    public RegistrationData(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getters and setters

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
