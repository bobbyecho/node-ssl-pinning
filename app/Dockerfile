FROM node:latest

WORKDIR /etc/app

COPY package.json /

RUN npm i pm2 -g

RUN npm install

COPY . /

CMD [ "npm", "start" ]