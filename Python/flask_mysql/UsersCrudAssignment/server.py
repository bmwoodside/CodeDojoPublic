from flask import Flask, redirect, render_template, request
from config.mysqlconnection import connectToMySQL

app = Flask(__name__)
secret_key = "Shhhhhhh"


class Users:
    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
    

    @classmethod
    def get_all_users(cls):
        query = "SELECT * FROM users"
        db_users = connectToMySQL("users_crud_assignment").query_db(query)
        usersList = []

        for user in db_users:
            usersList.append(cls(user))
        
        return usersList
    
    @classmethod
    def add_new_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email) VALUES (%(first_name)s, %(last_name)s, %(email)s)"
        return connectToMySQL("users_crud_assignment").query_db(query, data)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/read")
def read():
    all_users = Users.get_all_users()
    return render_template("read.html", all_users=all_users)

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







if __name__ == "__main__":
    app.run(debug=True)