import Contact from '../models/Contact.js';
import { sendInquiryNotification } from '../services/emailService.js';

export const submitContact = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      company,
      website,
      monthlyBudget,
      services,
      goals,
      timeline,
      message,
    } = req.body;

    const inquiry = await Contact.create({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || '',
      company: company?.trim() || '',
      website: website?.trim() || '',
      monthlyBudget,
      services: services || [],
      goals: goals.trim(),
      timeline,
      message: message?.trim() || '',
    });

    try {
      await sendInquiryNotification(inquiry);
    } catch (emailError) {
      console.error('Email notification failed:', emailError.message);
    }

    return res.status(201).json({
      success: true,
      message: 'Your inquiry has been received. We will be in touch shortly.',
      data: { id: inquiry._id },
    });
  } catch (error) {
    console.error('Contact submission error:', error);

    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: 'Validation failed.', errors });
    }

    return res.status(500).json({
      success: false,
      message: 'Failed to submit inquiry. Please try again later.',
    });
  }
};
