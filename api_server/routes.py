from api_server.views import list_books, detail_books, add_books, remove_book, root, login, logout


_endpoints = [
    ('/', root, ['GET']),

    ('/api/books', list_books, ['GET']),
    ('/api/books', add_books, ['POST']),
    ('/api/books/<int:id>', remove_book, ['DELETE']),
    ('/api/books/<int:id>', detail_books, ['GET']),

    ('/login', login, ['GET']),
    ('/logout', logout, ['GET']),
]


def map_endpoints(app):
    for endpoint in _endpoints:
        route = endpoint[0]
        view = endpoint[1]
        verb = endpoint[2]
        app.add_url_rule(route, view.__name__, view, methods=verb)

