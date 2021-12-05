package com.bmw.zookeeper;

public class Bat extends Mammal {

	public Bat(String name) {
		super(name);
		this.setEnergyLevel(300);
	}
	
	public void fly() {
		System.out.println("*flap* *woosh* *more flapping noises*");
		this.reduceEnergyLevel(50);
	}
	
	public void eatHumans() {
		this.increaseEnergyLevel(25);
	}
	
	public void attackTown() {
		System.out.println("*Town on fire sounds*...");
		this.reduceEnergyLevel(100);
	}
	
}
