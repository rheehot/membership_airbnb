FROM node:10
MAINTAINER aereeeee <dofl5576@gmail.com>

WORKDIR /opt/app/airbnb
ADD . /opt/app/airbnb

RUN cd /opt/app/airbnb && yarn install

EXPOSE  3000

CMD ["yarn", "start"]
