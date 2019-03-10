FROM node:8.11

RUN mkdir -p /app/frontend
WORKDIR /app/frontend

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

COPY package.json /app/frontend/

# Install dependencies
## Globally install angular/cli and node-sass
RUN npm -g config set user root
RUN npm install -g @angular/cli@7.3.1
RUN npm install -g node-sass
RUN npm install

# Copy app code for caching benefits
COPY . /app/
