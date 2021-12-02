import java.util.ArrayList;

public class Human extends Mammal implements Movement {
	public void movesForward() {
		System.out.println("human fella walks forward.");
		
		
	}
	
	public void waves() {
		System.out.println("Human fella waves at friend... Oh no, it's a stranger. Act Natural!");
	}



//public class Human {

    // attributes

    private String name;
    private int age;

    private int health = 100;

    private int wisdom = 3;
    private int strength = 3;
    private int dexterity = 3;

    private static int allHumans = 0;

    // constructors
    public Human() {
        allHumans++;
    }

    public Human(String name) {
        this.name = name;
        allHumans++;
    }

    public Human(String name, int age) {
        this.name = name;
        this.age = age;
        allHumans++;
    }

    // instance methods
    public void eat() {
        System.out.println(this.name + " is eating an apple! om nom nom!");
        this.health += 5;
    }

    public void getPoisoned() {
        System.out.println(this.name + " is poisoned! Oh no!");
        this.health -= 3;
    }

    public void pastaAndCreamSauce() {
        System.out.println(this.name + " was fully regenerated!!");
        this.health = 100;
    }

    public void attack(Human attackee) {
        attackee.setHealth(attackee.getHealth() - this.strength);
    }

    // getters & setters
    public static int getAllHumans() {
        return allHumans;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }

    public int getHealth() {
        return health;
    }
    public void setHealth(int age) {
        this.health = health;
    }

    public int getStrength() {
        return strength;
    }
    public void setStrength(int age) {
        this.strength = strength;
    }

    public int getWisdom() {
        return wisdom;
    }
    public void setWisdom(int age) {
        this.wisdom = wisdom;
    }

    public int getDexterity() {
        return dexterity;
    }
    public void setDexterity(int age) {
        this.dexterity = dexterity;
    }





}