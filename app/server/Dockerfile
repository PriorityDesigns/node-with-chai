FROM node:latest

COPY package.json /data/
WORKDIR /data/
RUN npm install
ENV PATH /data/node_modules/.bin:$PATH

COPY . /data/app/
WORKDIR /data/app/

RUN npm install -g nodemon && npm install
CMD ["nodemon", "app.js"]
