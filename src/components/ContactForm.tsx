"use client";

import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");
    setError("");

    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setError(data?.error || "Something went wrong");
        return;
      }
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="md:max-w-md py-15 md:py-0 px-4 md:mx-auto md:p-6 rounded-3xl">
      <h2 className="text-xl font-medium mb-4 flex justify-left text-white">
        Write us a message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-4 border rounded-2xl focus:outline-none focus:border-bud"
        />

        <input
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-4 border rounded-2xl focus:outline-none focus:border-bud"
        />

        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 border rounded-2xl h-32 focus:outline-none focus:border-bud"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-bud text-evergreen p-2 rounded-2xl font-bold"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {status === "success" && <p className="text-bud text-sm">Message sent successfully!</p>}

        {status === "error" && <p className="text-red-600 text-sm">{error}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
