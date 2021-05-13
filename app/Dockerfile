FROM node:latest

RUN mkdir -p /etc/src/app

WORKDIR /etc/src/app

COPY package.json /etc/src/app

RUN npm i pm2 -g

RUN npm install

COPY index.js /etc/src/app

CMD [ "npm", "start" ]