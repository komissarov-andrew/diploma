FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY ./* ./

EXPOSE 80/tcp

ENTRYPOINT ["nginx", "-g", "daemon off;"]