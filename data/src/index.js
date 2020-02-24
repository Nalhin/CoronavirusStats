const downloadStats = require('./downloadStats');
const { exec } = require('child_process');

const schedule = require('node-schedule');

function handleUpdate() {
  downloadStats();
  console.log(`Stats downloaded at ${new Date()}`);
  exec(`cd ${__dirname}/../../app && npm run generate`);
}

handleUpdate();

schedule.scheduleJob('00 * * * *', handleUpdate);

