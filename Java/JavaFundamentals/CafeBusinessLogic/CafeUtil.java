import java.util.ArrayList;

public class CafeUtil {

    public int getStreakGoal() {
        int numWeeks = 10; 
        int sum = 0;

        for (int i=1; i <= numWeeks; i++) {
            sum += i;
        }
        
        return sum; // 10+9+8+7+6+5+4+3+2+1 = 55
    }

    public double getOrderTotal(double[] prices) {   // {3.5, 1.5, 4.0, 4.5}
        double sumPrices = 0;

        for (int i = 0; i < prices.length; i++) {
            sumPrices += prices[i];
        }
        return sumPrices; // prices = 13.5
    }

    public void displayMenu(ArrayList<String> menuItems) {
        for (int i = 0; i < menuItems.size(); i++) {
            System.out.printf(i + " " + menuItems.get(i) + '\n');
        }
    }

    public void addCustomer(ArrayList<String> customerList) {
        int numPersons = 0;
        ArrayList<String> newList = customerList; // probably don't need

        System.out.println("Please enter your name: ");
        String userName = System.console().readLine();
        System.out.println("Hello, " + userName + "!");
        System.out.println("There are " + numPersons + " people in front of you");

        customerList.add(userName);
        System.out.println(customerList);

    }

}






