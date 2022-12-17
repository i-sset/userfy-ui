FROM node:16.8-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install 

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]