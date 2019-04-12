FROM nginx:1.14.2

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY stem-portal /var/www/stem-portal
