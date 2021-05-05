// require('dotenv').config();

const axios = require('axios');
const core = require('@actions/core');
const url = core.getInput('webhook-url');

const config = {
  method: 'post',
  url: url,
  headers: {
    'Content-Type': 'application/json'
  },
  data: {
    text: 'Hello from GitHub Action'
  }
};

axios(config)
.then(function(response) {
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // console.log(response.data)
})
.catch(function(error) {
  // console.log(error.response.data)
  core.setFailed(error.message);
})