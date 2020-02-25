const axios = require('axios');
const cheerio = require('cherio');
const rowNames = [
  'country',
  'totalCases',
  'newCases',
  'totalDeaths',
  'newDeaths',
  'totalRecovered',
  'seriousCritical',
  'continent',
];
const siteUrl = 'https://www.worldometers.info/coronavirus/';

const defaultData = {
  totalCases: 0,
  newCases: 0,
  totalDeaths: 0,
  newDeaths: 0,
  totalRecovered: 0,
  seriousCritical: 0,
};

async function downloadStats() {
  const fetchData = async () => {
    const result = await axios.get(siteUrl);
    return cheerio.load(result.data);
  };
  const $ = await fetchData();

  const statTable = $('#table3 tbody');
  const data = [];

  $(statTable)
    .children('tr')
    .each(function(_, row) {
      const output = {};
      $(row)
        .children('td')
        .each(function(i) {
          output[rowNames[i]] = $(this)
            .text()
            .replace('+', '')
            .replace(',', '')
            .trim();
          if (i >= 1 && i < 7) {
            output[rowNames[i]] = Number(output[rowNames[i]]);
          }
        });
      data.push(output);
    });

  return { data, polishData: { ...defaultData, date: new Date().toISOString(),...data.find(row => row.country === 'Poland')} };
}

module.exports = downloadStats;
