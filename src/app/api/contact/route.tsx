"use server"

const nodemailer = require('nodemailer');

// Créer un transporteur SMTP réutilisable
const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587, // Utilisez le port approprié en fonction de vos besoins
    secure: false, // true pour les connexions SSL
    auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY
    }
});

// Configurer les options d'envoi
const mailOptions = {
    from: 'contact@marthas-office.com',
    to: 'contact@marthas-office.com',
    subject: 'Test email via SendGrid',
    text: 'Hello from SendGrid!'
};

// Envoyer l'email
transporter.sendMail(mailOptions, (error: string, info: any) => {
    if (error) {
        console.log('Error occurred:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
