from flask_app.config.mysqlconnection import connectToMySQL


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
    def get_single_user(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s"
        single_user = connectToMySQL("users_crud_assignment").query_db(query, data)
        return cls(single_user[0])
    
    @classmethod
    def add_new_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email) VALUES (%(first_name)s, %(last_name)s, %(email)s)"
        return connectToMySQL("users_crud_assignment").query_db(query, data)
    
    @classmethod
    def update_user(cls, data):
        query = "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s WHERE id = %(id)s"
        return connectToMySQL("users_crud_assignment").query_db(query, data)
    
    @classmethod
    def delete_user(cls, data):
        query = "DELETE FROM users WHERE id = %(id)s"
        return connectToMySQL("users_crud_assignment").query_db(query, data)
