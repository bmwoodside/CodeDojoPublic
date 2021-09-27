num1 = 42 # variable delcaration
num2 = 2.3 # variable delcaration
boolean = True # Boolean declaration
string = 'Hello World' # variable delcaration
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] # variable delcaration for list data type
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # variable delcaration for dictionary
fruit = ('blueberry', 'strawberry', 'banana') # variable delcaration for tuple
print(type(fruit)) # type check
print(pizza_toppings[1]) # access list value
pizza_toppings.append('Mushrooms') # add list value
print(person['name']) # access dictionary value
person['name'] = 'George' # update dictionary value
person['eye_color'] = 'blue' # add dictionary value
print(fruit[2]) # log tuple value

if num1 > 45: # conditional if statement
    print("It's greater") # log statement
else: # conditional else statement
    print("It's lower") # log statement

if len(string) < 5: # if statement
    print("It's a short word!") # log statement
elif len(string) > 15: #conditional else-if statement
    print("It's a long word!") #log statement
else: # else statement
    print("Just right!") #log statement

for x in range(5): # for loop
    print(x) # log statement
for x in range(2,5): # for loop
    print(x) # log statement
for x in range(2,10,3): # for loop
    print(x) #log statement
x = 0 # variable declaration
while(x < 5): # while loop
    print(x) # log statement 
    x += 1 # increment value in while statement

pizza_toppings.pop() # list delete value
pizza_toppings.pop(1) #list delete value

print(person) # log statement
person.pop('eye_color') #dictionary delete value
print(person) # log dictionary

for topping in pizza_toppings: # for loop
    if topping == 'Pepperoni': # if statement
        continue # do nothing, continue
    print('After 1st if statement') # runs until exit (outside the "if" statement)
    if topping == 'Olives': # if statement
        break # break - stop running if condition met.

def print_hello_ten_times(): # define function
    for num in range(10): # for loop
        print('Hello') # log statement

print_hello_ten_times() # call function, log statement 10 times

def print_hello_x_times(x): #define function
    for num in range(x): # for loop
        print('Hello') #log statement

print_hello_x_times(4) #call function, log statement 4 times

def print_hello_x_or_ten_times(x = 10): #define function
    for num in range(x): #for loop
        print('Hello') #log statement

print_hello_x_or_ten_times() # logs hello 10 times
print_hello_x_or_ten_times(4) # logs hello 4 times


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)