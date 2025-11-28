import Image from "next/image";

export default function Instructors() {
  const instructors = [
    {
      name: "Sarah Johnson",
      role: "Data Scientist",
      students: "50K+",
      img: "https://i.pravatar.cc/300?img=1",
    },
    {
      name: "Michael Chen",
      role: "Web Developer",
      students: "45K+",
      img: "https://i.pravatar.cc/300?img=13",
    },
    {
      name: "Emily Davis",
      role: "UI/UX Designer",
      students: "38K+",
      img: "https://i.pravatar.cc/300?img=5",
    },
    {
      name: "David Wilson",
      role: "Marketing Expert",
      students: "42K+",
      img: "https://i.pravatar.cc/300?img=12",
    },
  ];

  return (
    <section id="instructors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Instructors
          </h2>
          <p className="text-xl text-gray-600">
            Learn from the best in the industry
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {instructors.map((instructor, idx) => (
            <div
              key={idx}
              className="bg-linear-to-br from-blue-50 to-purple-50 p-6 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer text-center"
            >
              <Image
                src={instructor.img}
                alt={instructor.name}
                width={96} 
                height={96}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
              />
              <h3 className="font-semibold text-gray-900 mb-1">
                {instructor.name}
              </h3>
              <p className="text-sm text-blue-600 mb-2">{instructor.role}</p>
              <p className="text-xs text-gray-500">
                {instructor.students} students
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
