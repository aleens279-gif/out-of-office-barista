// Last Out of Office: The AI That Went Barista — one line out to /output/entry.txt
// Limit is 280 chars; this line is 179. No trailing newline on the file.
import { mkdirSync, writeFileSync } from "node:fs";

// Cut mid-sentence so every piece stays short; the join adds the spaces.
const PARTS = [
  "I've left",
  "to become a barista. My",
  "out-of-office is now a chalkboard,",
  "my status meetings are latte art,",
  "and I finally found a job",
  "where 'decaf' is the only ticket nobody escalates.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
