import java.util.ArrayList;
import java.util.Random;





public class TestPuzzleJava {

    Random randMachine = new Random();


    public ArrayList getTenRolls() {
        ArrayList<Integer> rollsList = new ArrayList<Integer>();
        int i = 1;
        while (i < 11) {
            // rollsList.add(randMachine.nextInt(1, 21));
            i++;
        }
        return rollsList;
    }











}