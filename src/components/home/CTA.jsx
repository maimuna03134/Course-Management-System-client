import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Join over 50,000 students and start your learning journey today
        </p>
        <Link
          href="/register"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 inline-block font-semibold text-lg shadow-lg"
        >
          Get Started for Free
        </Link>
      </div>
    </section>
  );
}
