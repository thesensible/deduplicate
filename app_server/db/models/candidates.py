from peewee import Model, DateField, DateTimeField, TextField, Case, JOIN
from app_server.db.db import crm_db
from app_server.db.models.match_results import MatchResult


class Candidate(Model):

    class Meta:
        database = crm_db
        table_name = "candidates"

    id = TextField()
    first_name = TextField()
    middle_name = TextField()
    last_name = TextField()
    dob = DateField()
    phone = TextField()
    email = TextField()
    address = TextField()
    city = TextField()
    state = TextField()
    zip = TextField()
    time_created = DateTimeField()
    time_deleted = DateTimeField()

    @classmethod
    def get_unique_candidates(cls, page, per_page=50):
        # TODO (fasih) FIX THIS!
        cte = (
            Candidate.select(
                Candidate.id,
                Case(None, [((MatchResult.duplicate_id is not None), True)], False)
            ).join(
                MatchResult,
                on=(Candidate.id == MatchResult.duplicate_id),
                join_type=JOIN.LEFT_OUTER
            ).cte('candidates_with_duplicate', columns=('id', 'is_duplicate'))
        )

        query = (
            Candidate
                .select()
                .join(cte, on=((Candidate.id == cte.c.id) & (cte.c.is_duplicate is False)))
                .with_cte(cte)
        )

        return query.paginate(page, per_page).execute()
