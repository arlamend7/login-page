### STAGE 1: Build ###
FROM node:alphine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:alphine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/login-unico /usr/share/nginx/html