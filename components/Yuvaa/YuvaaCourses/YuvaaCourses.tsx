"use client";

import { useCommunity } from "@/app/hooks/useCommunity";
import { Course } from "@/app/models/course.mode";
import { getCourses } from "@/app/services/courseService";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Ui/CustomCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Ui/dialog";
import { Skeleton } from "@/components/Ui/skeleton";
import { Calendar, Clock, Star, Users } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const MAX_PREVIEW_CHARS = 180;

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
          <motion.div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm p-4 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Skeleton className="h-48 w-full rounded-md" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex justify-between items-center">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-10 w-24 rounded-md" />
            </div>
          </motion.div>
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
      <motion.section
        className="py-16 px-4 lg:px-20"
        style={{
          backgroundColor: primaryBackgroundColor,
          color: heroTextColor,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          <div
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: secondaryBackgroundColor }}
          />
          <motion.p
            className="text-xl opacity-90 max-w-2xl mx-auto"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {description}
          </motion.p>
        </div>
      </motion.section>

      {/* Courses Grid */}
      <section className="py-16 px-4 bg-gray-50 lg:px-20">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {coursesList.map((course: Course, index) => (
              <motion.div
                key={course?._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
              >
                <Card className="overflow-hidden">
                  {/* Image Section */}
                  <div className="h-48 overflow-hidden">
                    <motion.img
                      src={
                        course?.coverImage?.value ||
                        "https://upload-community-files-new.s3.ap-south-1.amazonaws.com/undefined/Default%20Events.png"
                      }
                      alt={course?.coverImage?.label}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {/* Card Header */}
                  <CardHeader className="pb-1">
                    <CardTitle className="text-xl text-black capitalize">
                      {course?.name}
                    </CardTitle>
                  </CardHeader>

                  {/* Card Content */}
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
                      {course?.amount != null && course?.amount !== "" ? (
                        <span className="text-2xl font-bold text-black">
                          ₹{course?.amount}
                        </span>
                      ) : (
                        <span className="text-2xl font-bold text-black">
                          NaN
                        </span>
                      )}
                      <button
                        className="py-2 px-6 rounded-md text-white transition duration-300 hover:opacity-90"
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-[var(--bgColor)]" />,
                title: "Expert Instructors",
                text: "Learn from certified yoga masters with years of experience and deep knowledge.",
                bg: primaryBackgroundColor,
              },
              {
                icon: <Calendar className="w-8 h-8 text-[var(--bgColor)]" />,
                title: "Flexible Schedule",
                text: "Choose from multiple time slots and progress at your own pace with our structured programs.",
                bg: secondaryBackgroundColor,
              },
              {
                icon: <Star className="w-8 h-8 text-[var(--bgColor)]" />,
                title: "Proven Results",
                text: "Join thousands of satisfied students who have transformed their lives through our courses.",
                bg: primaryBackgroundColor,
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  style={{ "--bgColor": feature.bg } as React.CSSProperties}
                  className="bg-[var(--bgColor)]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-xl font-semibold mb-3 text-black"
                  style={{ color: primaryTextColor }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-600"
                  style={{ color: secondaryTextColor }}
                >
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default YuvaaCourses;
