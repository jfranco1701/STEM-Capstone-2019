# STEM Ecosystem - Django App

## Running tests

All tests are currently setup with the Django default as it inherits from `unittest` which is a widely used tool for testing Python projects. Our goal with this testing is to catch bugs before release so you know if something broke during development.

To run the test full test suite, you can use:

```
python manage.py test
```

_Note_: If you run into errors where Django can't create the database, you'll have to log into Postgres and run 

```
ALTER USER stem_admin CREATEDB;
```
