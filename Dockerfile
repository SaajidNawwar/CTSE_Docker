FROM node:14-alpine
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 2000

CMD ["node","app.js"]