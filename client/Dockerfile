FROM node:14

WORKDIR /usr/src/app

RUN apt-get update -y
RUN apt-get install nginx -y

COPY package*.json ./

RUN npm install

COPY ./build ./build
COPY ./default ./default
COPY ./public ./public

RUN mv ./build/* /var/www/html
RUN mv ./default /etc/nginx/sites-available/default

RUN echo "sed -i \"s/backendhost/\$BACKENDHOST/g\" /etc/nginx/sites-available/default && nginx -g \"daemon off;\"" > launch.sh
RUN chmod 777 launch.sh

EXPOSE 80
CMD ["./launch.sh"]
