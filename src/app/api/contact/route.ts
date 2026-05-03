import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Zod Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const body = await req.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Validation Failed",
          fields: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { name, email, message } = result.data;

    await resend.emails.send({
      from: `Contact Form <ayokwashie@gmail.com>`,
      to: "ayokwashie42@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
            <div style="font-family: san-serif">
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong>${name}</p>
                <p><strong>Email:</strong>${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            </div>`,
    });

    // Success Response
    return NextResponse.json(
      { message: "Message Sent Successfully..." },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
