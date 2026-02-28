// Email service for notifications

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: to }] }],
        from: { email: process.env.EMAIL_FROM || 'noreply@scienceedge.com' },
        subject,
        content: [{ type: 'text/html', value: html }],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error };
  }
}

export const welcomeEmailTemplate = (name: string) => `
  <h2>Welcome to Science Edge, ${name}!</h2>
  <p>Thank you for registering. We're excited to have you join our learning community.</p>
  <p><strong>Next Steps:</strong></p>
  <ul>
    <li>Complete your profile</li>
    <li>Enroll in your first course</li>
    <li>Attend your first live class</li>
  </ul>
  <p>Questions? Contact support@scienceedge.com</p>
`;

export const enrollmentEmailTemplate = (name: string, course: string) => `
  <h2>Enrollment Confirmation</h2>
  <p>Hi ${name},</p>
  <p>Great news! Your enrollment in <strong>${course}</strong> is confirmed.</p>
  <p><strong>Course Details:</strong></p>
  <ul>
    <li>📚 Lifetime access to course materials</li>
    <li>🎥 Live classes & recordings</li>
    <li>💬 Direct doubt support</li>
    <li>📋 Regular assessments & feedback</li>
  </ul>
`;
