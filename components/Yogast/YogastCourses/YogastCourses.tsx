import { useCommunity } from "@/app/hooks/useCommunity";
import { Course } from "@/app/models/course.mode";
import { getCourses } from "@/app/services/courseService";
import { Button } from "@/components/Ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Ui/dialog";
import { Skeleton } from "@/components/Ui/skeleton";
import { Clock, Users } from "lucide-react";
import React, { useState } from "react";
const courses = [
  {
    title: "Beginner Hatha Yoga",
    duration: "60 minutes",
    level: "Beginner",
    description:
      "Perfect for those new to yoga. Learn basic poses and breathing techniques in a gentle, supportive environment.",
    schedule: ["Monday 9:00 AM", "Wednesday 6:00 PM", "Saturday 10:00 AM"],
  },
  {
    title: "Vinyasa Flow",
    duration: "75 minutes",
    level: "Intermediate",
    description:
      "Dynamic flowing sequences that build strength, flexibility, and mindfulness through synchronized movement and breath.",
    schedule: ["Tuesday 7:00 AM", "Thursday 7:00 PM", "Sunday 11:00 AM"],
  },
  {
    title: "Power Yoga",
    duration: "90 minutes",
    level: "Advanced",
    description:
      "Intense, athletic-style yoga that builds strength and endurance while improving flexibility and balance.",
    schedule: ["Monday 6:00 PM", "Friday 6:30 AM", "Saturday 8:00 AM"],
  },
  {
    title: "Yin Yoga",
    duration: "75 minutes",
    level: "All Levels",
    description:
      "Slow-paced style with poses held for longer periods. Perfect for deep stretching and meditation.",
    schedule: ["Wednesday 8:00 PM", "Friday 5:00 PM", "Sunday 6:00 PM"],
  },
];

const MAX_PREVIEW_CHARS = 180;

const YogastCourses = () => {
  const [coursesList, setCoursesList] = React.useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { communityId } = useCommunity();

  const fetchCourses = async () => {
    try {
      setIsLoading(true);
      const response: any = await getCourses(communityId);
      if (response?.courses) setCoursesList(response.courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (communityId) fetchCourses();
  }, [communityId]);

  const renderCourseDescription = (course: Course) => {
    const desc = course?.description ?? "";
    const shouldTruncate = desc.length > MAX_PREVIEW_CHARS;

    if (!shouldTruncate) {
      return <p className="text-gray-600 mb-4">{desc}</p>;
    }

    return (
      <div className="mb-2">
        <p className="text-gray-600 line-clamp-3">{desc}</p>
        <Dialog>
          <DialogTrigger className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
            Read more
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="capitalize">{course?.name}</DialogTitle>
            </DialogHeader>
            <DialogDescription className="whitespace-pre-wrap text-base text-gray-700">
              {desc}
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-4 lg:px-20">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm p-4 space-y-4"
          >
            <Skeleton className="h-48 w-full rounded-md" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex justify-between items-center">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-10 w-24 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!Array.isArray(coursesList) || coursesList.length === 0) {
    return (
      <div className="text-center w-full h-[80vh] flex items-center justify-center">
        <p>No courses available.</p>
      </div>
    );
  }

  return (
    <main className="flex-grow">
      <section className="bg-[#FF5E14] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Courses
          </h1>
          <p className="max-w-2xl mx-auto">
            Discover the perfect yoga course for your journey, from
            beginner-friendly classes to advanced practices
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#FDF6EF]">
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coursesList.map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#FF5E14]">
                    {course.name}
                  </h3>
                  {/* <span className="bg-[#FF5E14] text-white px-3 py-1 rounded-full text-sm">
                    {course.level}
                  </span> */}
                </div>
                {/* <p className="text-gray-600 mb-4">{course.description}</p> */}
                {renderCourseDescription(course)}
                <div className="mb-4 space-y-2">
                  {course?.endDateDuration && (
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{course?.endDateDuration}</span>
                    </div>
                  )}
                  {course?.instructorName && (
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Instructor: {course?.instructorName}</span>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center gap-2">
                  {course?.amount != null && course?.amount !== "" ? (
                    <span className="text-2xl font-bold text-black">
                      ₹{course?.amount}
                    </span>
                  ) : (
                    <span className="text-2xl font-bold text-black">NaN</span>
                  )}
                  <Button className="bg-[#FF5E14] hover:bg-orange-600 text-white rounded-full w-fit">
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default YogastCourses;
