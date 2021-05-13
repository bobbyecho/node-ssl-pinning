FROM node:latest

WORKDIR /etc/app

RUN npm i pm2 -g

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "pm2", "start", "index.js" ]