from api.views import *
from api import app

endpoints = [
    ('/', root, ['GET']),
    ('/api/books', list_books, ['GET']),
    ('/api/books', add_book, ['POST']),
    ('/api/books/<int:id>', get_book, ['GET']),
    ('/api/books/<int:id>', update_book, ['PUT']),
    ('/api/books/<int:id>', remove_book, ['DELETE']),
    ('/login', login, ['GET']),
    ('/signin', signin, ['GET']),
    ('/logout', logout, ['GET']),
]


def set_routes():
    for endpoint in endpoints:
        rule = endpoint[0]
        view = endpoint[1]
        action = endpoint[2]

        app.add_url_rule(rule, view.__name__, view, methods=action)
