
public abstract class Mammal {

	private boolean sleeping = false;
	private boolean warmBlooded = true;
	private boolean hairy = true;
	
	public void startSleeping() {
		sleeping = true;
		System.out.println("ZzZz");
	}
	
	public boolean isSleeping() {
		return this.sleeping;
	}
	
	
}
