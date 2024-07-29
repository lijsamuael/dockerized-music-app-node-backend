FROM node:18-slim
WORKDIR /usr/src/app

ENV PORT=5000

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5500

CMD ["npm","start-dev"]
