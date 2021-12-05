package com.bmw.zookeeper;

public class Mammal {
	// member variables
	private String name;
	private int energyLevel = 100;
	
	
	// constructors
	public Mammal(String name) {
		this.name = name;
	}
	
	public Mammal(String name, int energy) {
		this.name = name;
		this.energyLevel = energy;
	}
	
	
	
	// methods
	public int displayEnergy(String name) {
		
		System.out.printf("%s energy level is " + this.getEnergyLevel(), name);
		return this.getEnergyLevel();
	} 
	
	
	//getters and setters
	public String getName() {
		return this.name;
	}
	
	public int getEnergyLevel() {
		return this.energyLevel;
	}
	public int setEnergyLevel(int energy) {
		this.energyLevel = energy;
		return this.energyLevel;
	}
	public int increaseEnergyLevel(int increaser) {
		this.energyLevel += increaser;
		return this.energyLevel;
	}
	public int reduceEnergyLevel(int reducer) {
		this.energyLevel -= reducer;
		return this.energyLevel;
	}
	
	

}
