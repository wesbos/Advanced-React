FROM node:10

# Create app directory
WORKDIR /usr/src/app

RUN npm install -g nodemon

COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY /src .

EXPOSE 8080
CMD [ "npm", "run", "start:dev"]