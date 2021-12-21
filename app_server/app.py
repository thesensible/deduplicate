from flask import Flask
from flask_restful import Api

from app_server.api.resources.candidates import GetUniqueCandidates
from app_server.api.resources.health_check import HealthCheck
from app_server.api.resources.match_results import GetCountCompletedMatches, GetCountPendingMatches
from app_server.api.resources.match_results import GetPendingMatches, GetCompletedMatches

app = Flask(__name__)
api = Api(app)

api.add_resource(HealthCheck, '/')
api.add_resource(GetUniqueCandidates, '/candidates/unique')
api.add_resource(GetPendingMatches, '/matches/pending')
api.add_resource(GetCountPendingMatches, '/matches/pending/count')
api.add_resource(GetCompletedMatches, '/matches/completed')
api.add_resource(GetCountCompletedMatches, '/matches/completed/count')

if __name__ == "__main__":
    app.run(debug=True)
