package com.bmw.zookeeper;

public class BatTest {

	public static void main(String[] args) {
		Bat testBat = new Bat("testBatName");
		
		testBat.attackTown();
		testBat.attackTown();
		testBat.attackTown();
		
		testBat.eatHumans();
		testBat.eatHumans();
		
		testBat.fly();
		testBat.fly();
		
		System.out.println(testBat.getEnergyLevel());

	}

}
