import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, notes } = await req.json();

    console.log("Requête reçue :", { email, notes });

    const receiverEmail = process.env.RECEIVER_EMAIL;
    if (!receiverEmail) {
      return NextResponse.json({ error: "Email de réception non configuré" }, { status: 500 });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // domaine vérifié
      to: receiverEmail, // ton email réel, caché au client
      replyTo : email,   // l’email du client (peut être Gmail, Yahoo, etc.)
      subject: "Mail portfolio",
      text: `
      Messsage envoyée depuis le portfolio :
          
      Email du client :
      ${email}
          
      Notes :
      ${notes}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur email :", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}