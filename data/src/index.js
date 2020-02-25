const downloadStats = require("./downloadStats");
const { exec } = require("child_process");
const fs = require("fs");

const schedule = require("node-schedule");

const appPath = `${__dirname}/../../app/assets`;
const dataPath = `${__dirname}/../data/`;
const graphPath = `${appPath}/graph.json`;

async function updateData() {
  const { data, polishData } = await downloadStats();
  console.log(data);
  fs.writeFileSync(`${appPath}/data.json`, JSON.stringify(polishData), "utf8");

  fs.writeFile(
    `${dataPath}${new Date().toISOString()}.json`,
    JSON.stringify(data),
    "utf8"
  );
}

async function updateGraph() {
  const { polishData } = await downloadStats();
  let data;
  try {
    data = JSON.parse(fs.readFileSync(graphPath));
  } catch {
    data = [];
  }
  data.push(polishData);
  fs.writeFileSync(
    graphPath,
    JSON.stringify(data),
    JSON.stringify(data),
    "utf8"
  );
}

schedule.scheduleJob("00 * * * *", updateData);

schedule.scheduleJob("* */6 * * *", updateGraph);
