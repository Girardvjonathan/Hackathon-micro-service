FROM node:latest
# Working directory for application
WORKDIR /usr/src/app
EXPOSE 10010
EXPOSE 8081
# Creates a mount point
VOLUME [ "/usr/src/app" ]
RUN npm i -g swagger
RUN npm install -g db-migrate
RUN npm i
