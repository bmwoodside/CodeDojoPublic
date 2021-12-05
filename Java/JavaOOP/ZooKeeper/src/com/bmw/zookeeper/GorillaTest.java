package com.bmw.zookeeper;

public class GorillaTest {

	public static void main(String[] args) {
		Gorilla testGorilla = new Gorilla("GorillaName1");
		
		testGorilla.throwSomething();
		testGorilla.throwSomething();
		testGorilla.throwSomething();
		
		testGorilla.eatBananas();
		testGorilla.eatBananas();
		
		testGorilla.climb();
		
		System.out.println(testGorilla.getEnergyLevel());
		

	}

}
