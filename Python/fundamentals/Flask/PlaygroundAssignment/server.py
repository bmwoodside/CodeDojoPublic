from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def welcome():
    return render_template("index.html")

@app.route("/play")
def play_home():
    return render_template("play.html")

@app.route("/play/<int:num>")
def play_numTimes(num):
    return render_template("play2.html")



if __name__ == "__main__":
    app.run(debug=True)