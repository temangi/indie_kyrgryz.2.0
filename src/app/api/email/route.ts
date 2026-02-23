import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, phone, date, title } = await req.json();

    const isGeneralConsultation = title.includes("General Inquiry");
    const subject = isGeneralConsultation
      ? `💡 Consultation Request from ${name}`
      : `🚀 Booking: ${title} — ${name}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "indiekyrgyztravel@gmail.com",
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #e0ecea; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #315a51; padding: 20px; color: white; text-align: center;">
            <h1 style="margin: 0; font-size: 20px;">Indie Kyrgyz Travel</h1>
          </div>
          <div style="padding: 20px; color: #333;">
            <h2 style="color: #ff7e00;">${isGeneralConsultation ? "Need help choosing a tour" : "New Booking Request"}</h2>
            <p><strong>Client:</strong> ${name}</p>
            <p>
                <strong>${phone.includes('@') ? 'Email:' : 'WhatsApp:'}</strong> 
                <a 
                    href="${phone.includes('@') ? `mailto:${phone}` : `https://wa.me/${phone.replace(/\D/g, "")}`}" 
                    target="_blank" 
                    rel="noopener noreferrer"
                 >
                    ${phone}
                 </a>
            </p>
            <p><strong>Preferred Date:</strong> ${date}</p>
            <p><strong>Tour:</strong> <span style="background: #f0f0f0; padding: 2px 6px; border-radius: 4px;">${title}</span></p>
          </div>
          <div style="background: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #888;">
            This request was sent from your website's contact form.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("NodeMailer Error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
