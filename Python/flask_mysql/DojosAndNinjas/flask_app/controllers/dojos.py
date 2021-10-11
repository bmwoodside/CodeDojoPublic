from flask_app import app
from flask import render_template, redirect
from flask_app.models.dojo import Dojos

@app.route("/dojo")
def dojo_page():
    display_dojos = Dojos.get_all_dojos()
    return render_template("dojo_page.html", display_dojos=display_dojos)