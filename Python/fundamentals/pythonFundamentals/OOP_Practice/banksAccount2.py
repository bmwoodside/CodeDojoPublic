class BankAccount:

    def __init__(self, interest_rate = 0.01, account_balance = 0):
        self.interest_rate = interest_rate
        self.account_balance = account_balance

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
    
    def yield_interest(self):
        self.account_balance *= (1+self.interest_rate)
        return self
    

    @staticmethod
    def withdraw_allowed(balance, amount):
        if (balance - amount) < 0:
            return False
        else:
            return True


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(interest_rate=0.02, account_balance=0)

    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self

    def make_withdraw(self, amount):
        self.account.withdraw(amount)
        return self
    
    def display_user_balance(self):
        print(self.account.account_balance)

user1 = BankAccount(0.05, 0)
user2 = BankAccount(0.05, 50)

user1.deposit(100).deposit(25).deposit(100).withdraw(25).yield_interest().display_account_info()
user2.deposit(100).deposit(200).withdraw(30).withdraw(50).withdraw(5).withdraw(65).yield_interest().display_account_info()

user3 = User("dummy1", "no@zzz")

user3.make_deposit(200).make_withdraw(100)
user3.display_user_balance()