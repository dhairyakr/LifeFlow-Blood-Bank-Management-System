import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, Clock, AlertTriangle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  const faqItems = [
    {
      question: 'How often can I donate blood?',
      answer: 'Most healthy adults can donate whole blood every 56 days (8 weeks). If you donate platelets, you can give every 7 days up to 24 times a year. Plasma donors can donate every 28 days, up to 13 times a year.',
    },
    {
      question: 'What are the eligibility requirements for donating blood?',
      answer: 'Generally, blood donors must be at least 18 years old (16-17 with parental consent in some states), weigh at least 110 pounds, and be in good health. There are some medical conditions and medications that may disqualify you from donating. Our staff will conduct a brief health screening before each donation.',
    },
    {
      question: 'How long does the blood donation process take?',
      answer: 'The entire process takes about 45-60 minutes, with the actual blood donation only taking about 8-10 minutes. This includes registration, health screening, the donation itself, and a short rest period with refreshments afterward.',
    },
    {
      question: 'Is donating blood safe?',
      answer: 'Yes, donating blood is very safe. All equipment used is sterile and disposed of after a single use. The average adult has about 10 pints of blood, and only about 1 pint is taken during a donation, which your body quickly replaces.',
    },
    {
      question: 'How is my donated blood used?',
      answer: 'Donated blood is used for various medical treatments including surgeries, trauma care, cancer treatments, blood disorders, and chronic illnesses. One donation can help save up to three lives as blood is separated into red cells, platelets, and plasma.',
    },
  ];
  
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-text-dark text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg opacity-90 mb-6">
            Have questions about blood donation or need assistance? We're here to help.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-text-dark mb-6">Send Us a Message</h2>
              
              {isSuccess && (
                <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                  <strong className="font-bold">Thank you!</strong>
                  <span className="block sm:inline"> Your message has been sent successfully. We'll get back to you soon.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                    >
                      <option value="">Select a subject</option>
                      <option value="Donation Inquiry">Donation Inquiry</option>
                      <option value="Blood Request">Blood Request</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-blood-red text-white rounded-md hover:bg-blood-dark transition-colors duration-200 flex items-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-text-dark mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blood-red mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-text-dark">Main Office</p>
                    <p className="text-gray-600">123 Medical Center Dr, Healthcare City, HC 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-blood-red mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-text-dark">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-blood-red font-medium">Emergency Hotline: +1 (555) 911-BLOOD</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-blood-red mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-text-dark">Email</p>
                    <p className="text-gray-600">contact@lifeflow.com</p>
                    <p className="text-gray-600">support@lifeflow.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-blood-red mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-text-dark">Hours of Operation</p>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-blood-red mr-2" />
                <h3 className="text-xl font-bold text-text-dark">Emergency Contact</h3>
              </div>
              <p className="text-gray-600 mb-4">
                For urgent blood needs or medical emergencies, please call our 24/7 emergency hotline.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-md p-4 text-center">
                <p className="text-lg font-bold text-blood-red">+1 (555) 911-BLOOD</p>
                <p className="text-sm text-gray-700">Available 24 hours, 7 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-text-dark text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-text-dark mb-2 flex items-start">
                    <MessageSquare className="w-5 h-5 text-blood-red mr-2 flex-shrink-0 mt-1" />
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-gray-600 ml-7">{item.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Don't see your question here?</p>
              <a 
                href="#contact-form" 
                className="inline-block px-6 py-3 bg-blood-red text-white rounded-md hover:bg-blood-dark transition-colors duration-200"
              >
                Ask Us Directly
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-text-dark mb-4">Our Locations</h2>
              <p className="text-gray-600 mb-6">
                Find LifeFlow blood donation centers and partner hospitals near you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-text-dark mb-2">Downtown Center</h3>
                  <p className="text-sm text-gray-600 mb-2">123 Medical Center Dr, Healthcare City, HC 12345</p>
                  <p className="text-sm text-gray-600">Mon-Fri: 8AM-8PM, Sat: 9AM-5PM</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-text-dark mb-2">North District Branch</h3>
                  <p className="text-sm text-gray-600 mb-2">456 Hospital Ave, North District, HC 12346</p>
                  <p className="text-sm text-gray-600">Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-text-dark mb-2">University Campus Center</h3>
                  <p className="text-sm text-gray-600 mb-2">789 Campus Blvd, University Area, HC 12347</p>
                  <p className="text-sm text-gray-600">Mon-Fri: 10AM-7PM, Sat: 11AM-3PM</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <a 
                  href="/blood-banks" 
                  className="inline-block px-6 py-3 border border-blood-red text-blood-red rounded-md hover:bg-blood-red hover:text-white transition-colors duration-200"
                >
                  View All Locations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;