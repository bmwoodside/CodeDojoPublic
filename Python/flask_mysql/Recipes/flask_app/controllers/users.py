from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models.user import Users

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/register", methods=["POST"])
def register():
    if not Users.validate_registration(request.form):
        return redirect("/")
    hash = bcrypt.generate_password_hash(request.form['password'])
    user_data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email'],
        "password": hash
    }

    user_id = Users.save(user_data)
    session['user_id'] = user_id
    return redirect("/profile")

@app.route("/login", methods=["POST"])
def login():
    return redirect("/profile")

@app.route("/profile")
def profile():
    return render_template("profile.html")