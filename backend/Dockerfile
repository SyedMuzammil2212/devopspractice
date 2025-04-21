FROM node

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm i

RUN npm i nodemon

COPY . .

EXPOSE 5020

CMD ["npm","run","dev"]