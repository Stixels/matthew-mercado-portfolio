import sgMail from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

type Message = {
  name: string;
  email: string;
  message: string;
};

export async function POST(request: NextRequest) {
  const data: Message = await request.json();
  const { name, email, message } = data;

  const content = {
    to: "matthewmercado1999@gmail.com",
    from: "portfolio@escapedirector.software",
    subject: `New Portfolio Message From - ${name}`,
    text: message,
    html: `<p><strong>Name:</strong> ${name} <br />
      <strong>Email:</strong> ${email} <br />
      <strong>Message:</strong> ${message}</p>`,
  };

  try {
    await sgMail.send(content);
    return new NextResponse("Message sent successfully.", {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Message failed to send.", {
      status: 400,
    });
  }
}
