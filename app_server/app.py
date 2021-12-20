from flask import Flask
from flask_restful import Api

from app_server.api.resources.health_check import HealthCheck


app = Flask(__name__)
api = Api(app)

api.add_resource(HealthCheck, '/')

if __name__ == "__main__":
    app.run(debug=True)
