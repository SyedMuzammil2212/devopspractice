FROM node

# RUN apt-get update
# RUN apt-get install -y curl
# RUN curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
# RUN bash /tmp/nodesource_setup.sh
# RUN apt install -y nodejs

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY server.js server.js

RUN npm i


ENTRYPOINT [ "node","server.js" ]