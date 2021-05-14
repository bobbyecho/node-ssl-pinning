FROM node:latest

RUN mkdir -p /etc/app

WORKDIR /etc/app

RUN npm i pm2 -g

COPY ./package.json /etc/app/

RUN npm install

COPY ./ /etc/app/

EXPOSE 3000

CMD [ "node", "index.js" ]