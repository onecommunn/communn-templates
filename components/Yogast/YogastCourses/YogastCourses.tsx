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

const MAX_PREVIEW_CHARS = 180;

const YogastCourses = ({
  heroTitle,
  heroDescription,
  primaryBackground,
  secondaryBackground,
  primaryTextColor,
  secondaryTextColor,
}: {
  heroTitle: string;
  heroDescription: string;
  primaryBackground: string;
  secondaryBackground: string;
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
      return (
        <p className="text-gray-600 mb-4" style={{ color: secondaryTextColor }}>
          {desc}
        </p>
      );
    }

    return (
      <div className="mb-2">
        <p
          className="text-gray-600 line-clamp-3"
          style={{ color: secondaryTextColor }}
        >
          {desc}
        </p>
        <Dialog>
          <DialogTrigger className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
            Read more
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle className="capitalize">{course?.name}</DialogTitle>
            </DialogHeader>
            <DialogDescription
              className="whitespace-pre-wrap text-base text-gray-700"
              style={{ color: secondaryTextColor }}
            >
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

  const filterdCoursesList = coursesList.filter(
    (course: Course) => course.status !== "INACTIVE"
  );

  console.log(filterdCoursesList);

  return (
    <main className="flex-grow">
      <section
        className="bg-[#FF5E14] text-white py-16"
        style={{
          backgroundColor: primaryBackground,
          color: secondaryBackground,
        }}
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {heroTitle}
          </h1>
          <p className="max-w-2xl mx-auto">{heroDescription}</p>
        </div>
      </section>

      <section
        className="py-16 bg-[#FDF6EF]"
        style={{
          backgroundColor: secondaryBackground,
        }}
      >
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filterdCoursesList.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md"
                style={{
                  backgroundColor: secondaryBackground,
                }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={
                      course?.coverImage?.value ||
                      "https://upload-community-files-new.s3.ap-south-1.amazonaws.com/undefined/Default%20Events.png"
                    }
                    alt={course?.coverImage?.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 w-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3
                      className="text-xl font-bold text-[#FF5E14]"
                      style={{ color: primaryBackground }}
                    >
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
                    {course?.amount !== "" ? (
                      <span
                        className="text-2xl font-bold text-black"
                        style={{
                          color: primaryTextColor,
                        }}
                      >
                        {course?.amount === "0"
                          ? "Free"
                          : course?.amount
                            ? `₹${course.amount}`
                            : ""}
                      </span>
                    ) : (
                      <span
                        className="text-2xl font-bold text-black"
                        style={{
                          color: primaryTextColor,
                        }}
                      >
                        Free
                      </span>
                    )}
                    <Button
                      className="bg-[#FF5E14] hover:bg-orange-600 text-white rounded-full w-fit"
                      style={{
                        backgroundColor: primaryBackground,
                        color: secondaryBackground,
                      }}
                    >
                      Book Now
                    </Button>
                  </div>
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
