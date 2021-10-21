from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.ninja import Ninjas
from flask_app.models.dojo import Dojos

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/ninjas")
def ninja_form():
    dojos = Dojos.get_all_dojos()
    return render_template("new_ninja.html", dojos=dojos)

@app.route("/add_ninja", methods=["post"])
def new_ninja():
    data = {
        "dojo_id": request.form['dojo_id'],
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "age": request.form['age']
    }
    Ninjas.create_ninja(data)
    return redirect("/dojos")