package com.bmw.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {

	
//... imports class definition...
    
    public AdminUser(Integer id, int pin) {
		super(id, pin);
		// TODO Auto-generated constructor stub
	}
	public AdminUser(Integer id) {
		super(id);
		// TODO Auto-generated constructor stub
	}
	
	public AdminUser(Integer id, String role) {
		super(id);
		this.role = role;
	}
	
	
    private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents = new ArrayList<String>();
    
    
    public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        securityIncidents.add(report);
    }
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }
    
    
    
    // implementing interface junk
    public boolean assignPin(int pin) {
		String pinLength = String.valueOf(pin);
		if (pinLength.length() == 6) {
			this.setPin(pin);
			return true;
		}
		else {
			System.out.println("pin must be exactly 6 nums");
			return false;
		}
	}
    
    public boolean accessAuthorized(Integer confirmedAuthID) {
		if (confirmedAuthID == this.id) {
			return true;
		}
		else {
			this.authIncident();
			return false;
		}
		
	}
    
    public ArrayList<String> reportSecurityIncidents() {
    	return this.getSecurityIncidents();
    }
    
    
    

    // Setters & Getters
    
	public Integer getEmployeeID() {
		return employeeID;
	}
	public void setEmployeeID(Integer employeeID) {
		this.employeeID = employeeID;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public ArrayList<String> getSecurityIncidents() {
		return securityIncidents;
	}
	public void setSecurityIncidents(ArrayList<String> securityIncidents) {
		this.securityIncidents = securityIncidents;
	}
    
    
}