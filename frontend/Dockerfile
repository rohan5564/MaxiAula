FROM node:14.17.0-alpine3.12 as front

WORKDIR /front

COPY package*.json ./

RUN npm install --no-package-lock

COPY . .

# RUN npm run build

VOLUME /var/shared_volume

RUN ls -la

# RUN mv /front/dist/frontend-MaxiAula/* /var/shared_volume

# mantener el container corriendo
ENTRYPOINT [ "tail", "-f", "/dev/null" ]