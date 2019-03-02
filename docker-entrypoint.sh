#!/bin/bash

# Setup database schema
python manage.py makemigrations
python manage.py migrate
exec "$@"
