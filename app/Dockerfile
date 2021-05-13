FROM node:latest

WORKDIR /etc/app

RUN npm i pm2 -g

COPY ./app/package.json /etc/app

RUN npm install

COPY ./app /etc/app

CMD [ "node", "index.js" ]