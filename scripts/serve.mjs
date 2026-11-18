import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 5500);
const publicDir = join(process.cwd(), "dist");
const types = {
  ".css": "text/css",
  ".html": "text/html",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
};

createServer((request, response) => {
  const pathname = decodeURIComponent(
    new URL(request.url, `http://${request.headers.host}`).pathname,
  );
  const requested =
    pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const file = normalize(join(publicDir, requested));
  const safeFile =
    file.startsWith(publicDir) && existsSync(file) && statSync(file).isFile()
      ? file
      : join(publicDir, "index.html");
  response.writeHead(200, {
    "Content-Type": `${types[extname(safeFile)] || "application/octet-stream"}; charset=utf-8`,
  });
  createReadStream(safeFile).pipe(response);
}).listen(port, () =>
  console.log(`Cordelia disponible en http://localhost:${port}`),
);
