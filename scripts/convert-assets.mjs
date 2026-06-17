#!/usr/bin/env node
/**
 * convert-assets.mjs
 * Re-extracts all images from Portfolio_Dwi_Putra.pptx as WebP.
 * Usage: node scripts/convert-assets.mjs
 *
 * Requires: python-pptx, Pillow (via Python subprocess)
 * Output: src/assets/slide{N}_image{M}.webp
 */

import { execSync } from "child_process";
import { existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const assetsDir = join(rootDir, "src", "assets");
const pptxPath = join(rootDir, "..", "Portfolio_Dwi_Putra.pptx");

if (!existsSync(assetsDir)) mkdirSync(assetsDir, { recursive: true });

const script = `
from pptx import Presentation
from PIL import Image
import io, os, glob, sys

assets_dir = sys.argv[1]
prs = Presentation(sys.argv[2])

# Clean old slide images
for f in glob.glob(os.path.join(assets_dir, 'slide*.*')):
    os.remove(f)

img_count = 0
for i, slide in enumerate(prs.slides):
    for shape in slide.shapes:
        if shape.shape_type == 13:
            img = shape.image
            pil_img = Image.open(io.BytesIO(img.blob))
            w, h = pil_img.size
            if pil_img.mode == 'RGBA':
                pil_img = pil_img.convert('RGB')
            max_dim = 1200
            if max(w, h) > max_dim:
                ratio = max_dim / max(w, h)
                pil_img = pil_img.resize((int(w*ratio), int(h*ratio)), Image.LANCZOS)
            filename = f'slide{i+1}_image{img_count}.webp'
            pil_img.save(os.path.join(assets_dir, filename), 'WEBP', quality=80, method=4)
            img_count += 1
            print(filename)
print(f'Done: {img_count} images', file=sys.stderr)
`;

try {
  const output = execSync(`python3 -c "${script.replace(/"/g, '\\"').replace(/\n/g, ' ')}" "${assetsDir}" "${pptxPath}"`, {
    encoding: "utf-8",
    maxBuffer: 10 * 1024 * 1024,
  });
  console.log(output.trim());
} catch (err) {
  console.error("Conversion failed:", err.stderr || err.message);
  process.exit(1);
}
