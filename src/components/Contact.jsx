import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please fill all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://shiva-portfolio-atml.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setStatus("Message sent successfully.");
    } catch (error) {
      setStatus("Unable to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-[#0d0d0f] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">
            Contact
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Let's Talk
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Have an idea or want to work together? Send me a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#17171c] p-8">
            <h3 className="text-2xl font-bold">
              Get in touch
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">
              I'm open to new projects, collaborations and opportunities.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:shivakhitaulya@gmail.com"
                className="block p-4 rounded-2xl bg-white dark:bg-[#101014] border border-gray-200 dark:border-white/10 hover:border-purple-500 transition"
              >
                <span className="text-xs text-gray-500">
                  Email
                </span>

                <span className="block mt-1 text-sm break-all">
                  shivakhitaulya@gmail.com
                </span>
              </a>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#101014] border border-gray-200 dark:border-white/10">
                <span className="text-xs text-gray-500">
                  Available for
                </span>

                <span className="block mt-1 text-sm">
                  Projects & Collaborations
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#17171c] p-8">
            <h3 className="text-2xl font-bold">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="mt-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm mb-2">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-[#101014] border border-gray-300 dark:border-white/10 outline-none focus:border-purple-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-[#101014] border border-gray-300 dark:border-white/10 outline-none focus:border-purple-500 transition"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="7"
                  maxLength="1000"
                  placeholder="Write your message..."
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-[#101014] border border-gray-300 dark:border-white/10 outline-none focus:border-purple-500 transition resize-none"
                />

                <p className="text-right text-xs text-gray-500 mt-2">
                  {form.message.length}/1000
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-5 px-6 py-3.5 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-500 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

              {status && (
                <p
                  className={`text-center text-sm mt-4 ${
                    status.includes("successfully")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;