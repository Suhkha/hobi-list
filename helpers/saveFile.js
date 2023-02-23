const fs = require("fs");
const file = "./db/data.json";

const saveDB = (data) => {
  fs.writeFileSync(file, JSON.stringify(data));
};

const readDB = () => {
  if (!fs.existsSync(file)) {
    return null;
  }

  const dataFile = fs.readFileSync(file, { encoding: "utf-8" });
  const dataParsedFile = JSON.parse(dataFile);

  console.log(dataParsedFile);
  return dataParsedFile;
};

module.exports = {
  saveDB,
  readDB,
};
