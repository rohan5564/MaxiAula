FROM node:14.17.0-alpine3.12

WORKDIR /app-back

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT ["npm", "run", "dev"]
