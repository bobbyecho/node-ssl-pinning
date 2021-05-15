FROM ubuntu:18.04

MAINTAINER Bobby Echo Prasetyo (bobbyechop@gmail.com)

# install nginx
RUN apt update -y \
    && apt install nginx vim -y \
    && apt-get install software-properties-common -y \
    && add-apt-repository ppa:certbot/certbot -y \
    && apt-get install python-certbot-nginx -y \
    && apt-get clean

ADD ./client_certs /etc/nginx/client_certs

ADD ./letsencrypt /etc/letsencrypt

ADD ./conf/default.conf /etc/nginx/conf.d

ADD ./conf/fingerinc-staging.conf /etc/nginx/sites-available/api.fingerinc.xyz

RUN ln -s /etc/nginx/sites-available/api.fingerinc.xyz /etc/nginx/sites-enabled/api.fingerinc.xyz

RUN rm -rf /etc/nginx/sites-enabled/default

# expose ports
EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]