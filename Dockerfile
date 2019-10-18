FROM node:10
MAINTAINER aereeeee <dofl5576@gmail.com>

WORKDIR /opt/app/airbnb
ADD . /opt/app/airbnb

RUN cd /opt/app/airbnb && yarn install

COPY docker/start.sh /usr/local/bin/
RUN ln -s usr/local/bin/start.sh /start.sh

CMD ["yarn", "start"]
