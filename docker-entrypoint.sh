#!/bin/bash

# Setup database schema
python manage.py makemigrations
python manage.py migrate
python manage.py loaddata initial_data
exec "$@"
