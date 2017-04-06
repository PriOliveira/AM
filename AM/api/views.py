from api import books
from flask import request, render_template, session, redirect, abort, url_for
import json
import functools

__all__ = [
    'root', 'login', 'signin', 'logout',
    'list_books', 'get_book', 'add_book', 'update_book', 'remove_book',
]

status_code = {
    'OK': 200,
    'NO_CONTENT': 204,
    'BAD_REQUEST': 400,
    'FORBIDDEN': 403,
    'NOT_FOUND': 404,
}


def view_login(func):
    def wrapper(*args, **kwargs):
        if 'user' not in list(session.keys()):
            return redirect('/login')
        return func(*args, **kwargs)

    return functools.update_wrapper(wrapper, func)


def api_login(func):
    def wrapper(*args, **kwargs):
        if 'user' not in list(session.keys()):
            return abort(status_code['FORBIDDEN'])
        return func(*args, **kwargs)

    return functools.update_wrapper(wrapper, func)


@view_login
def root():
    return render_template('/test.html', name=session['user']['username'])


def login():
    return render_template('/login.html')


def signin():
    is_admin = 'admin' in request.args.keys()

    if 'username' not in request.args.keys():
        return '<h1>You shall not pass</h1>'

    username = request.args.get('username')

    session['user'] = {
        'admin': is_admin,
        'username': username,
    }
    return redirect('/')


@view_login
def logout():
    del session['user']
    return redirect('/login')

######################
# BOOKS
######################


@view_login
def list_books():
    all_books = [{'id': book['id'], 'originalTitle': book['originalTitle'], 'author': book['author']} for book in books]
    return json.dumps(all_books), status_code['OK']


@api_login
def add_book():
    data = request.get_json()
    required_fields = ['id', 'originalTitle', 'author', 'price']

    for field in required_fields:
        if field not in data.keys():
            error = {'error': 'missing field', 'field': field}
            return error, status_code['BAD_REQUEST']

    books.push(data)
    return json.dumps(data), status_code['OK']


@api_login
def get_book(id):
    for book in books:
        if book['id'] == id:
            return json.dumps(book), status_code['OK']

    error = {'error': 'not_found'}
    return json.dumps(error), status_code['NOT_FOUND']


@api_login
def update_book(id):
    pass


@api_login
def remove_book(id):
    for book in books:
        if book['id'] == id:
            books.remove(book)
            return '', status_code['NO_CONTENT']

    error = {'error': 'not_found'}
    return json.dumps(error), status_code['NOT_FOUND']

######################
# MOVIES
######################
