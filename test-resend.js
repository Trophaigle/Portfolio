// test-resend.js
import { Resend } from "resend";

// Utilise ta clé API depuis les variables d'environnement
const resend = new Resend(process.env.RESEND_API_KEY);
  const receiverEmail = process.env.RECEIVER_EMAIL;
    if (!receiverEmail) {
        return NextResponse.json({ error: "Email de réception non configuré" }, { status: 500 });
    }

async function testEmail() {
  try {
    const email = await resend.emails.send({
      from: "hello@gmail.com",  // expéditeur
      to: receiverEmail,                             // ton email pour tester
      subject: "Test Resend - Envoi local",
      text: "Bonjour ! Ceci est un test depuis Node.js avec Resend."
    });
    console.log("Email envoyé :", email);
  } catch (err) {
    console.error("Erreur lors de l'envoi :", err);
  }
}

testEmail();