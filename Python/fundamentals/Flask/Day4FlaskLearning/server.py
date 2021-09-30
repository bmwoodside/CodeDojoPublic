from flask import Flask, render_template
import facts
app = Flask(__name__)

@app.route("/")
def welcome():
    return render_template("index.html")

@app.route("/monsters/<monster>")
# def monster_page(monster):
#     return render_template("monster.html", monster_name=monster.capitalize(), facts = f"{facts}.{monster}_facts")
def monster_page(monster):
    if monster == "dracula":
        return render_template("monster.html", monster_name=monster.capitalize(), facts = facts.dracula_facts)
    if monster == "mummy":
        return render_template("monster.html", monster_name=monster.capitalize(), facts = facts.mummy_facts)
    if monster == "frankenstein":
        return render_template("monster.html", monster_name=monster.capitalize(), facts = facts.frankenstein_facts)






if __name__ == "__main__":
    app.run(debug=True)