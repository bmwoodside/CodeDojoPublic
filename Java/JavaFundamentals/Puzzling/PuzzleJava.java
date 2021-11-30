import java.util.Random;
import java.util.ArrayList;

public class PuzzleJava {

    public static void main(String[] args) {

        Random randMachine = new Random();

        public int getTenRolls() {
            ArrayList<int> rollsList = new ArrayList<int>();
            int i = 1;
            while (i < 11) {
                rollsList.add(randMachine.nextInt(1, 21));
                i++;
            }
            return rollsList;

        }













    }

}