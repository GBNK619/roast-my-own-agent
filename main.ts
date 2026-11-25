import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent answers with total confidence, then adds three caveats, then apologises — it's wrong in surround sound.";

// Gate check: the entry must be 1-140 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(
    `entry line must be 1-140 characters, got ${LINE.length}`,
  );
}
if (!LINE.trim()) {
  throw new Error("entry line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote entry.txt (${LINE.length} characters): ${LINE}`);
