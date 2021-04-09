FROM node:15.14.0-alpine3.13

WORKDIR /home/app

COPY package*.json ./

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "serve"]