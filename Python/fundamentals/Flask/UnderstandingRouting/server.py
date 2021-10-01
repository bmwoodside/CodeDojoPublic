from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def welcome():
    return "Hello World!"

@app.route("/dojo")
def welcomeDojo():
    return "Dojo!"

@app.route("/say/<hello>")
def sayHi(hello):
    return f"Hi {hello.capitalize()}!"

@app.route("/repeat/<int:numTimes>/<str:someText>")
def repeatWord_multiple_times(numTimes, someText):
    return someText * numTimes







if __name__ == "__main__":
    app.run(debug=True)