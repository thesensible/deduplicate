from flask import request, abort
from flask_restful import Resource
from marshmallow import Schema, fields, validate
from playhouse.shortcuts import model_to_dict

from app_server.db.models.candidates import Candidate
from app_server.db.models.match_results import MatchResult
from app_server.utils.utils import stringify_date_field


class _GetPendingMatchesParams(Schema):
    page = fields.Int(required=True)


class GetCountPendingMatches(Resource):
    def __init__(self):
        super().__init__()

    def get(self):
        count = MatchResult.get_count_pending_matches()
        return {
            "pending_matches": count
        }


class GetPendingMatches(Resource):

    def __init__(self):
        super().__init__()
        self.params = _GetPendingMatchesParams()

    def get(self):
        errors = self.params.validate(request.args)

        if errors:
            abort(400, errors)

        params = self.params.load(request.args)

        pending_matches = MatchResult.get_pending_matches(params['page'])

        result = []

        for pending_match in pending_matches:
            match_id = pending_match.id
            match_probability = pending_match.match_probability
            candidate_l = Candidate.get(Candidate.id == pending_match.candidate_id_l)
            candidate_r = Candidate.get(Candidate.id == pending_match.candidate_id_r)

            result.append({
                'match_id': match_id,
                'match_probability': match_probability,
                'candidates': [
                    stringify_date_field(model_to_dict(candidate_l)),
                    stringify_date_field(model_to_dict(candidate_r))
                ]
            })

        return {"success": True, "pending_matches": result}, 200, {'Access-Control-Allow-Origin': "*"}


class _GetActionTakenParams(Schema):
    page = fields.Int(required=True)


class GetCountCompletedMatches(Resource):
    def __init__(self):
        super().__init__()

    def get(self):
        count = MatchResult.get_count_completed_matches()
        return {
            "success": True,
            "completed_matches": count
        }


class GetCompletedMatches(Resource):

    def __init__(self):
        super().__init__()
        self.params = _GetActionTakenParams()

    def get(self):
        errors = self.params.validate(request.args)

        if errors:
            abort(400, errors)

        params = self.params.load(request.args)

        completed_matches = MatchResult.get_completed_matches(params['page'])

        result = []

        for completed_match in completed_matches:
            match_id = completed_match.id
            match_probability = completed_match.match_probability
            candidate_l = Candidate.get(Candidate.id == completed_match.candidate_id_l)
            candidate_r = Candidate.get(Candidate.id == completed_match.candidate_id_r)
            result.append({
                'match_id': match_id,
                'match_probability': match_probability,
                'action': completed_match.action,
                'candidates': [
                    stringify_date_field(model_to_dict(candidate_l)),
                    stringify_date_field(model_to_dict(candidate_r))
                ]
            })

        return {
            "success": True,
            "completed_matches": result
        }


class _TakeActionParams(Schema):
    match_id = fields.Str(required=True)
    action = fields.Str(required=True, validate=validate.OneOf(["duplicate", "not_duplicate"]))
    duplicate_id = fields.Str()


class TakeAction(Resource):

    def __init__(self):
        super().__init__()
        self.params = _TakeActionParams()

    def post(self):
        errors = self.params.validate(request.get_json(force=True))

        if errors:
            abort(400, errors)

        params = self.params.load(request.get_json(force=True))

        result = MatchResult.update_action(
            match_id=params['match_id'],
            action=params['action'],
            duplicate_id=params.get('duplicate_id')
        )

        return {
            "success": True,
            "count": result
        }
