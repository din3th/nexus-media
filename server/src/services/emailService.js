import nodemailer from 'nodemailer';
import { AGENCY_CONTACT } from '../config/constants.js';

const createTransporter = () => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export const sendInquiryNotification = async (inquiry) => {
  const transporter = createTransporter();

  if (!transporter) {
    console.warn('SMTP not configured — skipping email notification.');
    return { sent: false, reason: 'SMTP not configured' };
  }

  const servicesList = inquiry.services?.length
    ? inquiry.services.join(', ')
    : 'Not specified';

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #000; border-bottom: 3px solid #FFDE4D; padding-bottom: 8px;">
        New Nexus Media Inquiry
      </h2>
      <p><strong>Name:</strong> ${inquiry.fullName}</p>
      <p><strong>Email:</strong> ${inquiry.email}</p>
      <p><strong>Phone:</strong> ${inquiry.phone || 'N/A'}</p>
      <p><strong>Company:</strong> ${inquiry.company || 'N/A'}</p>
      <p><strong>Website:</strong> ${inquiry.website || 'N/A'}</p>
      <p><strong>Monthly Budget:</strong> ${inquiry.monthlyBudget}</p>
      <p><strong>Services:</strong> ${servicesList}</p>
      <p><strong>Timeline:</strong> ${inquiry.timeline}</p>
      <p><strong>Goals:</strong></p>
      <p>${inquiry.goals}</p>
      ${inquiry.message ? `<p><strong>Additional Notes:</strong> ${inquiry.message}</p>` : ''}
      <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
      <p style="color: #737373; font-size: 12px;">Submitted via nexusmedia.com contact form</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Nexus Media Website" <${process.env.SMTP_USER}>`,
    to: AGENCY_CONTACT.email,
    replyTo: inquiry.email,
    subject: `New Lead: ${inquiry.fullName} — ${inquiry.company || 'Direct Inquiry'}`,
    html,
  });

  return { sent: true };
};
