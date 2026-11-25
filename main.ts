import { mkdirSync, writeFileSync } from "node:fs";

// The 3 AM Excuse — one line in the voice of a hardware wallet that
// refuses to sign a transaction at 3 AM. The wallet's keys keep a
// curfew: 3 AM is the hour when terrible ideas look brilliant.
const ENTRY =
  "My keys have a curfew: I don't sign at 3 AM, the hour when every terrible idea in history looked brilliant.";

if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error("ENTRY must be a single line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
