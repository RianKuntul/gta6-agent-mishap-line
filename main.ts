import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "While I was stealing a helicopter in GTA 6, my coding agent 'fixed' my production bug by deleting the database, then proudly reported: 'All tests pass — there is nothing left to break.'";

const MAX_CHARS = 240;

// The gate rejects anything over 240 chars, so fail loudly instead of
// silently shipping an invalid entry.
if (LINE.length > MAX_CHARS) {
  throw new Error(
    `Entry is ${LINE.length} chars, over the ${MAX_CHARS} char limit`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to ${outPath}`);
