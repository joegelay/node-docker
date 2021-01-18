FROM node:15.3.0-alpine3.10
WORKDIR /app 
EXPOSE 4000
ADD . /app 
CMD node index.js

