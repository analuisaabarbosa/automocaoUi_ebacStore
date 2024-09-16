const { defineConfig } = require('cypress');
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      
    },
    env: {
      email: process.env.EMAIL,
      password: process.env.PASSWORD
    }
  },
});
