const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  defaultCommandTimeout: 6000,
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome-report',
    overwrite: false,
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss"
  },

  env:{
    url: 'https://www.rahulshettyacademy.com/'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
