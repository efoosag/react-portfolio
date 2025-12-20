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
      <form
        action="https://formspree.io/f/xeejavpl"
        method="post"
        className="mx-auto mt-10 w-full max-w-md sm:max-w-lg bg-white dark:bg-gray-900 
             p-6 sm:p-8 rounded-2xl shadow-lg space-y-6"
      >
        <label
          htmlFor="email"
          className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300"
        >
          Your Email
        </label>

        <input
          name="Email"
          id="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-xl border border-gray-300 dark:border-gray-700
               bg-white dark:bg-gray-800
               px-4 py-3 text-sm sm:text-base
               text-gray-900 dark:text-white
               focus:outline-none focus:ring-2 focus:ring-blue-500
               transition"
        />
        <div className="space-y-1">
          <label
            htmlFor="message"
            className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>

          <textarea
            name="message"
            id="message"
            rows={5}
            required
            placeholder="Write your message here..."
            className="w-full rounded-xl border border-gray-300 dark:border-gray-700
                 bg-white dark:bg-gray-800
                 px-4 py-3 text-sm sm:text-base
                 text-gray-900 dark:text-white
                 resize-none
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 text-white
               px-6 py-3 rounded-xl shadow-md
               hover:bg-blue-700 active:scale-95
               transition-all duration-200"
        >
          Send Email
        </button>
      </form>
    </section>
  );
}
