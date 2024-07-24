import type { ChatInputCommandInteraction } from 'discord.js'

export default {
  name: 'ping',
  description: 'Ping command',
  execute: async (interaction: ChatInputCommandInteraction) => {
    await interaction.reply('Pong!')
  },
}
