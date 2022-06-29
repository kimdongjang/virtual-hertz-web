FROM node:14-alpine 

WORKDIR /usr/src/web

COPY . /usr/src/web

RUN npm install --no-cache

# RUN npm run build

CMD [ "npm" , "run" , "start"]