from flask import Flask, render_template, session, redirect, request

app = Flask(__name__)
app.secret_key = "thisIsSoStupidToAddThisEveryTime"


@app.route("/")
def welcome():
    return render_template("index.html")

@app.route("/process", methods=["POST"])
def processFormData():
    print(request.form)
    session["name"] = request.form["name"]
    session["location"] = request.form["locationSelect"]
    session["language"] = request.form["languageSelect"]
    session["comment"] = request.form["commentSection"]
    return redirect("/results")


@app.route("/results")
def renderResults():
    resultsName=session["name"]
    resultsLocation=session["location"]
    resultsLanuage=session["language"]
    resultsComment=session["comment"]

    return render_template("/results.html", resultsName=resultsName, resultsLocation=resultsLocation, resultsLanuage=resultsLanuage, resultsComment=resultsComment)



if __name__ == "__main__":
    app.run(debug=True)