



public class BankAccountTest {
    public static void main(String[] args) {

        BankAccount newBankAccount = new BankAccount();

        BankAccount test1 = new BankAccount("Humpty Dumpty");

        test1.addCheckingBalance(5.25);
        test1.addSavingsBalance(1.75);

        test1.getTotalBalances();

        BankAccount test2 = new BankAccount("Your Mom");

        test2.addCheckingBalance(4.75);
        test2.addSavingsBalance(3.25);

        test2.getTotalBalances();


        System.out.println("# Accounts: " + BankAccount.getTotalAccountsCreated());
        System.out.println("Total Money: $" + BankAccount.getTotalAccountsMoney()); // $15
        
        System.out.println("Humpty Dumpty account Number: " + test1.getAccountNumber());






    }
}