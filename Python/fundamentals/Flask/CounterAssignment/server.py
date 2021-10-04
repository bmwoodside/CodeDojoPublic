from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'somethingsuperspecialthatknowoneknowsabout'





@app.route("/")
def welcome():
    session["counter"] = request.form
    count = session["counter"] + 1
    return render_template("/index.html", count="countValue")


# @app.route("/countTimes")
# def countVisitTimes():
#     session["count"] = session["count"] + 1

    
    
#     return redirect("/")












if __name__ == "__main__":
    app.run(debug=True)