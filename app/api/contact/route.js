import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";
import transporter from "@/lib/nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate all fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email" },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Save to MongoDB
    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });

    // Email to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #1f1f1f;">
          
          <h1 style="color: #3b82f6; font-size: 24px; margin-bottom: 5px;">
            New Contact Message
          </h1>
          <p style="color: #71717a; font-size: 14px; margin-bottom: 30px;">
            Someone reached out through your portfolio!
          </p>

          <div style="background: #141414; border-radius: 8px; padding: 20px; margin-bottom: 15px; border: 1px solid #1f1f1f;">
            <p style="color: #71717a; font-size: 12px; margin: 0 0 5px 0;">FROM</p>
            <p style="color: #ffffff; font-size: 16px; font-weight: bold; margin: 0;">${name}</p>
            <p style="color: #3b82f6; font-size: 14px; margin: 5px 0 0 0;">${email}</p>
          </div>

          <div style="background: #141414; border-radius: 8px; padding: 20px; margin-bottom: 15px; border: 1px solid #1f1f1f;">
            <p style="color: #71717a; font-size: 12px; margin: 0 0 5px 0;">SUBJECT</p>
            <p style="color: #ffffff; font-size: 16px; margin: 0;">${subject}</p>
          </div>

          <div style="background: #141414; border-radius: 8px; padding: 20px; margin-bottom: 25px; border: 1px solid #1f1f1f;">
            <p style="color: #71717a; font-size: 12px; margin: 0 0 10px 0;">MESSAGE</p>
            <p style="color: #ffffff; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <a 
            href="mailto:${email}?subject=Re: ${subject}"
            style="display: inline-block; background: #3b82f6; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;"
          >
            Reply to ${name}
          </a>

          <p style="color: #3f3f46; font-size: 12px; margin-top: 25px; text-align: center;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
    });

    // Confirmation email to SENDER
    await transporter.sendMail({
      from: `"Ali Raza" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Got your message, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #1f1f1f;">
          
          <h1 style="color: #3b82f6; font-size: 24px; margin-bottom: 5px;">
            Hey ${name}!
          </h1>
          <p style="color: #a1a1aa; font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
            Thank you for reaching out! I have received your message and will get back to you within 24 hours.
          </p>

          <div style="background: #141414; border-radius: 8px; padding: 20px; margin-bottom: 25px; border: 1px solid #1f1f1f;">
            <p style="color: #71717a; font-size: 12px; margin: 0 0 8px 0;">YOUR MESSAGE</p>
            <p style="color: #ffffff; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #a1a1aa; font-size: 14px; margin-bottom: 5px;">
            Best regards,
          </p>
          <p style="color: #ffffff; font-size: 16px; font-weight: bold; margin: 0;">
            Ali Raza
          </p>
          <p style="color: #3b82f6; font-size: 14px; margin: 3px 0 0 0;">
            Full Stack Developer
          </p>

          <p style="color: #3f3f46; font-size: 12px; margin-top: 25px; text-align: center;">
            This is an automated confirmation email
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return NextResponse.json(
        { success: false, error: messages[0] },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}