"use client";
import React from "react";
import CreatorSectionHeader from "../Components/CreatorSectionHeader";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Ui/card";
import { ArrowRight, UserRoundCog } from "lucide-react";
import { Button } from "@/components/Ui/button";
import Link from "next/link";

const AppointmentsList = [
  {
    author: "Prachi and Harsh",
    title: "1 0n 1 Session",
    description:
      "We met in college back in 2016, and ever since, life has been one big adventure! From chasing the Northern Lights in Iceland to plunging into and learning scuba diving in Egypt, we've been living a dream and documenting it all along the way. But our journey doesn't end there.",
    price: 1500,
  },
  {
    author: "Prachi and Harsh",
    title: "1 0n 1 Session",
    description:
      "We met in college back in 2016, and ever since, life has been one big adventure! From chasing the Northern Lights in Iceland to plunging into and learning scuba diving in Egypt, we've been living a dream and documenting it all along the way. But our journey doesn't end there.",
    price: 1500,
  },
  {
    author: "Prachi and Harsh",
    title: "1 0n 1 Session",
    description:
      "We met in college back in 2016, and ever since, life has been one big adventure! From chasing the Northern Lights in Iceland to plunging into and learning scuba diving in Egypt, we've been living a dream and documenting it all along the way. But our journey doesn't end there.",
    price: 1500,
  },
  {
    author: "Prachi and Harsh",
    title: "1 0n 1 Session",
    description:
      "We met in college back in 2016, and ever since, life has been one big adventure! From chasing the Northern Lights in Iceland to plunging into and learning scuba diving in Egypt, we've been living a dream and documenting it all along the way. But our journey doesn't end there.",
    price: 1500,
  },
  {
    author: "Prachi and Harsh",
    title: "1 0n 1 Session",
    description:
      "We met in college back in 2016, and ever since, life has been one big adventure! From chasing the Northern Lights in Iceland to plunging into and learning scuba diving in Egypt, we've been living a dream and documenting it all along the way. But our journey doesn't end there.",
    price: 1500,
  },
  {
    author: "Prachi and Harsh",
    title: "1 0n 1 Session",
    description:
      "We met in college back in 2016, and ever since, life has been one big adventure! From chasing the Northern Lights in Iceland to plunging into and learning scuba diving in Egypt, we've been living a dream and documenting it all along the way. But our journey doesn't end there.",
    price: 1500,
  },
];

const CreatorAppointments = () => {
  return (
    <section className="py-10 font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <CreatorSectionHeader
          title="Appointments"
          description="Discover our comprehensive collection of courses designed to accelerate your personal and professional growth. From mindset transformation to leadership excellence."
        />
        <div className="columns-1 md:columns-2 xl:columns-3 gap-4">
          {AppointmentsList.map((item, idx) => (
            <Card key={idx} className="mb-4 gap-1 shadow-none">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <span className="inline-flex items-center gap-2">
                      <UserRoundCog size={18} />
                      By {item.author}
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-xl">{item.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-[#4C4C4C] text-[16px]">{item.description}</p>
              </CardContent>
              <CardFooter className="flex flex-row items-center justify-between">
                <p className="font-semibold text-[16px]">₹{item.price}</p>
                <Link href={"/appointments-details"}>
                  <Button className="cursor-pointer">
                    Book Now
                    <span className="ml-2">
                      <ArrowRight />
                    </span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorAppointments;
