import nodemailer from "nodemailer";

// Disable Next.js default bodyParser for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    // FormData se data get karo
    const data = await req.formData(); 
    const name = data.get("name");
    const email = data.get("email");
    const color = data.get("color");
    const size  = data.get("size");
    const address = data.get("address");
    const printFile = data.get("printFile"); // uploaded file

   if (!name || !email || !color || !size || !address) {
      return new Response(
        JSON.stringify({ error: "⚠️ All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.EMAIL_USER, // your Gmail
    pass: process.env.EMAIL_PASS, // App Password
  },
});


    // Prepare attachments if file uploaded
    let attachments = [];
    if (printFile && printFile.size > 0) {
      const buffer = await printFile.arrayBuffer();
      attachments.push({
        filename: printFile.name,
        content: Buffer.from(buffer),
      });
    }

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🛒 New T-Shirt Order from ${name}`,
           text: `
You received a new T-Shirt order:

👤 Name: ${name}
📧 Email: ${email}
🎨 Color: ${color}
  Size: ${size}
🏠 Address: ${address}
      `,
      attachments: attachments,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Order email sent:", info.messageId);

    return new Response(
      JSON.stringify({ message: "✅ Order submitted successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("❌ T-shirt order email error:", err);
    return new Response(
      JSON.stringify({ error: "❌ Failed to submit order" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

