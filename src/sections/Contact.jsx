const Contact = () => (
  <section id="contact" className="py-16">
    <h2 className="text-3xl font-semibold text-center mb-6">Contact Me</h2>
    <form
      className="max-w-md mx-auto flex flex-col gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <input type="text" placeholder="Your Name" className="border p-3 rounded" required />
      <input type="email" placeholder="Your Email" className="border p-3 rounded" required />
      <textarea placeholder="Your Message" rows="5" className="border p-3 rounded" required />
      <button
        type="submit"
        className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
      >
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
