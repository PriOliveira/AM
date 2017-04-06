from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
app.secret_key = 'Carlinhos tem frescura com leite, tadinho :('

books = [
    {
        'id': 1,
        'originalTitle': 'Harry Potter and the Sorcerer\'s Stone',
        'author': 'J.K. Rowling',
        'price': 7.52
    },
    {
        'id': 3,
        'originalTitle': 'Harry Potter and the Prisoner of Azkaban',
        'author': 'J.K. Rowling',
        'price': 7.52
    },
    {
        'id': 7,
        'originalTitle': 'Harry Potter and the Deathly Hallows',
        'author': 'J.K. Rowling',
        'price': 7.52,
    },
]