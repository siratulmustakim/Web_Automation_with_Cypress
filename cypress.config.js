const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  watchForFileChanges: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    
    config.specPattern=[
      'cypress/e2e/login.cy.js',
      'cypress/e2e/makeAppoinment.cy.js'
    ]
    return config;
    },
  },
});
