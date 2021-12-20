from datetime import datetime, date


def stringify_date_field(d):
    for field in d:
        if isinstance(d[field], datetime) or isinstance(d[field], date):
            d[field] = d[field].isoformat()
    return d
