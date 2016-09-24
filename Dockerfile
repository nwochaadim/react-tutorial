FROM node:latest

MAINTAINER Nwocha Adim

COPY . /var/www

WORKDIR /var/www

RUN npm install

EXPOSE 8080

ENTRYPOINT ["npm", "run", "dev-server"]
