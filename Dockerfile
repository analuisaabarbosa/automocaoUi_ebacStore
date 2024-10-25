FROM cypress/base:latest

WORKDIR /home/cypress

COPY package*.json ./
RUN npm install 

COPY . .

RUN npx cypress verify

CMD [ "npm", "run", "test" ]
