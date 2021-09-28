#1 - Update Values in Dictionaries and Lists

x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

#1.1 (intentionally did extra work here instead of just replacing value)
for i in x:
    if len(i) > 1:
        for j in range(len(i)):
            if i[j] == 10:
                i[j] = 15
print(x)


#1.2 (intentionally did extra work here with the loop)
for i in students:
    if i["last_name"] == "Jordan":
        i["last_name"] = "Bryant"
print(students)

#1.3
sports_directory['soccer'][0] = "Andres"
print(sports_directory['soccer'])

#1.4
z[0]['y'] = 30
print(z)

#2
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

def iterateDictionary(some_list):
    for i in some_list:
        print(i)

iterateDictionary(students)

#3
def iterateDictionary2(key_name, some_list):
    for i in some_list:
        print(i[key_name])

iterateDictionary2('first_name', students)
iterateDictionary2('last_name', students)

#4
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printInfo(some_dict):
    #print "length of key" and "key_name"
    for i in some_dict:
        print(len(some_dict[i]), i)
        #iterate print values of each list
        for j in some_dict[i]:
            print(j)
        print("-----")

printInfo(dojo)