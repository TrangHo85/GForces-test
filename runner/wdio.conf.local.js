/* eslint-disable camelcase */
const base = require("./wdio.conf.base");
const { TimelineService } = require("wdio-timeline-reporter/timeline-service");

exports.config = Object.assign(base.config, {
  maxInstances: 1,
  capabilities: [
    {
      browserName: "chrome",
      acceptInsecureCerts: true,
      "goog:chromeOptions": {
        args: ["--disable-infobars", "--disable-cache"],
        prefs: {
          credentials_enable_service: false,
          "profile.password_manager_enabled": false,
        },
      },
    },
  ],
  services: [["chromedriver"], [TimelineService]],
  path: "/",
});
