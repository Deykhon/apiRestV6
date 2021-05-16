FROM node
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json .
RUN npm install --quiet
# quiet un parametro. Sirve para que no mustre las alertas de lo que se instala
# nodemon es un servicio de node  permite que se actualice todo  modificado
RUN npm install nodemon -g --quiet
RUN npm install typescript -g
COPY . .
EXPOSE 8000
RUN npm run build
CMD ["nodemon", "dist/server.js"]