from flask import Flask, render_template

app = __name__

@app.route("/")
def welcome():
    return render_template("index.html")

@app.route("/play")
def play_home():
    return render_template("play.html")

@app.route("/play/x")
