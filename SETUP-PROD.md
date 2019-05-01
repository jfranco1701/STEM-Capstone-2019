# Setting up production

This guide will discuss setting up a production environment for this application.

## Install NodeJS

Download and install NodeJS from their [website](https://nodejs.org/en/). I recommend grabbing the closest version to the [frontend Dockerfile](./src/frontend/Dockerfile).

## Globally install some packages

There are a couple packages we'll need to install for Angular to play nice. These are available in the [frontend Dockerfile](./src/frontend/Dockerfile) as well but you'll need to run the following:

```
npm install -g @angular/cli@7.3.1
npm install -g node-sass
```

_Note_: The VM I was working with had a previous install that used `root` so I also had to run `npm -g config set user root` before both of the above lines to get everything to work right. I **DO NOT** recommend doing that on a public-facing server.

Now that we have those pieces installed, you should be able to run `ng --version` and get some output. If you do, then Angular is installed and we can move forward!

## Install application packages

Next, we'll want to install all packages required for the app. To that, we'll let `npm` do its thing.

```
cd src/frontend
npm install
```

That install might take some time but everything should install without too many issues.

## Build production static files

After all dependencies are installed, we can actually build the app! To do that, we can run:

```
cd src/frontend # If you're not already there
ng build --prod
```

That build command will package everything up for you based on the settings we have set in the production environment file. Once that wraps up, we can start the containers!

## Add environment variables

In this project, we used a couple environment variables to setup the Django secret key and the Postgres admin password. Create these couple variables before starting `docker-compose`:

### Django secret key

Unix Systems (MacOS/Linux)

    # bash
    echo 'export STEM_SECRET_KEY="SECRET KEY HERE"' >> ~/.bashrc
    source ~/.bashrc

    # zsh
    echo 'export STEM_SECRET_KEY="SECRET KEY HERE"' >> ~/.zshrc
    source ~/.zshrc

Windows Systems

    setx STEM_SECRET_KEY "SECRET KEY HERE"

_Note_: With Windows systems, you'll have to restart your shell but you can run `set` to get a list of available environment variables and it should be listed there.

### Postgres admin password

Unix Systems (MacOS/Linux)

    # bash
    echo 'export STEM_PSQL_PASSWORD="stemecosystem"' >> ~/.bashrc
    source ~/.bashrc

    # zsh
    echo 'export STEM_PSQL_PASSWORD="stemecosystem"' >> ~/.zshrc
    source ~/.zshrc

Windows Systems

    setx STEM_PSQL_PASSWORD "stemecosystem"

_Note_: With Windows systems, you'll have to restart your shell but you can run `set` to get a list of available environment variables and it should be listed there.

## Start docker-compose

If you're still sitting in the `src/frontend` directory, you'll want to go back to the root directory of the project with `../../`.  Once there, you can run the following to get the Docker containers up and running:

```
docker-compose -f docker-compose-prod.yml up -d
```

That command will gather everything you need for the application and spin up the containers to deliver the service. They will be ran in a `detached` state so you won't see any log output but you can get after the fact with:

```
docker-compose logs -f
```

## Navigate to the application

Now that our containers are up and running, we can navigate to the server URL to see our working app! Congratulations!
