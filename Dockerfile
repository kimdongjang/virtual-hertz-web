FROM node:16.20.0

WORKDIR /usr/src/web

COPY . /usr/src/web

RUN npm install --no-cache

# RUN npm run build

CMD [ "npm" , "run" , "start"]