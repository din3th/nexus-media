const API_BASE = import.meta.env.VITE_API_URL || '/api';

export const submitContactForm = async (formData) => {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    const message = data.errors?.join(' ') || data.message || 'Submission failed.';
    throw new Error(message);
  }

  return data;
};
