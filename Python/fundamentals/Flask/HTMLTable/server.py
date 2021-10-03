from flask import Flask, render_template, redirect

app = Flask(__name__)


# users = [
#     {'first_name' : 'Michael', 'last_name' : 'Choi'},
#     {'first_name' : 'John', 'last_name' : 'Supsupin'},
#     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#     {'first_name' : 'KB', 'last_name' : 'Tonel'}
# ]

@app.route("/")
def welcome():
    return render_template("index.html")


@app.route("/names")
def listNames():
    users = [
    {'first_name' : 'Michael', 'last_name' : 'Choi'},
    {'first_name' : 'John', 'last_name' : 'Supsupin'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

    return render_template("render.html", listUsers=users)





if __name__ == "__main__":
    app.run(debug=True)