FROM node:12

WORKDIR /usr/src/app/

# copy package.json, and package-lock.json if exists
COPY package.json package-lock.json* ./

RUN npm install
RUN npm cache clean --force

COPY . . 

CMD [ "node", "index.js" ]