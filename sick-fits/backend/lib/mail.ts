import { createTransport, getTestMessageUrl } from 'nodemailer';
import 'dotenv/config';

const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function makeANiceEmail(text: string) {
  return `
    <div style="
        border: 1 px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px
    ">
        <h2>Hello there!</h2>
        <p>${text}</p>
        <p>😘, David Coelho</p>
    </div>
    `;
}

// NOTE: Use MakeTypes From Json https://jvilk.com/MakeTypes/
export interface Envelope {
  from: string;
  to: string[] | null;
}
export interface MailResponse {
  accepted?: string[] | null;
  rejected?: null[] | null;
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string;
  envelope: Envelope;
  messageId: string;
}

// TODO: test this flow properly. At the time I was implementing this etherial.email was down.
export async function sendPasswordResetEmail(
  resetToken: string,
  to: string
): Promise<void> {
  // email the user a token
  const info = (await transport.sendMail({
    to,
    from: 'wes@wesbos.com',
    subject: 'Your password reset token!',
    html: makeANiceEmail(`Your Password Reset Token is here!
      <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Click Here to reset</a>
    `),
  })) as MailResponse;

  const url = getTestMessageUrl(info);

  if (process.env.MAIL_USER.includes('ethereal.email') && url) {
    console.log(`💌 Message Sent! Preview it at ${url}}`);
  }
}
