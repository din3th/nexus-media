export default function InputField({
  label,
  id,
  type = 'text',
  required = false,
  error,
  className = '',
  as: Component = 'input',
  options,
  rows = 4,
  ...props
}) {
  const inputClasses = `
    w-full bg-brand-black border border-neutral-800 px-4 py-3
    text-brand-white placeholder-brand-muted
    focus:outline-none focus:border-brand-yellow focus:shadow-yellow-glow
    transition-all duration-200
    ${error ? 'border-red-500 focus:border-red-500 focus:shadow-none' : ''}
    ${className}
  `;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-brand-white">
          {label}
          {required && <span className="text-brand-yellow ml-1">*</span>}
        </label>
      )}

      {Component === 'select' ? (
        <select id={id} className={inputClasses} required={required} {...props}>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : Component === 'textarea' ? (
        <textarea
          id={id}
          rows={rows}
          className={inputClasses}
          required={required}
          {...props}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={inputClasses}
          required={required}
          {...props}
        />
      )}

      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}
