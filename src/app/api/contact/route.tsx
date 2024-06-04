"use server"

import { NextResponse, NextRequest } from 'next/server'
import sgMail from '@sendgrid/mail'

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const name = formData.get('name')?.toString() || '';
        const email = formData.get('email')?.toString() || '';
        const message = formData.get('message')?.toString() || '';
        const telephone = formData.get('telephone')?.toString() || '';

        // Configure SendGrid API key
        sgMail.setApiKey(process.env.SENDGRID_API_KEY?.toString() || '');

        // Create email message
        const msg = {
            to: 'contact@marthas-office.com', // Change to your recipient
            from: 'contact@marthas-office.com', // Change to your verified sender
            subject: 'New Message from Contact Form',
            text: `Name: ${name}\nEmail: ${email}\nTelephone: ${telephone}\nMessage: ${message}`,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Telephone:</strong> ${telephone}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
        };

        // Send email
        await sgMail.send(msg);
        console.log('Email sent');

        return NextResponse.json({ message: "Success: email was sent" });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: "Error sending email", error: error.message });
    }
}
