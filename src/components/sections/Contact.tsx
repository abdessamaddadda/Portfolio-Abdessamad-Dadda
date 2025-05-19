import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-black dark:bg-black">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <SectionTitle>Get In Touch</SectionTitle>

        <div className="grid grid-cols-1 gap-8 mt-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="h-full p-6 bg-gray-900 rounded-lg shadow-md">
              <h3 className="mb-6 text-xl font-semibold text-white">Contact Information</h3>

              <div className="space-y-6">
                <ContactItem icon={<Mail size={20} />} label="Email">
                  daddaabdessamad1@gmail.com
                </ContactItem>
                <ContactItem icon={<Phone size={20} />} label="Phone">
                  +212 775205928
                </ContactItem>
                <ContactItem icon={<MapPin size={20} />} label="Location">
                  Sala Al Jadida, Morocco
                </ContactItem>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-lg font-medium text-gray-200">Connect With Me</h4>
                <div className="flex space-x-4">
                  <SocialIcon name="GitHub" href="https://github.com/abdessamaddadda" />
                  <SocialIcon name="LinkedIn" href="https://www.linkedin.com/in/abdessamad-dadda-1b0b1a1b5/" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="p-6 bg-gray-900 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <InputField id="name" label="Name" value={formData.name} onChange={handleChange} />
                  <InputField id="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
                </div>
                <InputField id="subject" label="Subject" value={formData.subject} onChange={handleChange} />
                <div>
                  <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting} className="relative">
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-3 mt-4 text-green-200 bg-green-900 rounded-md">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-3 mt-4 text-red-200 bg-red-900 rounded-md">
                    There was an error sending your message. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, children }) => (
  <div className="flex items-start">
    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-blue-400 bg-blue-900 rounded-md">
      {icon}
    </div>
    <div className="ml-4">
      <p className="text-sm font-medium text-gray-400">{label}</p>
      <p className="mt-1 text-base text-white">{children}</p>
    </div>
  </div>
);

interface SocialIconProps {
  name: string;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ name, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 text-gray-300 transition-colors bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white"
    title={name}
  >
    {name.charAt(0)}
  </a>
);

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, type = "text", value, onChange }) => (
  <div>
    <label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-300">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default Contact;
