import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faXTwitter, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init("XUS-BEDa5vovApIDs");
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    
    // Simple validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        contact: form.contact,
        title: form.subject,
        message: form.message,
      };

      const result = await emailjs.send(
        "service_6kj7fob",
        "template_8g4qd9f",
        templateParams,
        "XUS-BEDa5vovApIDs"
      );

      if (result.text === "OK") {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", contact: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Failed to send message. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="mt-20 w-full scroll-mt-24">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Me</h2>
      <p className="text-gray-600 mt-5 mb-8 w-full text-lg">Have a question, proposal, or just want to say hello? Fill out the form below and I'll get back to you as soon as possible.<br />
        <span className='block mt-2'>Or feel free to connect with me on my socials:
          <a href="https://www.linkedin.com/in/theparthmaru/" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:underline ml-2 inline-flex items-center"><FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 mr-1" />LinkedIn</a>,
          <a href="https://www.instagram.com/theparthmaru" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-semibold hover:underline ml-2 inline-flex items-center"><FontAwesomeIcon icon={faInstagram} className="w-6 h-6 mr-1" />Instagram</a>,
          <a href="https://x.com/theparthmaru" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:underline ml-2 inline-flex items-center"><FontAwesomeIcon icon={faXTwitter} className="w-6 h-6 mr-1" />X</a>,
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:underline ml-2 inline-flex items-center"><FontAwesomeIcon icon={faYoutube} className="w-6 h-6 mr-1" />YouTube</a>,
          <a href="https://github.com/theparthmaru" target="_blank" rel="noopener noreferrer" className="text-gray-800 font-semibold hover:underline ml-2 inline-flex items-center"><FontAwesomeIcon icon={faGithub} className="w-6 h-6 mr-1" />GitHub</a>,
          <a href="mailto:theparthmaru@gmail.com" className="text-blue-500 font-semibold hover:underline ml-2 inline-flex items-center"><FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 mr-1" />Email</a>.
        </span>
      </p>
      
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 md:p-12 space-y-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">Full Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">Contact Number</label>
            <input
              type="tel"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Subject <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>
        <div>
          <label className="block font-semibold mb-1">Message <span className="text-red-500">*</span></label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
        {error && <div className="text-red-500 text-base font-semibold">{error}</div>}
        {success && <div className="text-green-600 text-base font-semibold">{success}</div>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:from-blue-700 hover:to-pink-600 transition disabled:opacity-50 text-lg"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact; 