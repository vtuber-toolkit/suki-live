import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const cssPath = path.resolve("assets/css/template.css");
const css = fs.readFileSync(cssPath, "utf8");

function getBlock(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = css.match(new RegExp(`${escaped}\\s*\\{([\\s\\S]*?)\\}`));
  return match?.[1] ?? "";
}

test("body.has-body-bg overrides the default gradient stack with the actual background image", () => {
  const block = getBlock("body.has-body-bg");

  assert.match(
    block,
    /background-image:\s*var\(--body-bg,\s*none\);/,
    "body.has-body-bg should replace the default layered gradient with the selected body background image"
  );
});

test("body.has-body-bg sizes its single background image to cover the viewport", () => {
  const block = getBlock("body.has-body-bg");

  assert.match(
    block,
    /background-size:\s*var\(--body-bg-size,\s*cover\);/,
    "body.has-body-bg should not inherit the default two-layer size list, whose first auto value leaves a single image at its intrinsic size"
  );
});
