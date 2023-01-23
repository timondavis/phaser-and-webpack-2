FROM node:16.13.2
COPY . /home
COPY ./src/ /home/src/
WORKDIR /home
RUN apt-get update
RUN apt-get install python2 -y
RUN sh -c "yarn install"
RUN sh -c "npm install -g npm@9.3.1"
CMD npm run start
