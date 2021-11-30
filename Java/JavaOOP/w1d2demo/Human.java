



public class Human {

    // attributes

    private String name;
    private int age;

    private int health = 100;

    private int wisdom = 3;
    private int strength = 3;
    private int dexterity = 3;

    // constructors
    public Human() {}

    public Human(String name) {
        this.name = name;
    }

    public Human(String name, int age) {
        this.name = name;
        this.age = age;
    }


    // getters & setters
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