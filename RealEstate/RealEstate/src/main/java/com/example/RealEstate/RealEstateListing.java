package com.example.RealEstate;

public class RealEstateListing {
    private String street;
    private int price;
    private int sqMeters;
    private int floors;
    private int numOfRooms;
    private int numOfBathrooms;
    private int yearOfConstruction;
    private int numOfResidents;
    private boolean hasParking;
    private String pictureUrl;
    
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public int getSqMeters() {
		return sqMeters;
	}
	public void setSqMeters(int sqMeters) {
		this.sqMeters = sqMeters;
	}
	public int getFloors() {
		return floors;
	}
	public void setFloors(int floors) {
		this.floors = floors;
	}
	public int getNumOfRooms() {
		return numOfRooms;
	}
	public void setNumOfRooms(int numOfRooms) {
		this.numOfRooms = numOfRooms;
	}
	public int getNumOfBathrooms() {
		return numOfBathrooms;
	}
	public void setNumOfBathrooms(int numOfBathrooms) {
		this.numOfBathrooms = numOfBathrooms;
	}
	public int getYearOfConstruction() {
		return yearOfConstruction;
	}
	public void setYearOfConstruction(int yearOfConstruction) {
		this.yearOfConstruction = yearOfConstruction;
	}
	public int getNumOfResidents() {
		return numOfResidents;
	}
	public void setNumOfResidents(int numOfResidents) {
		this.numOfResidents = numOfResidents;
	}
	public boolean isHasParking() {
		return hasParking;
	}
	public void setHasParking(boolean hasParking) {
		this.hasParking = hasParking;
	}
	public String getPictureUrl() {
		return pictureUrl;
	}
	public void setPictureUrl(String pictureUrl) {
		this.pictureUrl = pictureUrl;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
}
