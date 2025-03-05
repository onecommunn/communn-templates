import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./ContactForm.module.css";
import { ContactFormProps } from "../../../../lib/types/ContactFormData/ContactFormProps";

export const ContactForm: React.FC<ContactFormProps> = ({ title, subtitle, fields, onSubmit }) => {
  const initialFormData = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {} as Record<string, string>);

  const [formData, setFormData] = useState<Record<string, string>>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    fields.forEach((field) => {
      if (field.required && !formData[field.name]?.trim()) {
        newErrors[field.name] = `${field.name} is required.`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (onSubmit) onSubmit(formData);
    
    setFormData(initialFormData); // Reset form
    alert("Message sent successfully!");
  };

  return (
    <div className={styles.contactUs}>
      <div className={styles.contactUsLeft}>
        <div className={styles.rectangle}>
          <div className={styles.content}>
            <div className={styles.circle}>
              <svg
                width="21"
                height="23"
                viewBox="0 0 21 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1362 11.5L0.431884 22.8763L0.431885 0.12369L20.1362 11.5Z"
                  fill="#C1A78C"
                />
              </svg>
            </div>
            <h1 className={styles.h1}>{title}</h1>
            {subtitle && <h4 className={styles.h4}>{subtitle}</h4>}
          </div>
        </div>
      </div>

      <div className={styles.contactUsRight}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.contactFormContainer}>
            <h2 className={styles.heading}>Contact Us</h2>

            {fields.map((field) => (
              <div key={field.name} className={styles.formField}>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={styles.textarea}
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={styles.input}
                  />
                )}
                {errors[field.name] && (
                  <span className={styles.error}>{errors[field.name]}</span>
                )}
              </div>
            ))}

            <div>
              <button type="submit" className={styles.button}>
                Send Message <span className={styles.arrow}>&rarr;</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

