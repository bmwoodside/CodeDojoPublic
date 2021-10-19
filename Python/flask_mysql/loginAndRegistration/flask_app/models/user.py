from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app
from flask import flash
import re

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

class Users:
    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.password = data["password"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @staticmethod
    def validate_register(user):
        email_regex = r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$'
        
        is_valid = True
        if len(user['first_name']) < 2:
            flash("First Name must be at least 2 characters.")
            is_valid = False
        if len(user['last_name']) < 2:
            flash("Last name must be at least 2 characters.")
            is_valid = False
        if len(user['password']) < 8:
            flash("Password must be at least 8 characters long.")
            is_valid = False
        if user['password'] != user['confirm_password']:
            flash("Passwords do not match. Please try again.")
            is_valid = False
        if not (re.fullmatch(email_regex, user['email'])):
            flash("Please enter a valid email address")
            is_valid = False
        # if Users.check_email_exists(user['email']):
        #     flash("Please use a unique email address")
        #     is_valid = False
        return is_valid
    
    @classmethod
    def save(cls, user):
        # bcrypt.generate_password_hash(user['password'])

        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s)"
        return connectToMySQL("login_registration").query_db(query, user)

    # @classmethod
    # def check_email_exists(cls, user_data):
    #     query = "SELECT email FROM users WHERE email = %(email)s"
    #     results = connectToMySQL("login_registration").query_db(query, user_data)
    #     if len(results) > 0:
    #         return True

    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s"
        result = connectToMySQL("login_registration").query_db(query, data)

        if len(result) < 1:
            return False
        return cls(result[0])