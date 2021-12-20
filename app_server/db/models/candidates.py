from peewee import Model, DateField, DateTimeField, TextField
from app_server.db.db import crm_db


class Candidate(Model):

    class Meta:
        db = crm_db

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
