import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import { FormInput, LocationCardProps } from '../../../lib/types/type';
import { ContactFormValues } from '../../../lib/types/Form/ContactFormValues';

const initialFormValues: ContactFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: '',
};

interface FormProps extends FormInput {
    showMessageBox?: boolean; // Optional message box toggle
    selectedLocation?: LocationCardProps | null; // Optional location prop
}

export const Form: React.FC<FormProps> = ({
    title,
    formDescription,
    fields,
    selectedLocation,
    showMessageBox = true,
}) => {
    const [formValues, setFormValues] = useState<ContactFormValues>(initialFormValues);

    useEffect(() => {
        if (selectedLocation) {
            setFormValues((prevValues) => ({
                ...prevValues,
                receiverEmail: selectedLocation.email || '', // Set email based on location
            }));
        }
    }, [selectedLocation]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formValues); // Log form values on submit
        // Update this function to call send email function to send the contact us message to the email.


    };

    return (
        <>
            <div className={styles.contactFormHeader}>
                <h1>{title}</h1>
                <p>{formDescription}</p>
            </div>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.formRow}>
                        {fields.map((field) => (
                            <div key={field.name} className={styles.formGroup}>
                                <input
                                    type={field.type}
                                    id={field.name}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    value={formValues[field.name as keyof ContactFormValues]}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </div>
                        ))}
                    </div>

                    {showMessageBox && (
                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formValues.message}
                                onChange={handleChange}
                                className={styles.textarea}
                            />
                        </div>
                    )}

                    <div className={styles.formSubmit}>
                        <button type="submit" className={styles.btn}>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
