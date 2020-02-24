const fs = require("fs");
const axios = require("axios");
const cheerio = require("cherio");
const rowNames = [
  "country",
  "totalCases",
  "newCases",
  "totalDeaths",
  "newDeaths",
  "totalRecovered",
  "seriousCritical",
  "continent"
];
const siteUrl = "https://www.worldometers.info/coronavirus/";

async function downloadStats() {
  const fetchData = async () => {
    const result = await axios.get(siteUrl);
    return cheerio.load(result.data);
  };
  const $ = await fetchData();

  const statTable = $("#table3 tbody");
  const data = [];

  $(statTable)
    .children("tr")
    .each(function(_, row) {
      const output = {};
      $(row)
        .children("td")
        .each(function(i) {
          output[rowNames[i]] = $(this)
            .text()
            .replace("+", "")
            .replace(",", "")
            .trim();
          if (i >= 1 && i < 7) {
            output[rowNames[i]] = Number(output[rowNames[i]]);
          }
        });
      data.push(output);
    });

  fs.writeFile(
    `${__dirname}/../../app/assets/data.json`,
    JSON.stringify({
      updateDate: new Date().toISOString(),
      data
    }),
    "utf8",
    function(err) {
      console.log("JSON file has been saved.");
    }
  );

  fs.writeFile(
    `${__dirname}/../data/${new Date().toISOString()}.json`,
    JSON.stringify(data),
    "utf8",
    function(err) {
      console.log("JSON file has been saved.");
    }
  );
}

module.exports = downloadStats;
