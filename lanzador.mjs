// lanzador.mjs
import { Telegraf } from "telegraf";

const BOT_TOKEN = "8914339750:AAGupOewxHZGKmvR9fR3gTh7KT967KAl-dA";
const bot = new Telegraf(BOT_TOKEN);

// Ejemplo de comando real
bot.command("sync", async (ctx) => {
  ctx.reply("🔄 Sincronizando OpenClaw...");
  try {
    // Aquí llamarías a la función real de tu proyecto
    // await syncFiles();
    ctx.reply("✅ Sincronización completada con éxito.");
  } catch (err) {
    ctx.reply("❌ Error en la sincronización: " + err.message);
  }
});

bot.launch();
