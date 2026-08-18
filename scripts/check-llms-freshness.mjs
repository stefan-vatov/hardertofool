// Prebuild gate: public/llms.txt carries a "Last verified" stamp. If that
// stamp is older than 90 days the build fails, so the published index can
// never silently drift from the documents it describes. Plain Node, no
// test framework. Re-verify the links, then update the stamp to pass.
import { readFile } from "node:fs/promises";

const MAX_AGE_DAYS = 90;

const path = new URL("../public/llms.txt", import.meta.url);
const text = await readFile(path, "utf-8");

const match = text.match(/^Last verified: (\d{4}-\d{2}-\d{2})$/m);
if (!match) {
  console.error(
    "check-llms-freshness: no 'Last verified: YYYY-MM-DD' line in public/llms.txt",
  );
  process.exit(1);
}

const stamp = new Date(`${match[1]}T00:00:00Z`);
if (Number.isNaN(stamp.getTime())) {
  console.error(`check-llms-freshness: unparseable date '${match[1]}'`);
  process.exit(1);
}

const ageDays = (Date.now() - stamp.getTime()) / 86_400_000;
if (ageDays > MAX_AGE_DAYS) {
  console.error(
    `check-llms-freshness: llms.txt was last verified ${match[1]}, ` +
      `${Math.floor(ageDays)} days ago (limit ${MAX_AGE_DAYS}). ` +
      "Re-verify its contents and update the stamp.",
  );
  process.exit(1);
}

console.log(
  `check-llms-freshness: ok (${match[1]}, ${Math.floor(ageDays)} days old)`,
);
