FROM node:latest

RUN mkdir -p /etc/app

WORKDIR /etc/app

COPY package.json /etc/app/

RUN npm install

COPY . /etc/app/

EXPOSE 3000 443

CMD [ "node", "index.js" ]