import { useCommunity } from "@/app/hooks/useCommunity";
import { Course } from "@/app/models/course.mode";
import { getCourses } from "@/app/services/courseService";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Ui/CustomCard";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/Ui/dialog";
import { Skeleton } from "@/components/Ui/skeleton";
import { Calendar, Clock, Star, Users } from "lucide-react";
import React, { useState } from "react";

const MAX_PREVIEW_CHARS = 180; // rough estimate for ~3 lines – adjust if needed

const YuvaaCourses = ({
  title,
  description,
  primaryBackgroundColor,
  secondaryBackgroundColor,
  primaryTextColor,
  secondaryTextColor,
  heroTextColor,
}: {
  title: string;
  description: string;
  primaryBackgroundColor: string;
  secondaryBackgroundColor: string;
  heroTextColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
}) => {
  const [coursesList, setCoursesList] = React.useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { communityId } = useCommunity();

  const fetchCourses = async () => {
    try {
      setIsLoading(true);
      const response: any = await getCourses(communityId);
      if (response && response.courses) {
        setCoursesList(response.courses);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (communityId) {
      fetchCourses();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [communityId]);

  // ---------------------------------------------------------------------------
  // UI helpers
  // ---------------------------------------------------------------------------
  const renderCourseDescription = (course: Course) => {
    const desc = course?.description ?? "";
    const shouldTruncate = desc.length > MAX_PREVIEW_CHARS;

    if (!shouldTruncate) {
      return (
        <p
          className="text-gray-600 mb-4"
          style={{ color: secondaryTextColor }}
        >
          {desc}
        </p>
      );
    }

    return (
      <div className="mb-2">
        <p
          className="text-gray-600  line-clamp-3"
          style={{ color: secondaryTextColor }}
        >
          {desc}
        </p>
        <Dialog>
          <DialogTrigger className="text-sm font-medium text-blue-600 hover:underline focus:outline-none cursor-pointer">
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

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
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
    <main className="flex-grow bg-white">
      {/* Hero Section */}
      <section
        className="py-16 px-4 lg:px-20"
        style={{ backgroundColor: primaryBackgroundColor, color: heroTextColor }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: secondaryBackgroundColor }}
          />
          <p className="text-xl opacity-90 max-w-2xl mx-auto">{description}</p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4 bg-gray-50 lg:px-20">
        <div className="container mx-auto">
          {isLoading ? (
            <div className="col-span-full text-center text-gray-500 text-lg">
              Loading events...
            </div>
          ) : coursesList.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-lg">
              No courses available.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coursesList.map((course: Course) => (
                <Card
                  key={course?._id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={
                        course?.coverImage?.value ||
                        "https://upload-community-files-new.s3.ap-south-1.amazonaws.com/undefined/Default%20Events.png"
                      }
                      alt={course?.coverImage?.label}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-1">
                    <CardTitle className="text-xl text-black capitalize">
                      {course?.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {renderCourseDescription(course)}

                    <div className="space-y-2 mb-4">
                      {course?.endDateDuration && (
                        <div
                          className="flex items-center text-sm"
                          style={{ color: secondaryTextColor }}
                        >
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{course?.endDateDuration}</span>
                        </div>
                      )}

                      {course?.instructorName && (
                        <div
                          className="flex items-center text-sm"
                          style={{ color: secondaryTextColor }}
                        >
                          <Users className="w-4 h-4 mr-2" />
                          <span>Instructor: {course?.instructorName}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      {course?.amount != null && course?.amount !== ""?  (
                        <span className="text-2xl font-bold text-black">
                          ₹{course?.amount}
                        </span>
                      ) : (<span className="text-2xl font-bold text-black">
                          NaN
                        </span>)}
                      <button
                        className="py-2 px-6 rounded-md text-white"
                        style={{
                          backgroundColor: secondaryBackgroundColor,
                          color: heroTextColor,
                        }}
                      >
                        Enroll Now
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: primaryBackgroundColor }}
            >
              Why Choose Our Courses?
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-6"
              style={{ backgroundColor: secondaryBackgroundColor }}
            />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our expertly designed courses and
              world-class instructors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                style={{ "--bgColor": primaryBackgroundColor } as React.CSSProperties}
                className="bg-[var(--bgColor)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Users className="w-8 h-8 text-[var(--bgColor)]" />
              </div>
              <h3
                className="text-xl font-semibold mb-3 text-black"
                style={{ color: primaryTextColor }}
              >
                Expert Instructors
              </h3>
              <p className="text-gray-600" style={{ color: secondaryTextColor }}>
                Learn from certified yoga masters with years of experience and
                deep knowledge.
              </p>
            </div>

            <div className="text-center">
              <div
                style={{ "--bgColor": secondaryBackgroundColor } as React.CSSProperties}
                className="bg-[var(--bgColor)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Calendar className="w-8 h-8 text-[var(--bgColor)]" />
              </div>
              <h3
                className="text-xl font-semibold mb-3 text-black"
                style={{ color: primaryTextColor }}
              >
                Flexible Schedule
              </h3>
              <p className="text-gray-600" style={{ color: secondaryTextColor }}>
                Choose from multiple time slots and progress at your own pace
                with our structured programs.
              </p>
            </div>

            <div className="text-center">
              <div
                style={{ "--bgColor": primaryBackgroundColor } as React.CSSProperties}
                className="bg-[var(--bgColor)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Star className="w-8 h-8 text-[var(--bgColor)]" />
              </div>
              <h3
                className="text-xl font-semibold mb-3 text-black"
                style={{ color: primaryTextColor }}
              >
                Proven Results
              </h3>
              <p className="text-gray-600" style={{ color: secondaryTextColor }}>
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
