/**
 * Recompress public raster images heavier than 100 KB.
 * Originals are copied to image-originals/ before anything is overwritten.
 * Unreferenced photos are moved there so the site does not serve them.
 *
 *   node scripts/optimize-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");
const originalsDir = path.join(root, "image-originals");
const limit = 100 * 1024;
const raster = /\.(jpe?g|png|webp|avif)$/i;

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function relPublic(file) {
  return path.relative(publicDir, file).split(path.sep).join("/");
}

function sourceBlob() {
  const skip = new Set(["node_modules", ".next", "image-originals", "public"]);
  let blob = "";
  const stack = [root];
  while (stack.length) {
    const dir = stack.pop();
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (skip.has(entry.name)) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else if (/\.(tsx?|jsx?|scss|css|json|html|md)$/i.test(entry.name)) {
        blob += fs.readFileSync(full, "utf8");
      }
    }
  }
  return blob;
}

function maxWidth(rel) {
  const n = rel.toLowerCase();
  if (/favicon|apple-touch|^icon\.png$|\/icon\.png$/.test(n)) return 0;
  if (n.endsWith("logo.png") || n.includes("whitelogo")) return 1600;
  if (n.endsWith("og.jpg")) return 1400;
  if (n.includes("/reviews/")) return 1200;
  if (
    n.includes("/main-imgs/") ||
    n.includes("slide") ||
    n.includes("nomad") ||
    n.includes("philos")
  ) {
    return 1920;
  }
  return 1600;
}

function copyOriginal(file, rel) {
  const dest = path.join(originalsDir, rel);
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(file, dest);
  }
  return dest;
}

const blob = sourceBlob();
const files = walk(publicDir).filter((file) => raster.test(file));
let before = 0;
let after = 0;
let optimized = 0;
const renamed = [];
const moved = [];

for (const file of files) {
  const rel = relPublic(file);
  const size = fs.statSync(file).size;
  before += size;
  const webpRel = rel.replace(/\.(jpe?g|avif)$/i, ".webp");
  const referenced =
    blob.includes(rel) ||
    blob.includes(webpRel) ||
    (/^(favicon|apple-touch|icon\.png|og\.jpg|logo\.png)/i.test(path.basename(file)) &&
      blob.includes(path.basename(file)));

  const keepName = /^(favicon|apple-touch|icon\.png|og\.jpg|logo\.png)/i.test(
    path.basename(file),
  );

  if (!referenced && !keepName) {
    const dest = path.join(originalsDir, "unreferenced", rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.renameSync(file, dest);
    moved.push({ rel, kb: Math.round(size / 1024) });
    continue;
  }

  if (size <= limit) {
    after += size;
    continue;
  }

  const original = copyOriginal(file, rel);
  const width = maxWidth(rel);
  const ext = path.extname(file).toLowerCase();
  const isLogo = /logo\.png$|whitelogo/i.test(rel);
  const isJpegKeep = rel.toLowerCase().endsWith("og.jpg") || keepName;
  let pipeline = sharp(original, { failOn: "none" }).rotate();
  if (width > 0) pipeline = pipeline.resize({ width, withoutEnlargement: true });

  const outPath = isLogo || isJpegKeep || ext === ".png"
    ? file
    : file.replace(/\.(jpe?g|png|webp|avif)$/i, ".webp");

  if (isLogo || (ext === ".png" && keepName)) {
    await pipeline.png({ compressionLevel: 9, quality: 90 }).toFile(outPath + ".tmp");
  } else if (isJpegKeep) {
    await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(outPath + ".tmp");
  } else {
    await pipeline.webp({ quality: 80, effort: 5 }).toFile(outPath + ".tmp");
  }

  let outSize = fs.statSync(outPath + ".tmp").size;

  if (outPath === file && outSize >= size) {
    fs.unlinkSync(outPath + ".tmp");
    after += size;
    console.log(`${rel}: kept ${Math.round(size / 1024)} KB`);
    continue;
  }

  fs.renameSync(outPath + ".tmp", outPath);
  if (outPath !== file && fs.existsSync(file)) fs.unlinkSync(file);
  if (outPath !== file) renamed.push(`${rel} -> ${relPublic(outPath)}`);
  after += outSize;
  optimized += 1;
  console.log(
    `${rel}: ${Math.round(size / 1024)} KB -> ${Math.round(outSize / 1024)} KB`,
  );
}

console.log("---");
console.log(`files ${files.length}, optimized ${optimized}, moved ${moved.length}`);
console.log(`before ${Math.round(before / 1024)} KB, served after ${Math.round(after / 1024)} KB`);
if (renamed.length) console.log("renamed\n" + renamed.join("\n"));
if (moved.length) console.log("moved\n" + moved.map((m) => `${m.rel} ${m.kb}KB`).join("\n"));
