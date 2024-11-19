const { defineConfig } = require("cypress");
const registerReportPortalPlugin = require("@reportportal/agent-js-cypress/lib/plugin");
const dotenv = require("dotenv");

dotenv.config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
    env: {
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    },
    reporter: "@reportportal/agent-js-cypress",
    reporterOptions: {
      endpoint: "https://demo.reportportal.io/api/v1",
      apiKey:
        "EBAC-Test_lekr5RmZSYSmSqDMtadxNy7LpOHXoJsiYTczEsQQBTKcSLdjG4iJWfxFVkbH4QuF",
      project: "analuisaabarbosa_personal",
      launch: "Testes de UI com Cypress",
      description: "Teste E2E da plataforma Ecommerce EBAC",
    },
  },
});
