FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install pm2@latest -g

COPY ./server .
RUN echo "pm2 start server.js && sleep infinity" > launch.sh
RUN chmod 777 launch.sh

EXPOSE 8082
CMD ["./launch.sh"]
