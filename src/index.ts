import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";

config();

const bot: Client = new Client({ intents: GatewayIntentBits.Guilds });

bot.once(Events.ClientReady, (client) => {
	console.log("This is a test: ", client.user.tag);
});

bot.login(process.env.TOKEN);
