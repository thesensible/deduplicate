from flask import request, abort
from flask_restful import Resource
from marshmallow import Schema, fields
from playhouse.shortcuts import model_to_dict

from app_server.db.models.candidates import Candidate
from app_server.utils.utils import stringify_date_field


class _GetUniqueCandidatesParams(Schema):
    page = fields.Int(required=True)


class GetUniqueCandidates(Resource):

    def __init__(self):
        super().__init__()
        self.params = _GetUniqueCandidatesParams()

    def get(self):
        errors = self.params.validate(request.args)

        if errors:
            abort(400, errors)

        params = self.params.load(request.args)

        candidates = Candidate.get_unique_candidates(params['page'])

        return {
            "success": True,
            "candidates": [
                stringify_date_field(model_to_dict(candidate))
                for candidate in candidates
            ]
        }
