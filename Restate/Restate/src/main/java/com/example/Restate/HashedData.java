package com.example.Restate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "hashedDataCollection")
public class HashedData {
	
    @Id
    private String id;
    private String hashedData;

    // Constructors, getters, setters (required by MongoDB)

    public HashedData() {
        // Default constructor required by MongoDB
    }

    public HashedData(String hashedData) {
        this.hashedData = hashedData;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getHashedData() {
        return hashedData;
    }

    public void setHashedData(String hashedData) {
        this.hashedData = hashedData;
    }
    
}
