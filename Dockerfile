FROM nodesource/nsolid

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9999

CMD ["nsolid", "server.js"]