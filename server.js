const express = require("express");
const path = require("path");
const PORT = 3000;

const axios = require("axios");
const config = require("dotenv").config();
const TOKEN = process.env.TWITTER_BEARER_TOKEN;

const app = express();

app.use(express.static(path.join(__dirname, "client", "build")));

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));

const rulesURL = "https://api.twitter.com/2/tweets/search/stream/rules";
const streamURL =
  "https://api.twitter.com/2/tweets/search/stream?tweet.fields=public_metrics&expansions=author_id";
//&attachments.media_keys

const rules = [{ value: "giveaway" }];

//get stream rules
async function getRules() {
  const response = await axios.get(rulesURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  console.log(response.body);
  return response.body;
}

// set stream rules
async function setRules() {
  const data = {
    add: rules,
  };

  const response = await axios.post(rulesURL, data, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response.body;
}

// delete stream rules
async function deleteRules(rules) {
  if (!Array.isArray(rules.data)) {
    return null;
  }

  const ids = rules.data.map((rule) => rule.id);

  const data = {
    delete: {
      ids: ids,
    },
  }

  const response = await axios.post(rulesURL, data, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  console.log(response.body);
  return response.body;
}

(async () => {
  let currentRules;

  try {
    //get all stream rules
    currentRules = await getRules();

    //delete stream rules
    await deleteRules(currentRules);

    //set rules based on array above
    await setRules();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();


