FROM node:18-alpine



# Create the bot's directory

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app



COPY package.json .

RUN npm install\
    && npm install typescript -g

COPY . .

RUN npm run build

EXPOSE ${PORT}


# Start the bot.

CMD ["node", "./dist/index.js"]