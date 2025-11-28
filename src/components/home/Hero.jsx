import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Learn Without
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Limits
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover thousands of courses taught by expert instructors. Build
              skills that matter, earn certificates, and advance your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 text-center font-semibold shadow-lg"
              >
                Explore Courses
              </Link>
              <Link
                href="/register"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all border-2 border-blue-600 text-center font-semibold"
              >
                Get Started Free
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">50K+</p>
                <p className="text-sm text-gray-600">Students</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">1000+</p>
                <p className="text-sm text-gray-600">Courses</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">98%</p>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Students learning"
                fill
                className="rounded-2xl shadow-2xl object-cover"
                priority
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
