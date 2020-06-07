const Console = require("./console.js");
process.on("uncaughtException", err => {
    Console.error("FATAL ERROR: " + err);
    process.exit;
});
