export default function Categories() {
  const categories = [
    { name: "Web Development", icon: "💻", courses: 250 },
    { name: "Data Science", icon: "📊", courses: 180 },
    { name: "Design", icon: "🎨", courses: 150 },
    { name: "Marketing", icon: "📱", courses: 120 },
    { name: "Business", icon: "💼", courses: 200 },
    { name: "Photography", icon: "📷", courses: 90 },
    { name: "Music", icon: "🎵", courses: 110 },
    { name: "Personal Dev", icon: "🌟", courses: 140 },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Categories
          </h2>
          <p className="text-xl text-gray-600">
            Explore our most sought-after course categories
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer text-center border border-gray-100"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">
                {category.courses} courses
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
