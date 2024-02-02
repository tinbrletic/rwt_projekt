package com.example.RealEstate;

public class RegistrationData {
	private String username;
	private String password;
	private String mail;
	
	public RegistrationData() {
        // Default constructor required for JSON deserialization
    }

    public RegistrationData(String username, String password, String mail) {
        this.username = username;
        this.password = password;
        this.mail = mail;
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

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}
}
