class User:

    def __init__(self, first_name, last_name):
        self.full_name = first_name + " " + last_name
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(f"{self.full_name}'s current balance is: ${self.account_balance}")
        return self

    def transfer_money(self, other_user, amount):
        if other_user:
            self.make_withdrawal(amount)
            other_user.make_deposit(amount)





guido = User("Guido", "van Rossum")
test = User("test", "tester")
user3 = User("why", "3 people?")

guido.make_deposit(50).make_deposit(100).make_deposit(75).make_withdrawal(25).display_user_balance()

test.make_deposit(50).make_deposit(100).make_withdrawal(25).make_withdrawal(75).display_user_balance()

user3.make_deposit(50).make_withdrawal(100).make_withdrawal(25).make_withdrawal(50).display_user_balance()


guido.transfer_money(test, 100)

guido.display_user_balance()
test.display_user_balance()