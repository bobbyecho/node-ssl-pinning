FROM node:latest

WORKDIR /etc/app

RUN npm i pm2 -g

COPY package.json /etc/app

RUN npm install

COPY . /etc/app

CMD [ "node", "index.js" ]