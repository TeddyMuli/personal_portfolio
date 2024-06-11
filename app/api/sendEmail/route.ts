import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const { firstname, lastname, email, phone, service, text } = await request.json();

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_MY_EMAIL,
        pass: process.env.NEXT_PUBLIC_GMAIL_SMTP_PASS
      }
    });

    let mailOptions = {
      from: email,
      to: process.env.NEXT_PUBLIC_MY_EMAIL,
      subject: service,
      text: `Hi my names are ${firstname} ${lastname}.\nPhone number: ${phone}.\nMessage: ${text}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
  }
}
