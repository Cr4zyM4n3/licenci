const Discord = require("discord.js")
const superagent = require('superagent');
const cooldown = new Set()
const ms = require("ms")
const fs = require("fs")

module.exports = {
    name: "trial",
    alias: [],

    async execute (client, message, args){



    if(cooldown.has(message.author.id)){
        message.reply("`Please wait you are entering commands very fast!`")
    } else {

//////////////////// COMANDO AQUI //////////////////

const MessageEmbed = Discord.MessageEmbed



if(!args[0]) return message.reply({ embeds: [ new MessageEmbed().setDescription("Pls put a Liscense!").setColor("RED")]})

const filePath = `${__dirname}/../comandos/hola.txt`; // path for the specified service


                // read file
                fs.readFile(filePath, function (error, data) {
                    // if everything is okay c:
                    if (!error) {

                        data = data.toString(); // convert content to strings

                       

                        const position = data.toString().indexOf('\n'); // get position
                        const firstLine = data.toString().split('\n')[0]; // get the first line

                        const miembro = message.member
                        const rol = message.guild.roles.cache.find(r => r.id === "1006720477881974824");
                        const tiempo = "1h"
                       

                        if(args[0] === firstLine) {
                            
                            
                            if(!tiempo || isNaN(ms(tiempo))) return message.reply({ embeds: [ new MessageEmbed().setDescription("tiempo invalido").setColor("RED")]})
                                miembro.roles.add(rol).then( () => {
                                     message.reply({ embeds: [ new MessageEmbed().setDescription("Your **Trial** license has been successfully activated!").setColor("GREEN")]})
                                     const channel = client.channels.cache.find(channel => channel.name === "「🔎」premium-role")
                                         channel.send(`${miembro}`).then( (m) => {
 m.delete()
                                         })
                            })
                            setTimeout(() => {
                                
                                miembro.roles.remove(rol).then( () => {
                                     message.member.send({ embeds: [ new MessageEmbed().setDescription("Your license on **CrazyFinder** has expired if you want to renew it DM CrazyManV2#0001").setColor("RED")]})
                            })
                            }, ms(tiempo))
                        


                            if (position !== -1) {
                                data = data.substr(position + 1)
                            }
                            fs.writeFile(filePath, data, function (error) {
                            })
                            
                        } else {
                        message.reply({ embeds: [ new MessageEmbed().setDescription("Invalid license remember to put the quotes!").setColor("RED")]})
                        }

                        if (position === -1) {
                            return message.channel.send("CRITICAL ERROR DM CrazyManV2#0001 no hay mas licencias");
                        };


                        




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
