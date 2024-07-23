 # Make sure this container is run in the same network as server
 # The server container name has to be `demo-server`

ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine

ENV ENV=prod
ENV PORT=3000
ENV HOME=/home/customuser

RUN apk add shadow
RUN groupadd -r customgroup && useradd -r -g customgroup customuser
RUN mkdir -p $HOME && chown -R customuser:customgroup $HOME

WORKDIR $HOME/app

RUN chown -R customuser:customgroup ${HOME}/app

#USER customuser

#second optimization
COPY package*.json ./

RUN npm install

COPY . .
