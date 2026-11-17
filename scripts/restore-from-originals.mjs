/** One-shot: rebuild public photos from image-originals at quality 80. */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");
const originalsDir = path.join(process.cwd(), "image-originals");
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

function maxWidth(rel) {
  const n = rel.toLowerCase();
  if (/favicon|apple-touch|icon\.png/.test(n)) return 0;
  if (n.endsWith("logo.png") || n.includes("whitelogo")) return 1600;
  if (n.endsWith("og.jpg")) return 1400;
  if (n.includes("/reviews/")) return 1200;
  if (n.includes("/main-imgs/") || n.includes("slide") || n.includes("nomad") || n.includes("philos")) {
    return 1920;
  }
  return 1600;
}

function bestOriginal(rel) {
  const dir = path.dirname(rel);
  const base = path.basename(rel, path.extname(rel)).toLowerCase();
  const folder = path.join(originalsDir, dir);
  if (!fs.existsSync(folder)) return null;
  const matches = fs
    .readdirSync(folder)
    .filter((name) => path.basename(name, path.extname(name)).toLowerCase() === base)
    .map((name) => path.join(folder, name))
    .filter((file) => raster.test(file) && !file.includes(`${path.sep}unreferenced${path.sep}`));
  if (!matches.length) return null;
  return matches.sort((a, b) => fs.statSync(b).size - fs.statSync(a).size)[0];
}

const files = walk(publicDir).filter((file) => raster.test(file));
let before = 0;
let after = 0;
let n = 0;

for (const file of files) {
  const rel = path.relative(publicDir, file).split(path.sep).join("/");
  const size = fs.statSync(file).size;
  before += size;
  const original = bestOriginal(rel);
  const width = maxWidth(rel);
  if (!original || width === 0 || fs.statSync(original).size <= size) {
    after += size;
    continue;
  }

  const isLogo = /logo\.png$|whitelogo/i.test(rel);
  const isJpeg = rel.toLowerCase().endsWith(".jpg");
  let pipeline = sharp(original, { failOn: "none" }).rotate();
  pipeline = pipeline.resize({ width, withoutEnlargement: true });
  const tmp = file + ".tmp";
  if (isLogo) await pipeline.png({ compressionLevel: 9, quality: 90 }).toFile(tmp);
  else if (isJpeg) await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(tmp);
  else await pipeline.webp({ quality: 80, effort: 5 }).toFile(tmp);

  const outSize = fs.statSync(tmp).size;
  fs.renameSync(tmp, file);
  after += outSize;
  n += 1;
  const meta = await sharp(file).metadata();
  console.log(
    `${rel}: ${Math.round(size / 1024)} KB -> ${Math.round(outSize / 1024)} KB (${meta.width}x${meta.height})`,
  );
}

console.log(`restored ${n}, public ${Math.round(before / 1024)} KB -> ${Math.round(after / 1024)} KB`);
