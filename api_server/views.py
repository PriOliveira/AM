from api_server import books
import json
from flask import request, render_template


def root():
    render_template('/test.html')


def list_books():
    result = []

    for item in books:
        result.append({
            'id': item['id'],
            'name': item['name'],
        })

    return json.dumps(result)


def detail_books(id):
    for item in books:
        if item['id'] == id:
            return json.dumps(item)

    error = {'error': 'not_found'}
    return json.dumps(error), 404


def add_books():
    data = request.get_json()
    books.append(data)

    required_fields = ['id', 'name', 'price']

    for field in required_fields:
        if field not in data.keys():
            error = {'error': 'missing_field', 'field': field}
            return json.dumps(error), 400

    return json.dumps(data)