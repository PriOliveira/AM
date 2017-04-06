from api_server import app, routes

routes.map_endpoints(app)
app.run('0.0.0.0', port=2001, debug=True, threaded=True)

