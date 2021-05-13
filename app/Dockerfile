FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm i pm2 -g

RUN npm install

COPY ./app /usr/src/app

CMD [ "npm", "run", "start" ]