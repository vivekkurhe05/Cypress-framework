const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://automationteststore.com',
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/todo/*.js",
    chromeWebSecurity: false,
    watchForFileChanges: false,
    pageLoadTimeout: 12000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
    // env variable can also used to define different env URLs
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "https://webdriveruniversity.com",
      DEV_ENV: "",
      QA_ENV: "",
      STAGE_ENV: "",
      PROD_ENV: ""
    }
  },
});


// This file allows us to change/override settings`