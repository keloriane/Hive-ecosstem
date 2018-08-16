const express = require('express')
const bodyparser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))

app.post('/api/form',(req,res)=>{
    nodemailer.createTestAccount((err,account)=>{
        const htmlEmail = `
        <h3>Apply details </h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Name: ${req.body.lastName}</li>
            <li>Name: ${req.body.email}</li>
        </ul>
        <h3>Motivations</h3>
        <p>${req.body.motivation}</p>
        
        `
        var transporter = nodemailer.createTransport({
            host: 'localhost',
            port: 587,
            service: 'Outlook365',
            secure: false,
           auth: {
             user: 'jimmyarona@hotmail.be',
             pass: "j'adore"
           }
        })
        // const mailOptions = {
        //     from: 'kengi31@hotmail.fr',
        //     to:'jimmyarona@hotmail.be',
        //     replyTo: 'contact@hive.brussel',
        //     subject:'New Message',
        //     text: req.body.motivation,
        //     html: htmlEmail
        // }
        var mailOptions = {
            from: 'jimmyarona@hotmail.be',
            to: 'kevin.flbt@gmail.com',
            subject: 'inTime',
            text: req.body.motivation,
            html:htmlEmail 
            //ajouter html
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              transporter.close();
            }
          });

        transporter.sendMail(mailOptions,(err, info)=>{
            if(err){
                return console.log(err)
            }
            console.log('message sent: %s', info.message)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
            transporter.close()
        })
    })
})
const PORT = process.env.PORT || 3002

app.listen(PORT, ()=>{
    console.log(`server listen to ${PORT}`);
    
})