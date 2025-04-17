FROM node

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm i

COPY . .

EXPOSE 3200

CMD ["npm","run","dev"]