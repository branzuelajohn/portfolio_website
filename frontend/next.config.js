/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["framer-motion"]);

module.exports = withTM({
  // your other config settings
});
