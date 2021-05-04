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
  console.log(response.data)
})
.catch(function(response) {
  console.log(response)
})