from peewee import Model, TextField, DoubleField

from app_server.db.db import crm_db


class MatchResult(Model):

    class Meta:
        database = crm_db
        table_name = "match_results"

    id = TextField()
    candidate_id_l = TextField()
    candidate_id_r = TextField()
    duplicate_id = TextField()
    match_probability = DoubleField()
    action = TextField()

    @classmethod
    def get_pending_matches(cls, page, per_page=10):
        query = (
            MatchResult.select().where(MatchResult.action.is_null())
        )

        return query.paginate(page, per_page).execute()

    @classmethod
    def get_count_pending_matches(cls):
        count = MatchResult.select().where(MatchResult.action.is_null()).count()
        return count

    @classmethod
    def get_completed_matches(cls, page, per_page=10):
        query = (
            MatchResult.select().where(MatchResult.action.is_null(False))
        )

        return query.paginate(page, per_page).execute()

    @classmethod
    def get_count_completed_matches(cls):
        count = MatchResult.select().where(MatchResult.action.is_null(False)).count()
        return count

    @classmethod
    def update_action(cls, match_id, action, duplicate_id):
        query = MatchResult.update(action=action, duplicate_id=duplicate_id).where(MatchResult.id == match_id)
        return query.execute()
