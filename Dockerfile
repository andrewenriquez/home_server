# FROM node:12.18-alpine
# ENV NODE_ENV production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# EXPOSE 4000
# CMD ["npm", "start"]

FROM node:12.4.0-alpine as debug

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
RUN npm install -g nodemon

COPY . /usr/scr/app

ENTRYPOINT [ "nodemon","--inspect=0.0.0.0","./bin/www" ]

FROM node:12.4.0-alpine as prod

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . /usr/src/app
# test test
CMD ["npm", "start"]