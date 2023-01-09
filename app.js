const puppeteer = require('puppeteer')

// Funtion bot

(async () => {


    // Numbers & Message
var phone =["+5582993484557", "+5582993483803", "+5582991140071"];
var message =["Test bot"]


// Config puppeteer
const browser = await puppeteer.launch({headless : false});
const page = await browser.newPage()


//Whatsapp Web page and config

await page.goto('https://web.whatsapp.com/send?phone=+'+phone[0]+'&text='+message+'')
await delay(20000);
console.log('Conected')
console.log('Sending message')


// WhatsApp Web button to sendo the message
await page.click("span[data-testid='send']")
await delay(10000)


// List and delay
for (var index = 1 ; index < phone.length ; index++){
await page.goto('https://web.whatsapp.com/send?phone=+'+phone[index]+'&text='+message+'')
await delay(10000)
console.log('Enviando mensagem')
await page.click("span[data-testid='send']")
await delay(10000)
}

})()


// Delay
function delay(time){
    return new Promise(function(resolve){
        setTimeout(resolve,time);
    })
}

