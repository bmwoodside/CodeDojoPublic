#Countdown
def countdown(num):
    newList = []
    for i in range(num, -1, -1):
        newList.append(i)
    return newList

countdown(5)

#Print and Return
def printAndReturn(someList):
    print(someList[0])
    return [someList[1]]

printAndReturn([1,2])

#First Plus Length
def firstPlusLength(someList):
    return someList[0] + len(someList)

firstPlusLength([1,2,3,4,5])

#Values Greater than Second
def valueGreaterThanSecond(someList):
    newList = []
    for i in someList:
        if i > someList[1]:
            newList.append(i)
    if len(newList) < 2:
        return False
    else:
        print(len(newList))
        return newList

valueGreaterThanSecond([5,2,3,2,1,4])

#This Length, That Value
def length_and_value(a,b):
    newList = []
    for i in range(a):
        newList.append(b)
    return newList

length_and_value(4,7)