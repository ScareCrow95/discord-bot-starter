import type { ChatInputCommandInteraction } from 'discord.js'

export default {
  name: 'test',
  description: 'test command',
  execute: async (interaction: ChatInputCommandInteraction) => {
    await interaction.reply('test!')
  },
}
