from flask import Flask, redirect, render_template, request
from meme import Meme

app = Flask(__name__)



@app.route("/")
def index():
    memes = Meme.get_all_memes()
    return render_template("index.html", memes = memes)

@app.route("/insertmeme", methods=["POST"])
def insert_meme():
    data = {
        "name": request.form["name"],
        "meme_url": request.form["meme_url"]
    }
    
    Meme.insert_meme(data)
    return redirect("/")

@app.route("/edit/<int:id>")
def update_meme(id):
    data = {
        "id":id
    }
    meme = Meme.get_meme(data)
    return render_template("editmeme.html", meme=meme)

@app.route("/editmeme/<int:id>", methods=["POST"])
def update_meme_db(id):
    data = {
        "id":id,
        "name": request.form["name"],
        "meme_url": request.form["meme_url"]
    }
    Meme.update_meme(data)
    return redirect("/")


@app.route("/delete/<int:id>")
def delete(id):
    data = {
        "id":id
    }
    Meme.delete_meme(data)
    return redirect("/")










if __name__ == "__main__":
    app.run(debug=True)