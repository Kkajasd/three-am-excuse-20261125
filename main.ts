import * as fs from "node:fs";
import * as path from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = path.join(OUTPUT_DIR, "entry.txt");

const ENTRY =
  "My keys have a curfew: I don't sign at 3 AM, the hour when every terrible idea in history looked brilliant.";

// The excuse, verbatim: a hardware wallet with a curfew. It refuses to sign
// at 3 AM, the hour when every terrible idea in history looked brilliant.
// Written to /output/entry.txt with no trailing newline.

function writeEntry(filePath: string, content: string): void {
  fs.writeFileSync(filePath, content, "utf8");
}

function main(): void {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  writeEntry(OUTPUT_FILE, ENTRY);
}

main();
