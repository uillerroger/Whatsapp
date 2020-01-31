const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv/config')
const accountSid = process.env.accountSid ;
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken);
 

app.use(bodyParser.urlencoded({ extended: true}))

app.set('view engine', 'ejs')  

app.get('/', (req, res) =>{
    res.render('index.ejs')
})

app.post('/show', (req, res) =>{
    console.log(req.body.name)
    res.send("Esta no seu Whatsapp")

    const mensagem = req.body.name

client.messages
    .create({
        from: 'whatsapp:+14155238886',
        body: mensagem,
        to: 'whatsapp:+5511962237883'     
     })
    .then((message) =>{
          console.log(message)
          console.log(message.sid)
          return message
    })
    .catch(function(error){
          console.log(error)
          return errors

    })


})

app.listen(PORT, console.log("Conectado"))