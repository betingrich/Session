const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Bugatti,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function BUGATTI PAIR CODE () {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Bugatti= Bugatti({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Bugatti.ev.on('creds.update', saveCreds)
			Qr_Code_By_Bugatti.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Venocyber_Tech.sendMessage(Qr_Code_By_Venocyber_Tech.user.id, { text: '' + b64data });
	
				   let BUGATTI= `
*_Qr Code_By_Bugatti_*
*_The Fastest bot alive*
______________________________________
*_Pair Code Connected by Bugatti_*
*_Thd fastest Bot alive_*
______________________________________
╔════◇
║ *『 WOW YOU CHOOSEN BUGATTI 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚══════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Ytube:* _youtube.com/Wemacomic_
║❒ *Owner:* _https://wa.me/254740007567?_
║❒ *Repo:* _https://github.com/betingrich/King_
║❒ *WaGroup:* _https://chat.whatsapp.com/IAqBQy3aFGfJsAxjLIW93P_
║❒ *WaChannel:* _https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x_
║❒ *Please Don't Forget To star*
╚══════════════════════╝ 
_____________________________________
	
_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_Bugatti.sendMessage(Qr_Code_By_Bugatti.user.id,{text: BUGATTI_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Bugatti.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					BUGATTI_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await BUGATTI_QR_CODE()
});
module.exports = router
