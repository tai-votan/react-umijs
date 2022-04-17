module.exports = {
  extends: [require.resolve("@umijs/fabric/dist/eslint")],
  globals: {
    page: true,
    REACT_APP_ENV: true,
    API_URL: true,
    NODE_ENV: true,
  },
};
