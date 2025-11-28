export default function Features() {
  const features = [
    {
      icon: "🎓",
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of real-world experience",
    },
    {
      icon: "📱",
      title: "Learn Anywhere",
      description:
        "Access courses on any device, anytime, anywhere. Learn at your own pace",
    },
    {
      icon: "🏆",
      title: "Certifications",
      description:
        "Earn recognized certificates upon completion to boost your career",
    },
    {
      icon: "💬",
      title: "Community Support",
      description:
        "Join thousands of learners, share knowledge and grow together",
    },
    {
      icon: "⚡",
      title: "Lifetime Access",
      description: "Get unlimited access to all course materials, forever",
    },
    {
      icon: "🎯",
      title: "Career Guidance",
      description:
        "Get personalized career advice and job placement assistance",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose CoursePro?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the best online learning platform with features designed
            for your success
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-linear-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer border border-gray-100"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
