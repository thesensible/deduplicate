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