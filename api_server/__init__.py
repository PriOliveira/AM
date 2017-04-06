from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

books = [
    {'id': 1, 'name': 'Harry Potter', 'price': 12.50},
    {'id': 2, 'name': 'As Aventuras de JN', 'price': 0.1},
    {'id': 3, 'name': 'Jurassic Park', 'price': 200.00},
    {'id': 4, 'name': 'Percy Jackson', 'price': 40.00},
]