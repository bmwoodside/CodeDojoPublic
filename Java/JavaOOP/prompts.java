//====================================================== 
/* 
In groups: The following are lines of code that could belong to a Shopping Cart class, but are out of order. Copy this code into a java file, then arrange the code to make a functional class.

In your groups, once you re-order the code, use your annotate tools to put a * next to any attributes, and a box around any methods. Then someone take a screen shot.
*/

public class ShoppingCart {

public ArrayList<String> items = new ArrayList<String>();
public String store;
public double total;

public void add_item(String item, double price){
    this.items.add(item)
    this.total += price;
    }

}