import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    console.log("📩 Received data:", { name, email, message });

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info);

    return new Response(
      JSON.stringify({ message: "✅ Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("❌ Email error:", err);
    return new Response(
      JSON.stringify({ error: "❌ Failed to send email" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

