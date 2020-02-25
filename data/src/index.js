const downloadStats = require("./downloadStats");
const { exec } = require("child_process");
const fs = require("fs");

const schedule = require("node-schedule");
const appPath = `${__dirname}/../../app`;
const appAssetsPath = `${appPath}/assets`;
const dataPath = `${__dirname}/../data/`;
const graphPath = `${appAssetsPath}/graph.json`;

async function updateData() {
  const { data, polishData } = await downloadStats();
  fs.writeFileSync(
    `${appAssetsPath}/data.json`,
    JSON.stringify(polishData),
    "utf8"
  );

  fs.writeFileSync(
    `${dataPath}${new Date().toISOString()}.json`,
    JSON.stringify(data),
    "utf8"
  );
  exec(`cd ${appPath} && npm run generate`);
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
  fs.writeFile(graphPath, JSON.stringify(data), "utf8", () => {});
}

schedule.scheduleJob("01 * * * *", updateData);

schedule.scheduleJob("* */6 * * *", updateGraph);

updateData();
updateGraph();
