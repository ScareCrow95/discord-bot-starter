import { Client, GatewayIntentBits } from 'discord.js'
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
})
import registerCommands from './lib/registerCommands'

registerCommands()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return

  const command =
    require(`./commands/${interaction.commandName}.command.ts`).default
  if (!!command) {
    command.execute(interaction).then()
  } else {
    await interaction.reply('Command not found')
  }
})

client.login(process.env.TOKEN)
