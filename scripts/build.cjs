const { execSync } = require("child_process");
const path = require("path");

const projectDir = path.join(__dirname);

console.log("Installing dependencies...");
execSync("npm ci", { cwd: projectDir, stdio: "inherit" });

console.log("\nBuilding...");
execSync("npx vite build", { cwd: projectDir, stdio: "inherit" });

console.log("\nDone! Check the dist/ folder.");
