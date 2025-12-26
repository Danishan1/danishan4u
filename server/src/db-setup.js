import { exitWithError } from "./database/db-setup/migration/exit.js";
import { createProjectSchema } from "./database/db-setup/migration/index.db.js";
import { seedDatabase } from "./database/db-setup/seed/index.js";
import { UtilsError } from "#packages";
const { handleError } = UtilsError;

try {
  await createProjectSchema();
  await seedDatabase();

  process.exit(0);
} catch (err) {
  handleError(err, {
    context: {
      message: "Unexpected error during DB setup",
    },
    code: "00010",
    isTrusted: false,
  });
  exitWithError();
}
