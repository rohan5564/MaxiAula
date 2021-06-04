FROM node:14.17.0-alpine3.12 as front

WORKDIR /app-front

COPY package*.json ./

RUN npm install --no-package-lock

COPY . .

RUN npm run build
# ENTRYPOINT [ "npm", "start" ]

FROM nginx:1.21.0-alpine

COPY from=front /app-front/dist/frontend-MaxiAula /usr/share/nginx/html/

COPY ../nginx/nginx.conf /etc/nginx/nginx.conf