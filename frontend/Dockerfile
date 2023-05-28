FROM node:lts-alpine as build

ARG API_BASE_URL
ENV API_BASE_URL=$API_BASE_URL
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . /app
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/.nginx/ssl-options.conf /etc/nginx/conf.d/ssl-options.conf
COPY --from=build /app/.nginx/certs /etc/letsencrypt

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
