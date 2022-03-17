// babel-plugin-macros.config.js
module.exports = {
  twin: {
    preset: 'styled-components',
  },
  styledComponents: {
    displayName: process.env.NODE_ENV !== 'production',
  },
};
