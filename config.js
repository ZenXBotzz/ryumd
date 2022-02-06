/**
   * Base Ori By : Dika Ardnt.
   * Recode By : RyukaTeam
   * 
   * Source Base : https://github.com/DikaArdnt
   * Source Recode : https://youtube.com/channel/UCjxavxEQa1Wd9A4J9tOmATA
*/

const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
    
    //===> WEB APIKEY
    global.APIs = {
	alphaapi: 'https://api-alphabot.herokuapp.com',
    }
    
    //===> APIKEY 
    global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
    }
    
    //===> GAUSAH DIUBAH
    global.owner = [`${setting.nomerowner}`,`${setting.nomerowner}`,`${setting.nomerowner}`]
    global.packname = `${setting.namaowner}`
    global.author = `© ${setting.namaowner}`
    global.sessionName = `${setting.sessionname}`
    global.donasi = `${setting.donasi}`
    global.prefa = ['','!','/','#','.']
    global.sp = '⭔'
    
    //===> EDIT SESUAI KEMAUANMU
    global.mess = {
    admin: 'KAMU ADMIN?',
    botAdmin: 'BOT TIDAK MEMILIKI AKSES ADMIN',
    owner: 'ANDA BUKAN OWNER',
    group: 'KHUSUS GRUP',
    private: 'KHUSUS PRIVATE CHAT',
    bot: 'KHUSUS PENGGUNA NOMOR BOT',
    wait: 'TUNGGU SEBENTAR...',
    done: 'SELESAI..',
    }
    global.thumb = fs.readFileSync('./media/ryuu.jpg')
    
    //===> INI JUGA GAUSAH DIUBAH
    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
    })
