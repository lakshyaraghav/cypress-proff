const { defineConfig } = require("cypress");

module.exports = defineConfig({

  watchForFileChanges:false,

  e2e: {

    baseUrl:'https://uat-sociolla-web.sociolabs.io/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
