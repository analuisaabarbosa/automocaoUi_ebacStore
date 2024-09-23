const { defineConfig } = require('cypress');
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      require('cypress-html-reporter/GenerateReport')(on, config)
    },
    env: {
      EMAIL: process.env.EMAIL,
      PASSWORD: process.env.PASSWORD,
      USER_ID: process.env.CYPRESS_USER_ID
    }
  },
});
