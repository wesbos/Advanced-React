FROM node:111

WORKDIR /src

RUN npm install -g nodemon

COPY package*.json ./

RUN npm run dev

COPY . .

ENV PORT 80

EXPOSE 80

CMD ["node", "server.js"]