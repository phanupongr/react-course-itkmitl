FROM node:19.0.0-alpine3.16

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8000

CMD ["node", "app.js"]
