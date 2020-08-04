const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(token);

//todo add message for leaving and joining members
//todo add autorole
//todo add mass message deletion

client.on('message', msg => {
  if (msg.content.substring(0, 1) == '!') {
        var args = msg.content.substring(1).split(' ');
		var voiceChannel;
		//if(!(typeof(msg.member.voiceChannel) == null))
		try
		{
			voiceChannel = msg.member.voiceChannel;
		}
		
		catch(err)
		{
			voiceChannel = 'undefined';
		}

			
		if(args == 'ping')
			msg.channel.send('pong');
		
		if(args == 'image')
		{
			var random = Math.floor(Math.random() * images.length);
			msg.channel.sendFile(images[random]);
		}
		
		if(args == 'comfy')
		{
			var random = Math.floor(Math.random() * comf.length);
			msg.channel.sendFile(comf[random]);
		}
		
		if(args == 'kot')
		{
			var random = Math.floor(Math.random() * kot.length);
			
			//sloppy work-around for youtube links
			if(random == 40)
				msg.channel.send(kot[random]);
			else
				msg.channel.sendFile(kot[random]);
		}
		
		if(args[0] == '8ball')
		{
			var random = Math.floor(Math.random() * eightBall.length);
			msg.channel.send(eightBall[random]);
		}
		
		if(args == 'oof')
		{
			voiceLine(voiceLinesLocationsDict.oof, voiceChannel);
			msg.delete();
		}
		
		if(args == 'win?')
		{	
			voiceLine(voiceLinesLocationsDict.win, voiceChannel);
			msg.delete();
		}
		
		if(args == 'hello')
		{	
			voiceLine(voiceLinesLocationsDict.hello, voiceChannel);
			msg.delete();
		}
		
		if(args == 'dk')
		{	
			voiceLine(voiceLinesLocationsDict.dk, voiceChannel);
			msg.delete();
		}
		
		if(args == 'sicko')
		{	
			voiceLine(voiceLinesLocationsDict.sicko, voiceChannel);
			msg.delete();
		}
		
		if(args == 'yoo')
		{	
			voiceLine(voiceLinesLocationsDict.yoo, voiceChannel);
			msg.delete();
		}
		
		if(args == 'help')
		{
			msg.channel.sendMessage({embed: {
				color: 10181046,
				author: {
					name: client.user.username,
					icon_url: client.user.avatarURL
				},

				fields: [{
					name: "Commands",
					value: "**!comfy**\n**!image**\n**!kot**\n**!8ball**"
				}]
			}
			});
		}
		
		if(args == 'voice')
		{
			if(msg.channel.type === 'dm')
			{
				msg.channel.send({embed: {
					color: 10181046,
					author: {
						name: client.user.username,
						icon_url: client.user.avatarURL
					},

					fields: [{
						name: "Commands",
						value: "**!oof**\n**!win?**\n**!hello**\n**!dk**\n**!yoo**\n**!sicko**"
					}]
				}
				});
			}
			
			else
				msg.delete();
		}
		
		if(args == 'endMe')
		{
			client.channels.get("315449387360845825").send("Please K i lL me");
		}
		
		if(args[0] == 'justice')
		{
			var guild = msg.guild;
			guild.createChannel("gone", "voice");
			
			var jack = (msg.mentions.users.first());
			
			setTimeout(function(){
				var newChannel = guild.channels.find(channel => channel.name === "gone");
				guild.member(jack).setVoiceChannel(newChannel);
			}, 500);
			
			client.on('channelCreate', channel =>{
				setTimeout(function(){
					channel.delete()
				}, 600)});
			
			msg.delete();
		}
		
		
		if(args[0] == 'say')
		{
			var channelNameLength = args[1].length;
			var speech = msg.content.substring(6 + channelNameLength);
			var targetChannel = msg.mentions.channels.first();
			
			if (typeof(targetChannel) == 'undefined')
				msg.channel.send("Please specify a channel to send the message to.");
			else
				targetChannel.send(speech);
		}
		
		//todo add pm user
		
		
        /*switch(args) 
		{
            // !ping
            case 'ping':
                msg.channel.send('pong');
				break;
            case 'image':
				image = new Discord.RichEmbed();
				image.setImage('https://puu.sh/Ad669/b1063d3a27.jpg');
				msg.channel.send({image});
				break;
			
        }*/
    }
});



function voiceLine(fileLocation, voiceChannel)
{
	if(voiceChannel) 
	{
		voiceChannel.join()
		.then(connection => { // Connection is an instance of VoiceConnection
			const dispatcher = connection.playFile(fileLocation);
				dispatcher.on('end', () => {
					// The song has finished
					voiceChannel.leave();
				});
			})
			.catch(console.log);
	}
}

var voiceLinesLocationsDict = {win: 'B:/Things/daughter-bot/General Ourumov Says You Cant Win.wav',
							   oof: 'B:/Things/daughter-bot/roblox-death-sound-effect-opNTQCf4R.mp3',
							   hello: 'B:/Things/daughter-bot/Hello.mp3',
							   dk: "B:/Things/daughter-bot/dk.mp3",
							   sicko: "B:/Things/daughter-bot/SickoShrek.mp3",
							   yoo: "B:/Things/daughter-bot/YOOOOOOOOOOOOOOOOOOOOOOOOO!.mp3"};

var eightBall = ['It is certain',
				 'It is decidedly so',
				 'Without a doubt',
				 'Yes definitely',
				 'You may rely on it',
				 'As I see it, yes',
				 'Most likely',
				 'Outlook good',
				 'Yes',
				 'Signs point to yes',
				 'Reply hazy try again',
				 'PP too hard ask again later',
				 'Better not tell you now',
				 'Cannot predict now',
				 'Cannot predict now',
				 'Don\'t count on it',
				 'My reply is no',
				 'My pp say no',
				 'Outlook not so good',
				 'Very doubtful'];

var kot = ['B:/Things/daughter-bot/kots/4_IH7sJsETs.jpg',
		   'B:/Things/daughter-bot/kots/15d.jpg',
		   'B:/Things/daughter-bot/kots/2018-04-03_17-30-10.png',
		   'B:/Things/daughter-bot/kots/14956392_1225037424220569_508917445748034744_n.jpg',
		   'B:/Things/daughter-bot/kots/20161208_143617.jpg',
		   'B:/Things/daughter-bot/kots/1505962451156.jpg',
		   'B:/Things/daughter-bot/kots/1506746697381.webm',
		   'B:/Things/daughter-bot/kots/1509253808128.webm',
		   'B:/Things/daughter-bot/kots/1517148716792.gif',
		   'B:/Things/daughter-bot/kots/1521913117037.jpg',
		   'B:/Things/daughter-bot/kots/1522176925172-ck.jpg',
		   'B:/Things/daughter-bot/kots/1522809931967.webm',
		   'B:/Things/daughter-bot/kots/1522821584548.webm',
		   'B:/Things/daughter-bot/kots/1523080751154.jpg',
		   'B:/Things/daughter-bot/kots/1523167657162.png',
		   'B:/Things/daughter-bot/kots/1523984796290.webm',
		   'B:/Things/daughter-bot/kots/1523985052183.webm',
		   'B:/Things/daughter-bot/kots/1523985598391.webm',
		   'B:/Things/daughter-bot/kots/1116201609334770940.jpg',
		   'B:/Things/daughter-bot/kots/brushie.jpg',
		   'B:/Things/daughter-bot/kots/ca6dfff959.png',
		   'B:/Things/daughter-bot/kots/DBM84OjW0AE32Q_.jpg',
		   'B:/Things/daughter-bot/kots/DBM84OjW0AE32Q_1.jpg',
		   'B:/Things/daughter-bot/kots/disgust.gif',
		   'B:/Things/daughter-bot/kots/euO8GyX.webm',
		   'B:/Things/daughter-bot/kots/GkRcMrg.mp4',
		   'B:/Things/daughter-bot/kots/HC0JNfOgDZj6L9ZHNRR7Wql6Fe22Buv2i80Pn4GwiUU.png',
		   'B:/Things/daughter-bot/kots/Help+Cat.mp4',
		   'B:/Things/daughter-bot/kots/Hi.png',
		   'B:/Things/daughter-bot/kots/hqdefault.png',
		   'B:/Things/daughter-bot/kots/image (8).jpg',
		   'B:/Things/daughter-bot/kots/ss+(2018-02-13+at+08.49.31).jpg',
		   'B:/Things/daughter-bot/kots/TnPMufL.png',
		   'B:/Things/daughter-bot/kots/2Q.png',
		   'B:/Things/daughter-bot/kots/unknown.png',
		   'B:/Things/daughter-bot/kots/image.png',
		   'B:/Things/daughter-bot/kots/PEIUBQe.jpg',
		   'B:/Things/daughter-bot/kots/g6pIuT2.png',
		   'B:/Things/daughter-bot/kots/d6Flii6.jpg',
		   'B:/Things/daughter-bot/kotsuISHMml.jpg',
		   'https://youtu.be/XTTDoT2RH40'
		   ];

var comf = ['B:/Things/daughter-bot/comf/1491744268669.gif',
		    'B:/Things/daughter-bot/comf/1494162062803.webm' ,
			'B:/Things/daughter-bot/comf/1498719676752.gif',
			'B:/Things/daughter-bot/comf/1504225168030.webm',
			'B:/Things/daughter-bot/comf/1505795057346.gif',
			'B:/Things/daughter-bot/comf/1506787231854.webm',
			'B:/Things/daughter-bot/comf/1507975979883.webm',
			'B:/Things/daughter-bot/comf/1509430659374.gif',
			'B:/Things/daughter-bot/comf/1509682419086.webm',
			'B:/Things/daughter-bot/comf/1509682530958.webm',
			'B:/Things/daughter-bot/comf/1510975896147.webm',
			'B:/Things/daughter-bot/comf/1512434837249.webm',
			'B:/Things/daughter-bot/comf/1516772505083.webm',
			'B:/Things/daughter-bot/comf/1518167045047.webm',
			'B:/Things/daughter-bot/comf/1519684683556.gif',
			'B:/Things/daughter-bot/comf/1520979071410.webm',
			'B:/Things/daughter-bot/comf/1521591576931.webm',
			'B:/Things/daughter-bot/comf/1523325418796.webm',
			'B:/Things/daughter-bot/comf/1524470033098.webm',
			'B:/Things/daughter-bot/comf/h1q4z.mp4',
			'B:/Things/daughter-bot/comf/MFyAzSC.mp4',
			'B:/Things/daughter-bot/comf/sjknnqz62sh01.gif',
			'B:/Things/daughter-bot/comf/Wax Limousine.webm',
			'B:/Things/daughter-bot/comf/zcoWO3X.mp4',
			'B:/Things/daughter-bot/comf/1522227021154.webm',
		    'B:/Things/daughter-bot/comf/1520572000651.webm',
			'B:/Things/daughter-bot/comf/1509475762895.webm',
			'B:/Things/daughter-bot/comf/1507908402894.webm',
			'B:/Things/daughter-bot/comf/1507869582402.webm',
			'B:/Things/daughter-bot/comf/1507866056959.webm',
			'B:/Things/daughter-bot/comf/1507235419670.webm',
			'B:/Things/daughter-bot/comf/1507149334189.webm',
			'B:/Things/daughter-bot/comf/1505077830859.webm',
			'B:/Things/daughter-bot/comf/1505016238282.webm',
			'B:/Things/daughter-bot/comf/1504817367611.webm',
			'B:/Things/daughter-bot/comf/1501739475236.webm',
			'B:/Things/daughter-bot/comf/1519354251449.webm',
			'B:/Things/daughter-bot/comf/1519390059616.webm',
			'B:/Things/daughter-bot/comf/1519378834152.webm',
			'B:/Things/daughter-bot/comf/1519169480699.webm',
			'B:/Things/daughter-bot/comf/1519147053989.webm',
			'B:/Things/daughter-bot/comf/1519105220562.webm',
			'B:/Things/daughter-bot/comf/1517272922955.webm',
			'B:/Things/daughter-bot/comf/1516943151798.webm',
			'B:/Things/daughter-bot/comf/1516362842751.webm'
			];

var images = ['https://i.imgur.com/wDIf4o2.png',
			  'https://i.imgur.com/wQTWZYG.jpg',
			  'https://i.imgur.com/tQixvl8.jpg',
			  'https://i.imgur.com/waTBp8b.png',
			  'https://i.imgur.com/pDY5L3p.png',
			  'https://i.imgur.com/frhLqMp.png',
			  'https://i.imgur.com/frhLqMp.png',
			  'https://i.imgur.com/T9vT6XR.png',
			  'https://i.imgur.com/Qnn9jTG.jpg',
			  'https://i.imgur.com/m3X5M4V.jpg',
			  'https://i.imgur.com/ncyOH8d.jpg',
			  'https://i.imgur.com/R6G0FM8.jpg',
			  'https://i.imgur.com/Ur3MyYZ.png',
			  'https://i.imgur.com/08w3yWK.jpg',
			  'https://i.imgur.com/5GVfoLt.jpg',
			  'https://i.imgur.com/vxR3sMA.jpg',
			  'https://i.imgur.com/8TLD8MH.jpg',
			  'https://i.imgur.com/l5XhYdV.png',
			  'https://i.imgur.com/dLhIoAn.png',
			  'https://i.imgur.com/mb7zf0i.jpg',
			  'https://i.imgur.com/TjR51WQ.png',
			  'https://i.imgur.com/539KbTp.png',
			  'https://i.imgur.com/tq7Q7NF.jpg',
			  'https://i.imgur.com/k23POCj.png',
			  'https://i.imgur.com/FmU3Rkm.png',
			  'https://i.imgur.com/dHV187Q.png',
			  'https://i.imgur.com/p95nGyx.jpg',
			  'https://i.imgur.com/XQV2TJt.jpg',
			  'https://i.imgur.com/vfdaCP2.jpg',
			  'https://i.imgur.com/ICMrUH3.png',
			  'https://i.imgur.com/ollKJt4.jpg',
			  'https://i.imgur.com/6lBAcCJ.jpg',
			  'https://i.imgur.com/TmRDACf.jpg',
			  'https://i.imgur.com/hgBml5b.jpg',
			  'https://i.imgur.com/fYwA9rg.jpg',
			  'https://i.imgur.com/mE2SKCy.png',
			  'https://i.imgur.com/swYVgUs.jpg',
			  'https://i.imgur.com/2CO1t94.jpg',
			  'https://i.imgur.com/x2Kwlms.png',
			  'https://i.imgur.com/geqIrhD.jpg',
			  'https://i.imgur.com/e2oLLr9.jpg',
			  'https://i.imgur.com/hQAcaaZ.jpg',
			  'https://i.imgur.com/R89rLeS.jpg',
			  'https://i.imgur.com/mdWuP3r.gif',
			  'https://i.imgur.com/xpLGaAk.jpg',
			  'https://i.imgur.com/LAYs2kx.png',
			  'https://i.imgur.com/QtEpk5q.jpg',
			  'https://i.imgur.com/4OCTicn.png',
			  'https://i.imgur.com/qnp9R1A.png',
			  'https://i.imgur.com/qnp9R1A.png',
			  'https://i.imgur.com/85vhv2P.jpg',
			  'https://i.imgur.com/4CtLDip.jpg',
			  'https://i.imgur.com/SxwQW1j.jpg',
			  'https://i.imgur.com/hgWYZfB.jpg',
			  'https://i.imgur.com/BDv1bS6.jpg',
			  'https://i.imgur.com/R47tizo.jpg',
			  'https://i.imgur.com/oz9yuPK.png',
			  'https://i.imgur.com/WpoOtce.jpg',
			  'https://i.imgur.com/iyCkDWg.jpg',
			  'https://i.imgur.com/F4dJjhI.jpg',
			  'https://i.imgur.com/ptozkxx.jpg',
			  'https://i.imgur.com/WwsuxZw.jpg',
			  'https://i.imgur.com/qmL5EKk.jpg',
			  'https://i.imgur.com/utUDyn3.png',
			  'https://i.imgur.com/kxLJJlM.jpg',
			  'https://i.imgur.com/4QNmrHb.jpg',
			  'https://i.imgur.com/ni2SqTn.jpg',
			  'https://i.imgur.com/cPmQhYg.jpg',
			  'https://i.imgur.com/ZrZjxYa.jpg',
			  'https://i.imgur.com/INSKxui.png',
			  'https://i.imgur.com/xH2yyJV.png',
			  'https://i.imgur.com/VaKNLV4.jpg',
			  'https://i.imgur.com/WP6oGBF.jpg',
			  'https://i.imgur.com/cRUVGBA.jpg',
			  'https://i.imgur.com/4265tIz.jpg',
			  'https://i.imgur.com/fpYd72t.jpg',
			  'https://i.imgur.com/lSYwN5b.jpg',
			  'https://i.imgur.com/jMlhqcu.jpg',
			  'https://i.imgur.com/Wp590qn.jpg',
			  'https://i.imgur.com/EgbDPir.png',
			  'https://i.imgur.com/zsBeAEA.png',
			  'https://i.imgur.com/1MVuWyI.jpg',
			  'https://i.imgur.com/V5sphoM.jpg',
			  'https://i.imgur.com/uAtuT8b.jpg',
			  'https://i.imgur.com/sYQZboA.jpg',
			  'https://i.imgur.com/UbT6zne.jpg',
			  'https://i.imgur.com/qWkx6IM.jpg',
			  'https://i.imgur.com/jDumPKD.jpg',
			  'https://i.imgur.com/92Xh6GL.png',
			  'https://i.imgur.com/zjtU5a2.jpg',
			  'https://i.imgur.com/AoGpWsf.jpg',
			  'https://i.imgur.com/RXDp6Pw.jpg',
			  'https://i.imgur.com/XJdF6FI.jpg',
			  'https://i.imgur.com/NWxnAtL.jpg',
			  'https://i.imgur.com/HcWGY2v.png',
			  'https://i.imgur.com/UFpeWJp.png',
			  'https://i.imgur.com/UkCl1sF.png',
			  'https://i.imgur.com/9gX9L9J.jpg'
			  ];
