FROM node:18-slim
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5500

CMD ["npm","start"]
