from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.dojo import Dojos

@app.route("/dojos")
def dojo_page():
    display_dojos = Dojos.get_all_dojos()
    return render_template("dojos_page.html", display_dojos=display_dojos)

@app.route("/add_dojo", methods=["POST"])
def add_dojo():
    data = {
        "name": request.form["name"]
    }
    Dojos.add_dojo(data)
    return redirect("/dojos")

@app.route("/dojos/<int:id>")
def display_dojo():
    return render_template("dojo_page.html")