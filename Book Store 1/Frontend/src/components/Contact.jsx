import { useState } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";
import Footer from "../components/Footer";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:4001/contact', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      alert('Failed to send message.');
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container min-h-screen">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-28">
          <h1 className="text-2xl md:text-4xl text-center text-white">
            Contact
          </h1>
          <p className="text-center mt-4 text-gray-300">
            Feel free to reach out to us at{" "}
            <a
              href="mailto:info@bookstore.com"
              className="text-blue-400 hover:underline"
            >
              info@bookstore.com
            </a>
          </p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-200">
            Name
          </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-800 text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-200">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-800 text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-200">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-800 text-white"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 duration-300"
      >
        Send Message
      </button>
    </form>
    </div>
    </div>
    <Footer />
    </>
  );
}

export default ContactForm;
