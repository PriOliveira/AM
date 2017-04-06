from api_server import books
import json
from flask import request, render_template, session, redirect, abort
import functools


def view_login(func):
    def wrapper(*args, **kwargs):
        print dict(session)
        if 'user' not in list(session.keys()):
            return redirect('/login')
        return func(*args, **kwargs)

    return functools.update_wrapper(wrapper, func)


def api_login(func):
    def wrapper(*args, **kwargs):
        if 'user' not in list(session.keys()):
            abort(403)
        return func(*args, **kwargs)

    return functools.update_wrapper(wrapper, func)


@view_login
def root():
    return render_template('/test.html', name=session['user']['name'])


def list_books():
    result = []

    for item in books:
        result.append({
            'id': item['id'],
            'originalTitle': item['originalTitle'],
            'author': item['author'],
        })

    return json.dumps(result)


@api_login
def detail_books(id):
    for item in books:
        if item['id'] == id:
            return json.dumps(item)

    error = {'error': 'not_found'}
    return json.dumps(error), 404


@api_login
def add_books():
    if not session['user']['admin']:
        error = {'error': 'invalid_permission'}
        return json.dumps(error), 403

    data = request.get_json()

    required_fields = ['id', 'originalTitle', 'author', 'price']

    for field in required_fields:
        if field not in data.keys():
            error = {'error': 'missing_field', 'field': field}
            return json.dumps(error), 400

    books.append(data)

    return json.dumps(data)


@api_login
def remove_book(id):
    if not session['user']['admin']:
        error = {'error': 'invalid_permission'}
        return json.dumps(error), 403

    for item in books:
        if item['id'] == id:
            books.remove(item)
            return '', 204

    error = {'error': 'not_found'}
    return json.dumps(error), 404


def login():
    is_admin = 'admin' in request.args.keys()

    if 'name' not in request.args.keys():
        return 'You shall not pass'

    session['user'] = {
        'admin': is_admin,
        'name': request.args.get('name') if 'name' in request.args.keys() else 'anonimo'
    }

    return redirect('/')


def logout():
    del session['user']
    return redirect('/login')
