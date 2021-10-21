from werkzeug.utils import redirect
from flask_app.config.mysqlconnection import connectToMySQL

class Dojos:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    
    @classmethod
    def get_all_dojos(cls):
        query = "SELECT * from dojos"
        db_dojos = connectToMySQL("dojos_and_ninjas_schema").query_db(query)
        dojoList = []

        for dojo in db_dojos:
            dojoList.append(cls(dojo))
        
        return dojoList

    @classmethod
    def add_dojo(cls, data):
        query = "INSERT INTO dojos (name) VALUES (%(name)s)"
        return connectToMySQL("dojos_and_ninjas_schema").query_db(query, data)