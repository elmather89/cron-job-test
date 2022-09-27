import sgMail from '@sendgrid/mail';
import * as dotenv from 'dotenv';
dotenv.config();

const mail = sgMail.setApiKey(process.env.SENDGRID_API_KEY);

console.log(process.env.SENDGRID_API_KEY);

const msg = {
    to: 'liz@gpsimpact.com', // Change to your recipient
    from: process.env.VERIFIED_SENDER, // Change to your verified sender
    templateId: process.env.SENDGRID_TEMPLATE_ID,
    dynamic_template_data: {
        errorType: 'Big Error type...',
        errorMessage: 'Big error message goes here.',
    },
};

sgMail.send(msg)
    .then((response) => {
        console.log(response[0].statusCode)
        console.log(response[0].headers)
    })
    .catch((error) => {
        console.error(error)
    });
