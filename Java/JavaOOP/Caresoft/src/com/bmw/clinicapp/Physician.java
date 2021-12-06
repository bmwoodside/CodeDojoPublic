package com.bmw.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPAACompliantUser {

	public Physician(Integer id) {
		super(id);
	}
	
	public Physician(Integer id, int pin) {
		super(id, pin);
	}
	
	
	
	
	// implements interface junk
	public boolean assignPin(int pin) {
		String pinLength = String.valueOf(pin);
		if (pinLength.length() == 4) {
			this.setPin(pin);
			return true;
		}
		else {
			System.out.println("pin must be exactly 4 nums");
			return false;
		}
	}
	
	public boolean accessAuthorized(Integer confirmedAuthID) {
		if (confirmedAuthID == this.id) {
			return true;
		}
		return false;
	}
	
//... imports class definition...
    
    // Inside class:    
    private ArrayList<String> patientNotes;
	
    // TO DO: Constructor that takes an ID
    // TO DO: Implement HIPAACompliantUser!
	
    public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }

    // Setters & Getters    
    
	public ArrayList<String> getPatientNotes() {
		return patientNotes;
	}

	public void setPatientNotes(ArrayList<String> patientNotes) {
		this.patientNotes = patientNotes;
	}
	

    
    
}
