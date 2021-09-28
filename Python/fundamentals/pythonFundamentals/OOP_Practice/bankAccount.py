class BankAccount:

    bank_funds_allAccounts = []

    def __init__(self, interest_rate = 0.01, starting_balance = 0):
        self.interest_rate = interest_rate
        self.account_balance = starting_balance
    

    def deposit(self, amount):
        self.account_balance += amount
        return self
    
    def withdraw(self, amount):
        if BankAccount.withdraw_allowed(self.account_balance, amount):
            self.account_balance -= amount
            return self
        else:
            print("Insufficient Funds: Charging a $5 fee")
            self.account_balance -= (amount + 5)
            return self

    def display_account_info(self):
        print(f"Balance: {self.account_balance}")
        return self
    
    def yield_interest(self):
        self.account_balance *= (1+self.interest_rate)
        return self

    @staticmethod
    def withdraw_allowed(balance, amount):
        if (balance - amount) < 0:
            return False
        else:
            return True

    @classmethod #this isn't working for some reason. it's late. more work tomorrow.
    def all_balances(cls):
        sum = 0
        for i in cls.bank_funds_allAccounts:
            sum += i.balance
        print(sum)
        return sum

test1 = BankAccount(0.05, 0)
test2 = BankAccount(0.05, 50)

test1.deposit(100).deposit(25).deposit(100).withdraw(25).yield_interest().display_account_info()
test2.deposit(100).deposit(200).withdraw(30).withdraw(50).withdraw(5).withdraw(65).yield_interest().display_account_info()

BankAccount.all_balances()
