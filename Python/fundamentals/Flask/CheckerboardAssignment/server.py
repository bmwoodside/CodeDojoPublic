from flask import Flask, render_template, redirect

app = Flask(__name__)


@app.route("/")
def welcome(color1="red", color2="black"):
    color1 = color1
    color2 = color2
    # return render_template("index.html", color1, color2)
    return render_template("index.html")

@app.route("/<int:numberBlocks>")
def renderCheckerboard_someTimes(numberBlocks):
    return render_template("checkerboard1.html", numberBlocks=int(numberBlocks/2))










if __name__ == "__main__":
    app.run(debug=True)