from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key="shhhh" # how do we obfuscate this?


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/vote", methods=["POST"])
def vote():
    session["name"] = request.form["name"]
    session["age"] = request.form["age"]
    session["movie"] = request.form["movie"]
    return redirect("/results")


@app.route("/results")
def results():
    return render_template("results.html", name=session["name"], age=session["age"], movie=session["movie"])






if __name__ == "__main__":
    app.run(debug=True)