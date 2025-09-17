import React, { useState } from "react";
import CreatorSectionHeader from "../../Components/CreatorSectionHeader";
import { Course } from "@/app/models/course.mode";
import { useCommunity } from "@/app/hooks/useCommunity";
import { getCourses } from "@/app/services/courseService";
import { Card } from "@/components/Ui/card";
import Image from "next/image";
import { CardFooter, CardTitle } from "@/components/Ui/CustomCard";
import { ArrowRight, BookOpenCheck, Clock, LayoutPanelTop } from "lucide-react";
import { Button } from "@/components/Ui/button";
import { Skeleton } from "@/components/Ui/skeleton";

function capitalizeWord(word: string): string {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const CreatorCourses = () => {
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

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col gap-2 justify-center items-center my-10">
          <Skeleton className="h-6 w-[200px]" />
          <Skeleton className="h-4 w-3/4 rounded-md" />
          <Skeleton className="h-4 w-3/6 rounded-md" />
        </div>

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
      </div>
    );
  }

  if (!Array.isArray(coursesList) || coursesList.length === 0) {
    return (
      <div className="text-center w-full h-[80vh] flex items-center justify-center">
        <p>No Courses available.</p>
      </div>
    );
  }

  return (
    <section className="py-10 font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <CreatorSectionHeader
          title="Courses"
          description="Discover our comprehensive collection of courses designed to accelerate your personal and professional growth. From mindset transformation to leadership excellence."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesList.map((course: Course, index) => (
            <Card
              className="p-0 rounded-xl border-none gap-1 shadow-none"
              key={index}
            >
              {/* image */}
              <div className="rounded-xl overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={
                      course?.coverImage?.value ||
                      "/assets/creatorCoursesPlaceHolderImage.jpg"
                    }
                    alt={course?.coverImage?.label || "Course Image"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center m-1 px-2 gap-4 mt-1">
                {course?.instructorName && (
                  <div className="flex items-center gap-2">
                    <BookOpenCheck color="#4C4C4C" size={16} />
                    <p className="text-sm text-[#4C4C4C] font-inter">
                      Instructor: {course?.instructorName}
                    </p>
                  </div>
                )}
                {course.sections.length > 0 && (
                  <div className="flex items-center gap-2">
                    <LayoutPanelTop color="#4C4C4C" size={16} />
                    <p className="text-sm text-[#4C4C4C] font-inter">
                      {`${course.sections.length} Sections`}
                    </p>
                  </div>
                )}
              </div>
              <CardTitle className="text-[#0C0407] font-semibold text-[20px] font-inter px-2 transform-none">
                {capitalizeWord(course?.name)}
              </CardTitle>
              <CardFooter className="flex flex-row justify-between items-center p-0 px-2 pb-2">
                <div>
                  {course?.amount != null && course?.amount !== "" ? (
                    <span className="font-semibold text-[#0C0407] text-[16px]">
                      ₹{course?.amount}
                    </span>
                  ) : (
                    <span className="font-semibold text-gray-400 text-[16px]">
                      --
                    </span>
                  )}
                </div>
                <Button variant={"outline"}>
                  Enroll Now{" "}
                  <span>
                    <ArrowRight />
                  </span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorCourses;
