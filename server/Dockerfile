FROM node

WORKDIR /opt/airbnb
ADD . /opt/airbnb

RUN cd /opt/airbnb && yarn install

EXPOSE  3000

# Run app
CMD ["yarn", "start"]
