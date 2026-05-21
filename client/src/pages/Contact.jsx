import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import InputField from '../components/ui/InputField.jsx';
import Button from '../components/ui/Button.jsx';
import { AGENCY } from '../utils/constants.js';
import { submitContactForm } from '../utils/api.js';

const STEPS = ['Your Info', 'Business Details', 'Goals & Budget'];

const BUDGET_OPTIONS = [
  { value: '', label: 'Select monthly budget' },
  { value: 'under-2k', label: 'Under $2,000' },
  { value: '2k-5k', label: '$2,000 – $5,000' },
  { value: '5k-15k', label: '$5,000 – $15,000' },
  { value: '15k-50k', label: '$15,000 – $50,000' },
  { value: '50k+', label: '$50,000+' },
];

const TIMELINE_OPTIONS = [
  { value: '', label: 'Select timeline' },
  { value: 'asap', label: 'ASAP — within 2 weeks' },
  { value: '1-month', label: 'Within 1 month' },
  { value: '1-3-months', label: '1–3 months' },
  { value: 'exploring', label: 'Just exploring' },
];

const SERVICE_OPTIONS = [
  'Paid Acquisition',
  'Short-Form Content',
  'Social Brand Management',
];

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  website: '',
  monthlyBudget: '',
  services: [],
  goals: '',
  timeline: '',
  message: '',
};

export default function Contact() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const toggleService = (service) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 0) {
      if (!form.fullName.trim()) newErrors.fullName = 'Full name is required.';
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        newErrors.email = 'Valid email is required.';
      }
    }

    if (step === 1) {
      if (!form.monthlyBudget) newErrors.monthlyBudget = 'Please select a budget range.';
    }

    if (step === 2) {
      if (!form.goals.trim() || form.goals.trim().length < 10) {
        newErrors.goals = 'Please describe your goals (min 10 characters).';
      }
      if (!form.timeline) newErrors.timeline = 'Please select a timeline.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    setLoading(true);
    setStatus(null);

    try {
      await submitContactForm(form);
      setStatus({ type: 'success', message: 'Inquiry sent! We will be in touch shortly.' });
      setForm(INITIAL_FORM);
      setStep(0);
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-brand-yellow font-display font-bold text-sm uppercase tracking-[0.3em] mb-4">
              Get In Touch
            </p>
            <h1 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight">
              Start Your <span className="text-brand-yellow">Growth</span> Journey
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="font-display font-bold text-lg uppercase mb-4">Contact Direct</h3>
                <a
                  href={`mailto:${AGENCY.email}`}
                  className="flex items-center gap-3 text-brand-muted hover:text-brand-yellow transition-colors mb-3"
                >
                  <Mail className="w-5 h-5 text-brand-yellow" />
                  {AGENCY.email}
                </a>
                <a
                  href={`tel:${AGENCY.phone}`}
                  className="flex items-center gap-3 text-brand-muted hover:text-brand-yellow transition-colors"
                >
                  <Phone className="w-5 h-5 text-brand-yellow" />
                  {AGENCY.phone}
                </a>
              </div>

              <p className="text-brand-muted text-sm leading-relaxed">
                Fill out the discovery form and our team will review your business
                and respond within 24 hours with a tailored growth roadmap.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="flex gap-2 mb-8">
                {STEPS.map((label, i) => (
                  <div
                    key={label}
                    className={`flex-1 h-1 transition-colors ${
                      i <= step ? 'bg-brand-yellow' : 'bg-neutral-800'
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm text-brand-muted mb-6 uppercase tracking-widest">
                Step {step + 1} of {STEPS.length} — {STEPS[step]}
              </p>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div
                      key="step0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <InputField
                        label="Full Name"
                        id="fullName"
                        required
                        value={form.fullName}
                        onChange={(e) => update('fullName', e.target.value)}
                        error={errors.fullName}
                        placeholder="John Smith"
                      />
                      <InputField
                        label="Email"
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        error={errors.email}
                        placeholder="you@company.com"
                      />
                      <InputField
                        label="Phone"
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="0727488914"
                      />
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <InputField
                        label="Company Name"
                        id="company"
                        value={form.company}
                        onChange={(e) => update('company', e.target.value)}
                        placeholder="Your Brand Ltd"
                      />
                      <InputField
                        label="Website"
                        id="website"
                        value={form.website}
                        onChange={(e) => update('website', e.target.value)}
                        placeholder="https://yourbrand.com"
                      />
                      <InputField
                        label="Monthly Ad / Marketing Budget"
                        id="monthlyBudget"
                        as="select"
                        required
                        value={form.monthlyBudget}
                        onChange={(e) => update('monthlyBudget', e.target.value)}
                        error={errors.monthlyBudget}
                        options={BUDGET_OPTIONS}
                      />

                      <div>
                        <p className="text-sm font-medium text-brand-white mb-3">
                          Services Interested In
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {SERVICE_OPTIONS.map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`px-4 py-2 text-sm border transition-all ${
                                form.services.includes(service)
                                  ? 'border-brand-yellow text-brand-yellow bg-brand-black'
                                  : 'border-neutral-800 text-brand-muted hover:border-brand-white'
                              }`}
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <InputField
                        label="Business Goals"
                        id="goals"
                        as="textarea"
                        required
                        rows={4}
                        value={form.goals}
                        onChange={(e) => update('goals', e.target.value)}
                        error={errors.goals}
                        placeholder="Describe what you want to achieve in the next 90 days..."
                      />
                      <InputField
                        label="Project Timeline"
                        id="timeline"
                        as="select"
                        required
                        value={form.timeline}
                        onChange={(e) => update('timeline', e.target.value)}
                        error={errors.timeline}
                        options={TIMELINE_OPTIONS}
                      />
                      <InputField
                        label="Additional Notes"
                        id="message"
                        as="textarea"
                        rows={3}
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        placeholder="Anything else we should know?"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {status && (
                  <div
                    className={`mt-6 flex items-center gap-3 p-4 border ${
                      status.type === 'success'
                        ? 'border-brand-yellow text-brand-yellow'
                        : 'border-red-500 text-red-400'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0" />
                    )}
                    <p className="text-sm">{status.message}</p>
                  </div>
                )}

                <div className="flex gap-4 mt-8">
                  {step > 0 && (
                    <Button type="button" variant="outline" onClick={prevStep} disabled={loading}>
                      Back
                    </Button>
                  )}

                  {step < STEPS.length - 1 ? (
                    <Button type="button" variant="primary" onClick={nextStep}>
                      Continue
                    </Button>
                  ) : (
                    <Button type="submit" variant="primary" disabled={loading} className="min-w-[180px]">
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Submit Inquiry'
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
