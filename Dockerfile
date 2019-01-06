# use Ubuntu 16.04 instead of node docker
# to mimic the production environment
FROM node:10.15.0-stretch

WORKDIR /usr/src/site

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]

