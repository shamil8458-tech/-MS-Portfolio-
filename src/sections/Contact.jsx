
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const EMAIL = "shamil8458@gmail.com";
const PHONE = "9567318458";
const GITHUB_URL = "https://github.com/shamil8458-tech";
const LINKEDIN_URL = "https://www.linkedin.com/in/muhammed-shamil-m/";

const SERVICE_ID = "service_38x7cfc";
const TEMPLATE_ID = "template_dhfalpr";
const PUBLIC_KEY = "ZkENGHVTqA_K-x1wQ";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setSubmitted(false);
    setError("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim(),
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(
        "Message send cheyyan kazhinjilla. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="bg-slate-50 px-6 py-20 sm:px-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Get In Touch
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let's Connect
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
            Have a project idea or an opportunity to discuss?
            Feel free to reach out. I'd love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Contact Information */}
          <div className="rounded-2xl bg-indigo-600 p-7 text-white sm:p-9 lg:col-span-2">
            <h3 className="text-2xl font-bold">Let's Talk</h3>

            <p className="mt-3 leading-7 text-indigo-100">
              I'm open to learning opportunities, collaborations,
              and exciting projects in front-end development.
            </p>

            <div className="mt-8 space-y-4">
              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 rounded-xl bg-white/10 p-4 transition hover:bg-white/20"
              >
                <FaEnvelope className="shrink-0 text-xl" />

                <div className="min-w-0">
                  <p className="text-xs text-indigo-200">Email</p>
                  <p className="mt-1 break-all text-sm font-medium">
                    {EMAIL}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-4 rounded-xl bg-white/10 p-4 transition hover:bg-white/20"
              >
                <FaPhone className="shrink-0 text-xl" />

                <div>
                  <p className="text-xs text-indigo-200">Phone</p>
                  <p className="mt-1 text-sm font-medium">{PHONE}</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-white/10 p-4 transition hover:bg-white/20"
              >
                <FaGithub className="shrink-0 text-xl" />

                <div>
                  <p className="text-xs text-indigo-200">GitHub</p>
                  <p className="mt-1 text-sm font-medium">
                    Explore my projects
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-white/10 p-4 transition hover:bg-white/20"
              >
                <FaLinkedin className="shrink-0 text-xl" />

                <div>
                  <p className="text-xs text-indigo-200">LinkedIn</p>
                  <p className="mt-1 text-sm font-medium">
                    Connect with me
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-8 border-t border-white/20 pt-5">
              <p className="text-sm text-indigo-100">
                Thanks for visiting my portfolio!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:col-span-3">
            <h3 className="text-xl font-bold text-slate-900">
              Send Me a Message
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Fill in the details below to send me an email.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  maxLength={100}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows={5}
                  maxLength={5000}
                  required
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <FaPaperPlane />}
              </button>

              {/* Success Message */}
              {submitted && (
                <p
                  role="status"
                  className="flex items-start gap-2 text-sm leading-6 text-green-700"
                >
                  <FaCheckCircle className="mt-1 shrink-0" />
                  Your message has been sent successfully!
                </p>
              )}

              {/* Error Message */}
              {error && (
                <p
                  role="alert"
                  className="text-sm leading-6 text-red-600"
                >
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
