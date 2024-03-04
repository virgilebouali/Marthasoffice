"use server"

import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api
export async function POST(request: any) {
    const username = "Marta's Office";
    const password = process.env.API_KEY_PASSWORD;
    const user = "apikey";
    const myEmail = "virgile.bouali@gmail.com";

    console.log("dealing with request")
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const telephone = formData.get('telephone')

    // create transporter object
    const transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 465,
        auth: {
            user: user,
            pass: password
        }
    });

    try {
        const mail = await transporter.sendMail({
            from: `${username} <${myEmail}>`, // Correctly setting the 'from' field
            to: myEmail,
            replyTo: email,
            subject: `Nouveau mail de la part de ${email}`,
            html: `
            <p>Nom: ${name} </p>
            <p>Email: ${email} </p>
            <p>Téléphone : ${telephone} </p>
            <p>Message: ${message} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error" })
    }
}
