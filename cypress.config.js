const { defineConfig } = require("cypress");
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`)

  if(!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.")
    return {}
  }

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)
    },
    baseUrl: 'https://webdriveruniversity.com',
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
    // retries failing test for a specified no. of times
    retries: {
      runMode: 0,
      openMode: 1
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