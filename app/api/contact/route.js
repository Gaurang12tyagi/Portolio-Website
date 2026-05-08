import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email sent to you (Gaurang)
    const mailToOwner = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 10px;">
          <h2 style="color: #1a1443; border-bottom: 2px solid #16f2b3; padding-bottom: 10px;">
            📩 New Message from Your Portfolio
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; width: 100px;">Name:</td>
              <td style="padding: 10px; color: #222;">${name}</td>
            </tr>
            <tr style="background: #efefef;">
              <td style="padding: 10px; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 10px;">
                <a href="mailto:${email}" style="color: #7c3aed;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
              <td style="padding: 10px; color: #222; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            Hit <strong>Reply</strong> to respond directly to ${name}.
          </p>
        </div>
      `,
    };

    // Auto-reply to the sender
    const mailToSender = {
      from: `"Gaurang Tyagi" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 10px;">
          <h2 style="color: #1a1443; border-bottom: 2px solid #16f2b3; padding-bottom: 10px;">
            Hey ${name}! 👋
          </h2>
          <p style="color: #444; line-height: 1.6;">
            Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.
          </p>
          <div style="background: #1a1443; color: #fff; border-left: 4px solid #16f2b3; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0; font-style: italic; color: #d3d8e8;">"${message}"</p>
          </div>
          <p style="color: #444; line-height: 1.6;">
            I typically respond within 24 hours. Looking forward to connecting!
          </p>
          <p style="color: #444;">
            Best regards,<br/>
            <strong style="color: #1a1443;">Gaurang Tyagi</strong>
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailToOwner);
    await transporter.sendMail(mailToSender);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
