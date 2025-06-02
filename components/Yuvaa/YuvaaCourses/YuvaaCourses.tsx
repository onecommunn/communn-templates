import { Card, CardContent, CardHeader, CardTitle } from "@/components/Ui/Card";
import { Calendar, Clock, Star, Users } from "lucide-react";
import React from "react";

const YuvaaCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Beginner Yoga Fundamentals",
      description:
        "Perfect for those new to yoga. Learn basic poses, breathing techniques, and mindfulness practices.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      duration: "4 weeks",
      sessions: "8 sessions",
      level: "Beginner",
      price: "$89",
      rating: 4.8,
      instructor: "Sarah Johnson",
    },
    {
      id: 2,
      title: "Vinyasa Flow Mastery",
      description:
        "Dynamic sequences connecting breath with movement. Build strength, flexibility, and grace.",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      duration: "6 weeks",
      sessions: "12 sessions",
      level: "Intermediate",
      price: "$149",
      rating: 4.9,
      instructor: "Michael Chen",
    },
    {
      id: 3,
      title: "Meditation & Mindfulness",
      description:
        "Develop mental clarity and emotional balance through guided meditation and mindfulness practices.",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      duration: "8 weeks",
      sessions: "16 sessions",
      level: "All Levels",
      price: "$199",
      rating: 4.7,
      instructor: "Emma Williams",
    },
    {
      id: 4,
      title: "Power Yoga Intensive",
      description:
        "High-energy yoga designed to build strength, stamina, and athletic performance.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      duration: "6 weeks",
      sessions: "18 sessions",
      level: "Advanced",
      price: "$179",
      rating: 4.6,
      instructor: "David Rodriguez",
    },
    {
      id: 5,
      title: "Prenatal Yoga",
      description:
        "Safe and gentle yoga practice designed specifically for expecting mothers.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      duration: "12 weeks",
      sessions: "24 sessions",
      level: "All Levels",
      price: "$299",
      rating: 4.9,
      instructor: "Lisa Martinez",
    },
    {
      id: 6,
      title: "Yoga Teacher Training",
      description:
        "Comprehensive 200-hour certification program to become a certified yoga instructor.",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      duration: "16 weeks",
      sessions: "32 sessions",
      level: "Intermediate+",
      price: "$1,999",
      rating: 5.0,
      instructor: "Master Guru Patel",
    },
  ];
  return (
    <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="bg-[#20B2AA] text-white py-16 px-4 lg:px-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
          <div className="w-24 h-1 bg-[#FF6347] mx-auto mb-6"></div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Transform your practice with our comprehensive yoga courses designed
            for every level and goal.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4 bg-gray-50 lg:px-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-[#FF6347] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">
                        {course.rating}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-[#20B2AA]">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>
                        {course.duration} • {course.sessions}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Instructor: {course.instructor}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#20B2AA]">
                      {course.price}
                    </span>
                    <button className="bg-[#FF6347] hover:bg-[#FF6347]-dark text-white py-2 px-6 rounded-md">
                      Enroll Now
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#20B2AA] mb-4">
              Why Choose Our Courses?
            </h2>
            <div className="w-24 h-1 bg-[#FF6347] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our expertly designed courses and
              world-class instructors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#20B2AA]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#20B2AA]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from certified yoga masters with years of experience and
                deep knowledge.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#FF6347]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-[#FF6347]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Flexible Schedule</h3>
              <p className="text-gray-600">
                Choose from multiple time slots and progress at your own pace
                with our structured programs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#20B2AA]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#20B2AA]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Proven Results</h3>
              <p className="text-gray-600">
                Join thousands of satisfied students who have transformed their
                lives through our courses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default YuvaaCourses;
