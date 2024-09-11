const { defineConfig } = require('cypress');
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      
    },
    env: {
      EMAIL: process.env.EMAIL,
      PASSWORD: process.env.PASSWORD,
      NAME: process.env.NAME,
      PHONE_NUMBER: process.env.PHONE_NUMBER
    }
  },
});
