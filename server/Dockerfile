FROM node:16-alpine

WORKDIR /app

COPY ./db /app/db
COPY ./routes /app/routes
COPY ./package.json /app
COPY ./package-lock.json /app
COPY ./index.mjs /app
COPY ./loadEnvironment.mjs /app

RUN npm install

CMD ["node", "index.mjs"]
