import { $ } from "bun";

/**
 * Build the library.
 */
const build = async () => {
  await $`rm -rf build`;

  console.log("📦 Bundling...");
  await Bun.build({
    entrypoints: ["src/index.ts"],
    outdir: "build",
    target: "browser",
  });
  console.log("📦 Bundling complete.\n");

  console.log("📘 Generating type declarations...");
  await $`bunx tsc --noEmit false --declaration --emitDeclarationOnly --outDir build`;
  console.log("📘 Type declarations generated.");
};

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
