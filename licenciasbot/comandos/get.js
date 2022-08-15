const Discord = require("discord.js")
const superagent = require('superagent');
const cooldown = new Set()
const fs = require("fs")


module.exports = {
    name: "get",
    alias: [],

    async execute (client, message, args){



    if(cooldown.has(message.author.id)){
        message.reply("`Please wait you are entering commands very fast!`")
    } else {

//////////////////// COMANDO AQUI //////////////////






if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You cant use this command");

MessageEmbed = Discord.MessageEmbed

const filePath = `${__dirname}/../comandos/tier.txt`; // path for the specified service


                // read file
                fs.readFile(filePath, function (error, data) {
                    // if everything is okay c:
                    if (!error) {

                        data = data.toString(); // convert content to strings

                       

                    
                        const firstLine = data.toString().split('\n')[0]; // get the first line

                        message.reply({ embeds: [ new MessageEmbed().setDescription(`License: ||**${firstLine}**||`).setColor("BLUE")]})


                    }


                })
            



























////////////// FINAL DEL COMANDO ////////////////

        cooldown.add(message.author.id)
        setTimeout(function(){ 
    cooldown.delete(message.author.id)
        }, 5000);
    }
  ////////// FINAL DEL COOLDOWN//////////  
      
         }
  }
