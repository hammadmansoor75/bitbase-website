const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '', // Your Gmail address
        pass: '', // Your Gmail password
    },
});

app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: 'Shahbazcool',
        to: email, // where you want to receive the messages
        subject: `Message from ${name}: ${email}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error'); // if fail
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success'); // if success
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
