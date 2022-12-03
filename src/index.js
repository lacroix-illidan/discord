const { Client, Events, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const giphy = require('./giphy');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent]
});

client.once(Events.ClientReady, () => {
  console.log('Ready!');
});

client.on(Events.MessageCreate, message => {
  if (message.author.bot) return;

  if (message.mentions.members.first() && message.mentions.members.find(member => `${member.user.username}#${member.user.discriminator}` === 'Family#4391')) {
    giphy.search('vin diesel family').then((gif) => {
      const embed = new EmbedBuilder()
        .setImage(`https://media.giphy.com/media/${gif.id}/giphy.gif`)
        .setTitle('Did someone say family?');

      message.channel.send({ embeds: [embed] });
    });
  }
});

client.login(process.env.DISCORD_TOKEN);
