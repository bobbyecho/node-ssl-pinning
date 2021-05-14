FROM ubuntu:latest

MAINTAINER Bobby Echo Prasetyo (erangaeb@gmail.com)

# install nginx
RUN apt-get update -y
RUN apt-get install -y software-properties-common
RUN add-apt-repository -y ppa:nginx/stable
RUN apt-get update -y
RUN apt-get install -y nginx

# install certbot
RUN add-apt-repository ppa:certbot/certbot
RUN apt-get update -y
RUN apt-get install -y certbot python-certbot-nginx

# deamon mode off
RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf
RUN chown -R www-data:www-data /var/lib/nginx

# expose ports
EXPOSE 80 443

# add nginx staging conf
ADD conf/fingerinc.conf /etc/nginx/sites-available/fingerinc.xyz

# create symlinks
RUN ln -s /etc/nginx/sites-available/fingerinc.xyz /etc/nginx/sites-enabled/climguards

# work dir
WORKDIR /etc/nginx

# add entrypoing
ADD docker-entrypoint.sh .

# make certs dir as volume
VOLUME ["/etc/letsencrypt"]

CMD ["/etc/nginx/docker-entrypoint.sh"]