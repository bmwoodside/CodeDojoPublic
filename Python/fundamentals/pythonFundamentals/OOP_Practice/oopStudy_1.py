class User:

    bank_name = "First National Dojo"

    def __init__(self, name, email_address):
        self.name = name
        self.email = email_address
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount




guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")
#can reassign self.name for each individual
# guido.name = "Guido"
# monty.name = "Monty"
#access the instance's attributes
print(guido.name)
print(monty.name)

guido.bank_name = "Dojo Credit Union"
print(guido.bank_name)
print(monty.bank_name)

guido.make_deposit(100)
guido.make_deposit(200)
monty.make_deposit(50)
print(guido.account_balance)
print(monty.account_balance)