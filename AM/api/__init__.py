from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

# Allow Cross-Origin in the app
CORS(app)

app.secret_key = "Got a secret. Can you keep it? Swear this one you'll save. Better lock it in your pocket Taking " \
                 "this one to the grave. If I show you Then I know you won\'t tell what I said. " \
                 "Because two can keep a secret if one of them is dead."

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
