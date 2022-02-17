from flask_app import app
from flask import render_template, session

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login")
def login():
    return render_template("login.html", user=session['username'])