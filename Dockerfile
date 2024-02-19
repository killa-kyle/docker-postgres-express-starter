FROM node:18-alpine



# Create the bot's directory

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app



COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE ${PORT}


# Start the server.

CMD ["node", "./dist/index.js"]