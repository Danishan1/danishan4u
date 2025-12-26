// raw-schema/utils/sql-writer.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const saveSqlToFile = (fileName, sql, folder = "assets") => {
  const dirPath = path.join(__dirname, "..", "raw-schema", folder);
  const filePath = path.join(dirPath, `${fileName}.sql`);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  fs.writeFileSync(filePath, sql.trim() + "\n");
};

export { saveSqlToFile };
