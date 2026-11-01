// Builds game/gameHtml.js from game/index.html, inlining three.js so the 3D view works offline.
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
let html = fs.readFileSync(path.join(root, "game", "index.html"), "utf8");
const cdnTag = '<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>';
const threePath = path.join(root, "node_modules", "three", "build", "three.min.js");
if (fs.existsSync(threePath)) {
  const three = fs.readFileSync(threePath, "utf8").replace(/<\/script/gi, "<\\/script");
  html = html.replace(cdnTag, () => "<script>" + three + "</script>");
  console.log("build-game: three.js inlined");
} else {
  console.warn("build-game: three.js not installed, the 3D view will load it from the CDN");
}
fs.writeFileSync(path.join(root, "game", "gameHtml.js"), "export default " + JSON.stringify(html) + ";\n");
