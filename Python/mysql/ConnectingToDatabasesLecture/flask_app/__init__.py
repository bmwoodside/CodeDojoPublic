from flask import Flask, redirect, render_template, request


app = Flask(__name__)
app.secret_key = "iHateWritingThis"
