import mailgun from 'mailgun-js';

const mailgunClient = mailgun({
  apiKey: process.env.MAILGUN_API_KEY!,
  domain: process.env.MAILGUN_DOMAIN!,
});

export async function sendEmail({ to, from, subject, message } : { to: string, from: string, subject: string, message: string }) {
  const emailData = {
    from,
    to,
    subject,
    text: message,
  };

  try {
    const result = await mailgunClient.messages().send(emailData);
    console.log('Email sent successfully!');
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
