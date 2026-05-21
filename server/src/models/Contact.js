import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    company: { type: String, trim: true },
    website: { type: String, trim: true },
    monthlyBudget: { type: String, required: true },
    services: [{ type: String }],
    goals: { type: String, required: true, trim: true },
    timeline: { type: String, required: true },
    message: { type: String, trim: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
