import { REST, Routes } from 'discord.js'
import fs from 'fs'

export default async function () {
  const body = []
  const commandFiles = fs
    .readdirSync('./commands')
    .filter((file) => file.endsWith('.command.ts'))
  for (const file of commandFiles) {
    const command = require(`../commands/${file}`).default
    console.log(`Registering command: ${command.name}`)
    body.push({ name: command.name, description: command.description })
  }
  const rest = new REST({ version: '10' }).setToken(process.env.TOKEN)
  try {
    console.log('Started refreshing application (/) commands.')

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.SERVER
      ),
      { body }
    )

    console.log('Successfully reloaded application (/) commands.')
  } catch (error) {
    console.error(error)
  }
}
