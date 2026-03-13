import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY as string);

type Message = {
  name: string;
  email: string;
  message: string;
};

export async function POST(request: NextRequest) {
  const data: Message = await request.json();
  const { name, email, message } = data;

  try {
    const { error } = await resend.emails.send({
      from: "Matthew Mercado <support@support.escapedirector.com>",
      to: ["matthew@escapedirector.com"],
      subject: `New Portfolio Message From - ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name} <br />
      <strong>Email:</strong> ${email} <br />
      <strong>Message:</strong> ${message}</p>`,
    });

    if (error) {
      console.error(error);
      return new NextResponse("Message failed to send.", {
        status: 400,
      });
    }

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
