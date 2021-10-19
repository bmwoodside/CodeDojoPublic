from werkzeug.utils import redirect
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app
from flask import flash
import re

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
    def validate_registration(data):
        email_regex = r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$'

        is_valid = True
        if len(data['first_name']) < 2:
            flash("First Name must be 2 or more characters.")
            is_valid = False
        if len(data["last_name"]) < 2:
            flash("Last Name must be 2 or more characters.")
            is_valid = False
        if len(data['password']) < 8:
            flash("Password must be 8 or more characters.")
            is_valid = False
        if data['password'] != data['confirm_password']:
            flash("Passwords do not match.")
            is_valid = False
        if not (re.fullmatch(email_regex, data['email'])):
            flash("Please enter a valid email address.")
            is_valid = False
        return is_valid

    @classmethod
    def save(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s)"
        return connectToMySQL("recipesassignment").query_db(query, data)