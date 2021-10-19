from flask.helpers import flash
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
    if not Users.validate_register(request.form):
        print()
        return redirect("/")
    hash = bcrypt.generate_password_hash(request.form['password'])
    user_data = {
        "first_name" : request.form["first_name"],
        "last_name" : request.form["last_name"],
        "email" : request.form["email"],
        "password" : hash
    }

    user_id = Users.save(user_data)
    session['user_id'] = user_id
    return redirect("/users")

@app.route("/users")
def display_users():
    if "user_id" not in session:
        flash("You Must Be Logged In To View This Page")
        return redirect("/")
    return render_template("user.html")

@app.route("/login", methods=["POST"])
def login():
    data = {
        "email": request.form["loginEmail"]
    }
    user_in_db = Users.get_by_email(data)

    if not user_in_db:
        flash("Invalid Email/Password")
        return redirect("/")
    if not bcrypt.check_password_hash(user_in_db.password, request.form['loginPassword']):
        flash("Invalid Email/Password")
        return redirect("/")
    
    session['user_id'] = user_in_db.id
    return redirect("/users")

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")