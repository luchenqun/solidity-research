const fs = require("fs-extra");

(async () => {
  const path = "../artifacts/build-info/62511327a91d5d9b0df8f30c6f9e098a.json";
  const data = await fs.readJSON(path);
  await fs.writeJSON("./input.json", data.input);
})();
