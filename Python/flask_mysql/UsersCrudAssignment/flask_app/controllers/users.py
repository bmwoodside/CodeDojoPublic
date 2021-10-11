from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.user import Users


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/read")
def read():
    all_users = Users.get_all_users()
    return render_template("read.html", all_users=all_users)

@app.route("/showOne/<int:id>")
def display_single_user(id):
    data = {
        "id": id
    }
    single_user = Users.get_single_user(data)
    return render_template("readone.html", single_user=single_user)

@app.route("/editUser/<int:id>")
def edit_single_user(id):
    data = {
        "id": id
    }
    single_user = Users.get_single_user(data)
    return render_template("editUser.html", single_user=single_user)

@app.route("/changeUserInfo", methods=["POST"])
def update_user():
    data = {
        "id": request.form["id"],
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"]
    }

    Users.update_user(data)
    return redirect("/showOne/" + str(data['id']))

@app.route("/create_form")
def create_form():
    return render_template("create.html")

@app.route("/addUser", methods=["POST"])
def add_new_user():
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"]
    }

    Users.add_new_user(data)
    return redirect("/read")

@app.route("/deleteUser/<int:id>")
def delete_user(id):
    data = {
        "id": id
    }
    Users.delete_user(data)
    return redirect("/read")

