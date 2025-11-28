import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Turner",
      role: "Software Engineer",
      text: "CoursePro helped me transition into tech. The courses are practical and the instructors are amazing!",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=20",
    },
    {
      name: "Maria Garcia",
      role: "Digital Marketer",
      text: "Best investment in my career. I gained skills that immediately helped me get promoted.",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=21",
    },
    {
      name: "James Liu",
      role: "UX Designer",
      text: "The quality of content is outstanding. I've completed 10 courses and each one was worth it.",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=22",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-linear-to-br from-blue-600 to-purple-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-blue-100">
            Join thousands of satisfied learners
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-lg mb-6 italic">{testimonial.text}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48} 
                  height={48} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-blue-100">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
