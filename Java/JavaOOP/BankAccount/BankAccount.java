import java.util.Random;

public class BankAccount {

    // attributes
    private String name;
    private double checkingBalance;
    private double savingsBalance;
    private int accountNumber;

    // static methods
    private static int totalAccountsCreated = 0;
    private static double totalAccountsMoney = 0;

    private int randomAccountNumber() {
        Random rando = new Random();
        int number = rando.nextInt(999999999);
        return number;
    }

    // constructors
    public BankAccount() {
        totalAccountsCreated++;
        this.accountNumber = randomAccountNumber();
    };

    public BankAccount(String name) {
        this.name = name;
        this.accountNumber = randomAccountNumber();
        totalAccountsCreated++;
    }

    public BankAccount(String name, double amount) {
        this.name = name;
        this.checkingBalance = amount;
        totalAccountsMoney += amount;
        totalAccountsCreated++;
    }


    // getters & setters
    public static int getTotalAccountsCreated() {
        return totalAccountsCreated;
    }
    public static double getTotalAccountsMoney() {
        return totalAccountsMoney;
    }

    public int getAccountNumber() {
        System.out.println("Account Number: " + this.accountNumber);
        return this.accountNumber;
    }

    public double getCheckingBalance() {
        System.out.println("Checking Balance: $" + this.checkingBalance);
        return this.checkingBalance;
    }
    public void addCheckingBalance(double amount) {
        this.checkingBalance += amount;
        totalAccountsMoney += amount;
        System.out.println("Deposited $" + amount + ". " + this.getCheckingBalance());
    }
    public void withdrawCheckingBalance(double amount) {
        if (this.getCheckingBalance() < amount) {
            System.out.println("Insufficient Funds");
        }
        else {
            this.checkingBalance -= amount;
            totalAccountsMoney -= amount;
            System.out.println("Withdrew $" + amount + ". " + this.getCheckingBalance());
        }
    }

    public double getSavingsBalance() {
        System.out.println("Savings Balance: $" + this.savingsBalance);
        return this.savingsBalance;
    }
    public void addSavingsBalance(double amount) {
        this.savingsBalance += amount;
        totalAccountsMoney += amount;
    }
    public void withdrawSavingsBalance(double amount) {
        if (this.getSavingsBalance() < amount) {
            System.out.println("Insufficient Funds");
        }
        else {
            this.savingsBalance -= amount;
            totalAccountsMoney -= amount;
            System.out.println("Withdrew $" + amount + ". " + this.getSavingsBalance());
        }
    }

    public void getTotalBalances() {
        System.out.println("Total Balances: $" + (this.savingsBalance + this.checkingBalance));
    }


}