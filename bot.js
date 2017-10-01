var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
function read(textfile) {
	var fs = require("fs");
	var fsr = fs.readFileSync(textfile).toString('utf-8');
	var textByLine = fsr.split(",")
	return textByLine
}
bot.on('message', function (user, userID, channelID, message, evt) {
	if (message.toLowerCase() == 'ayy lmao') {
		bot.sendMessage({
                    to: channelID,
                    message: ' \'          .-\-\-\-\-\-\-\-.\n   \\_\\_/                  \\\\_\\_\\_\n \\            o\\_\\_\\_\\_o       /\n   \\                           /	- RAISE YOUR DONGER\n    /                           \\\n /\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\_\_\\'
	});}
    if (message.substring(0, 1) == '?') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        switch(cmd) {
		case 'saveblobs':
                bot.sendMessage({
                    to: channelID,
                    message: ' \'          .-\-\-\-\-\-\-\-.\n   \\_\\_/                  \\\\_\\_\\_\n \\            .\\_\\_\\_\\_.         /\n   \\                           /	- you can save your blobs here: https://tsssaver.1conan.com/\n    /                           \\\n /\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\_\_\\'
		});
	    break;
	    case 'blobinfo':
                bot.sendMessage({
                    to: channelID,
                    message: ' \'          .-\-\-\-\-\-\-\-.\n   \\_\\_/                  \\\\_\\_\\_\n \\            .\\_\\_\\_\\_.         /\n   \\                           /	- tf is a blob\n    /                           \\\n /\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\_\_\\'
		});
	    break;
	    case 'blob':
                bot.sendMessage({
                    to: channelID,
                    message: ' \'          .-\-\-\-\-\-\-\-.\n   \\_\\_/                  \\\\_\\_\\_\n \\            .\\_\\_\\_\\_.         /\n   \\                           /\n    /                           \\\n /\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\_\_\\'
		});
	    break;
        case 'insult':
			if (args[1] == 'my') {
				args[1] = 'your';
			}
			if (args.length < 2) {
				break;
			}
			if (args[1] == 'me' || args[1] == 'myself') {
				bot.sendMessage({
					to: channelID,
					message: ' \'          .-\-\-\-\-\-\-\-.\n   \\_\\_/                  \\\\_\\_\\_\n \\            .\\_\\_\\_\\_.         /\n   \\                           /	- yo fuck you ' + user + '\n    /                           \\\n /\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\_\_\\'
				});
			} else if (args[1] == '@Blewbs' || args[1] == '@Blewbs#1495' || args[1].toLowerCase() == "blewbs") {
				bot.sendMessage({
					to: channelID,
					message: ' \'          .-\-\-\-\-\-\-\-.\n   \\_\\_/        \\   /  \\\\_\\_\\_\n\\            -\\_\\_\\_\\_-         /\n   \\                           /	- r00d\n    /                           \\\n /\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\_\_\\'
				});
			} else {
				var subject = '';
				for (i = 1; i < args.length; i++) {
					var subject = subject.concat(args[i] + ' ');
				}
				bot.sendMessage({
					to: channelID,
					message: ' \'          .-\-\-\-\-\-\-\-.\n   \\_\\_/                  \\\\_\\_\\_\n \\            .\\_\\_\\_\\_.         /\n   \\                           /	- yo fuck ' + subject + '\n    /                           \\\n /\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\_\_\\'
				});
			}
		break;
		case 'roast':
			if (args.length < 2) {
				break;
			}
			var descs = read('descs.txt');
			var nouns = read('nouns.txt');
			var descnum = Math.floor(Math.random() * descs.length);
			var nounsnum = Math.floor(Math.random() * nouns.length);
			if (args[1] == 'my') {
				args[1] = 'your';
			}
			if (args[1] == 'me' || args[1] == 'myself') {
				bot.sendMessage({
					to: channelID,
					message: ' \'          .-\-\-\-\-\-\-\-.\n   \\_\\_/                  \\\\_\\_\\_\n \\            .\\_\\_\\_\\_.         /\n   \\                           /	- yo fuck you ' + user + ', you '+ descs[descnum] + ' ' + nouns[nounsnum] + '\n    /                           \\\n /\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\_\_\\'
				});
			} else if (args[1] == '@Blewbs' || args[1] == '@Blewbs#1495' || args[1].toLowerCase() == "blewbs") {
				bot.sendMessage({
					to: channelID,
					message: ' \'          .-\-\-\-\-\-\-\-.\n   \\_\\_/        \\   /  \\\\_\\_\\_\n\\            -\\_\\_\\_\\_-         /\n   \\                           /	- r00d\n    /                           \\\n /\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\_\_\\'
				});
			} else {
				var subject = '';
				for (i = 1; i < args.length; i++) {
					var subject = subject.concat(args[i] + ' ');
				}
				bot.sendMessage({
					to: channelID,
					message: ' \'          .-\-\-\-\-\-\-\-.\n   \\_\\_/                  \\\\_\\_\\_\n \\            .\\_\\_\\_\\_.         /\n   \\                           /	- yo fuck ' + subject + ', that '+ descs[descnum] + ' ' + nouns[nounsnum] + '\n    /                           \\\n /\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\_\_\\'
				});
			}
		break;
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: '```<BLEWBS COMMANDS>\n?help\n?blob\n?blobinfo\n?saveblobs\n?insult <string>\n?roast <string>\n```'
                });
        break;
         }
     }
});