from api import app, routes

routes.set_routes()

# If the debug flag is set the server will automatically reload for code changes and show a debugger
# in case an exception happened.
app.run('127.0.0.1', port=2001, debug=True, threaded=True)
