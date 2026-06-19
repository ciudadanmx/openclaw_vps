import { exec } from "node:child_process";
import { Telegraf } from "telegraf";

// Token obtenido de @BotFather
const bot = new Telegraf("8914339750:AAGupOewxHZGKmvR9fR3gTh7KT967KAl-dA");

// Comando: /sync
// Cambia las líneas de 'exec' por esto:
bot.command("sync", (ctx) => {
  ctx.reply("🚀 Sincronizando OpenClaw...");
  // Usamos 'npm run' desde la carpeta raíz del proyecto
  exec(
    "node scripts/run-node.mjs sync",
    { cwd: "/home/elisa/temporal/" },
    (err, stdout, stderr) => {
      ctx.reply(stdout || stderr || "Sincronización finalizada.");
    },
  );
});

bot.command("status", (ctx) => {
  exec("node scripts/run-node.mjs list", { cwd: "/home/elisa/temporal/" }, (err, stdout) => {
    ctx.reply(`Estado:\n${stdout.substring(0, 400) || "Sin datos"}`);
  });
});

bot.launch();
console.log("Bot de control de OpenClaw activo...");
