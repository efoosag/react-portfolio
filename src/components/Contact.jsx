export default function Contact() {
  return (
    <section
      id="contact"
      className="section py-20 container mx-auto px-6 text-center"
    >
      <h2 className="text-3xl font-bold dark:text-white mb-6">Contact Me</h2>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Interested in working together? Let’s talk.
      </p>

      <a
        href="mailto:efoosagtech@gmail.com"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 inline-block"
      >
        Send Email
      </a>
    </section>
  );
}
