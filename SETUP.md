# App Setup

## Setting up your development environment

### Python virtual environment (virtualenv)

For this project, we want to keep all packages separate from your personal
setup. To do that, we'll use [virtualenv](https://pypi.org/project/virtualenv/).

To install, we'll just use pip:

    pip install virtualenv

After that, we can create virtual environments! Navigate to the root directory
of the `STEM-CAPSTONE-2019` project and use:

    virtualenv --python=python3.7 .venv

This will create a new folder called `.venv` with all the necessary binary files
for Python to function. However, we're still not done, we need to activate it.

    source .venv/bin/activate

You should see an indicator in your shell with `(.venv)` if it worked! Now whenever
we install Python packages, they'll be added to that environment. We can easily jump
out whenever using:

    deactivate

### Installing project packages

All required packages can be found in a file called `requirements.txt` in the root
directory of the project. This makes it easy to install everything you need with
the following:

    pip install -r requirements.txt

If you need to add a package to the project for something you're working on, you can
update that list with:

    pip freeze > requirements.txt

### Django Secret Key

Django automatically adds a secret key variable for all sorts of security things.
It's a terrible idea to include that in version control. The best way to remove this
piece is to use an environment variable (currently called `STEM_SECRET_KEY`).

Unix Systems (MacOS/Linux)

    # bash
    echo 'export STEM_SECRET_KEY="SECRET KEY HERE"' >> ~/.bashrc
    source ~/.bashrc

    # zsh
    echo 'export STEM_SECRET_KEY="SECRET KEY HERE"' >> ~/.zshrc
    source ~/.zshrc

#### Generate a new secret key

The easiest way I've found to generate a secret key for your dev environment is to
run the following:

    python -c 'import random; result = "".join([random.choice("abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)") for i in range(50)]); print(result)'

Thankfully it's just a development environment so security isn't nearly as important so this
should do the trick for us.

### Postgres setup

For this project, we'll be using PostgreSQL as a backend database. We'll want to have this setup in your development environment as well.

#### Download and install

You'll want to downlaod and install PostgreSQL onto your system through their [site](https://www.postgresql.org/download/).

#### Create a new database

Launch the PostgreSQL manager (I do it though the `psql` command in my terminal) and create the database by:

    create database stem_ecosystem;

#### Create database admin user

Now that we have a database created, we'll want to create some credentials to connect with:

    create user stem_admin with encrypted password 'stemecosystem';
    grant all privileges on database stem_ecosystem to stem_admin;

We made the password `stemecosystem` in development since it's a local environment but this will be different in production.

#### Add PostgreSQL admin user to environment variable

We'll be using an environment variable called `STEM_PSQL_PASSWORD` so we'll want to add that as well:

Unix Systems (MacOS/Linux)

    # bash
    echo 'export STEM_PSQL_PASSWORD="stemecosystem"' >> ~/.bashrc
    source ~/.bashrc

    # zsh
    echo 'export STEM_PSQL_PASSWORD="stemecosystem"' >> ~/.zshrc
    source ~/.zshrc

#### Populate the database

If all the steps above worked, we can populate the database with our project tables! To do that we can use:

    python manage.py migrate

You should see Django do its thing and create the tables needed for the app.
