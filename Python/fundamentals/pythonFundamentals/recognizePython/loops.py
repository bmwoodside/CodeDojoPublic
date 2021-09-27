#basic
for i in range(151):
    print(i)

#multiples of five
for i in range(5,1001, 5):
    print(i)

#counting the dojo way (extra code... was expecting full fizzbuzz)
num1 = 5
num2 = 10

for i in range(1, 101):
    if i % num2 == 0:
        print("Coding Dojo")
    elif i % num1 == 0:
        print("Coding")
    else:
        print(i)


#Whoa. That Sucker's Huge
sum = 0

for i in range(500001):
    if i % 2 == 1:
        sum += i
print(sum)

#Countdown by Fours
for i in range(2018, 0, -4):
    print(i)


#Flexible Counter
lownum = 3
highnum = 15000
mult = 18

for i in range(lownum, highnum+1):
    if i % mult == 0:
        print(i)