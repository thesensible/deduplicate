import os

from peewee import PostgresqlDatabase


def _get_port():
    return os.environ.get('POSTGRES_PORT', 5432)


crm_db = PostgresqlDatabase('crm', user='postgres', host='localhost',  port=_get_port(), password='my-secret-pw')
