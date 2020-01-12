FROM node:11

WORKDIR /src

RUN npm install -g nodemon

COPY package*.json ./

COPY . .

RUN npm install
RUN npm run dev

ENV PORT 80

EXPOSE 80

# CMD is overridden in docker-compose `command:`