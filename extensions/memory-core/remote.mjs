import { exec } from "node:child_process";
import { createServer } from "node:http";

const server = createServer((req, res) => {
  // Cuando entres desde el cel, esto se ejecutará
  if (req.url === "/ejecutar") {
    exec("node dist/cli.mjs", (err, stdout, stderr) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(stdout || stderr || "Comando ejecutado sin salida");
    });
  } else {
    // Una página simple con un botón
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <button onclick="fetch('/ejecutar').then(r=>r.text()).then(alert)">
        Ejecutar Memory Core
      </button>
    `);
  }
});

server.listen(3000, () => console.log("Control remoto en puerto 3000"));
