from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def welcome():
    return render_template("index.html")

@app.route("/play")
def play_home():
    return render_template("play.html")

@app.route("/play/<int:numInput>")
def play_numTimes(numInput):
    return render_template("play2.html", numberTimes = numInput)

@app.route("/play/<int:numInput>/<string:color1>")
def play_numTimes_changeColor(numInput, color1):
    return render_template("play2.html", numberTimes = numInput, boxColor=color1)


if __name__ == "__main__":
    app.run(debug=True)