FROM node:10
WORKDIR /var/code
COPY package.json /var/code/
RUN npm install --production
COPY . /var/code
ENTRYPOINT [ "node", "src/server.js" ]
