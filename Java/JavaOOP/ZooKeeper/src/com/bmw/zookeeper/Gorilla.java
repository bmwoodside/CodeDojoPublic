package com.bmw.zookeeper;

public class Gorilla extends Mammal {
	//constructor
	public Gorilla(String name) {
		super(name);
	}
	public Gorilla(String name, int energyLevel) {
		super(name, energyLevel);
	}
	
	public void throwSomething() {
		System.out.printf("%s threw something!", this.getName());
		this.reduceEnergyLevel(5);
	}
	
	public void eatBananas() {
		System.out.printf("%s ate a banana! MmMmMmmmmMmm! Om nom nom!", this.getName());
		this.increaseEnergyLevel(10);
	}
	
	public void climb() {
		System.out.printf("%s climbed a tree!", this.getName());
		this.reduceEnergyLevel(10);
	}
	
	
	
	
}
