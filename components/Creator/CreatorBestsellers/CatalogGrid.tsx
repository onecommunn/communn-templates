"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Ui/CustomCard";
import { Button } from "@/components/Ui/button";
import { Badge } from "@/components/Ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Ui/tabs";
import {
  Clock,
  CalendarDays,
  MapPin,
  Users,
  Bookmark,
  Share2,
  Layers,
  UserRoundCog,
} from "lucide-react";

/* ---------------------- Types & Demo Data ---------------------- */

type ItemKind = "course" | "event" | "plan" | "appointment";

type Item = {
  id: string;
  kind: ItemKind;
  title: string;
  by?: string;
  priceLabel?: string; // "₹1500" | "Free" | "₹4000 / Month"
  priceStrike?: string; // "₹1249.00"
  cta: string; // "Book Now" | "Enroll Now" | "Register" | "Subscribe"
  description: string;
  image?: string;
  meta?: Array<{ icon: React.ReactNode; text: string }>;
  chips?: string[];
};

const DEMO: Item[] = [
  {
    id: "a1",
    kind: "appointment",
    title: "1 On 1 Session",
    by: "Prachi and Harsh",
    description:
      "We met in college back in 2016, and ever since, life has been one big adventure! From chasing the Northern Lights in Iceland to plunging into and learning scuba diving in Egypt, we've been living a dream and documenting it all along the way. But our journey doesn't end there.",
    priceLabel: "₹1500",
    cta: "Book Now",
    chips: ["Appointment"],
  },
  {
    id: "d4",
    kind: "plan",
    title: "Monthly Growth",
    description: "We met in college back in 2016, and ever since",
    priceLabel: "₹4000 / Month",
    cta: "Subscribe",
    image: "/assets/bestsellerImage3.jpg",
    chips: ["Plan"],
  },
  {
    id: "b2",
    kind: "course",
    title: "Big Data Concepts",
    by: "Dr. Michale Chen",
    description:
      "We met in college back in 2016, and ever since, life has been one big adventure! From chasing the Northern Lights in Iceland to plunging into and learning scuba diving in Egypt, we've been living a dream and documenting it all along the way. But our journey doesn't end there.",
    priceLabel: "₹600.00",
    priceStrike: "₹1249.00",
    cta: "Enroll Now",
    image: "/assets/bestsellerImage1.jpg",
    chips: ["Course"],
    meta: [
      { icon: <Users className="h-4 w-4" />, text: "6 Sections" },
      { icon: <Layers className="h-4 w-4" />, text: "41 Items" },
    ],
  },
  {
    id: "c3",
    kind: "event",
    title: "Monthly Growth Workshop",
    description:
      "Hands-on, practical sessions to plan your next month’s outcomes.",
    priceLabel: "Free",
    cta: "Register",
    image: "/assets/bestsellerImage2.jpg",
    chips: ["Event"],
    meta: [
      { icon: <CalendarDays className="h-4 w-4" />, text: "Mar 15, 2025" },
      { icon: <Clock className="h-4 w-4" />, text: "7:00 PM IST" },
      { icon: <MapPin className="h-4 w-4" />, text: "Virtual" },
    ],
  },

  {
    id: "e5",
    kind: "appointment",
    title: "1 On 1 Session",
    by: "Prachi and Harsh",
    description:
      "We met in college back in 2016, and ever since, life has been one big adventure! From chasing the Northern Lights in Iceland to plunging into and learning scuba diving in Egypt, we've been living a dream and documenting it all along the way. But our journey doesn't end there.",
    priceLabel: "₹1500",
    cta: "Book Now",
  },
];

/* ------------------------- Utilities -------------------------- */

const kindToCTAVariant: Record<ItemKind, "default" | "secondary" | "outline"> =
  {
    course: "default",
    event: "default",
    plan: "default",
    appointment: "default",
  };

/* ----------------------- Reusable Pieces ---------------------- */

function TopMeta({ by }: { by?: string }) {
  if (!by) return null;
  return (
    <div className="flex items-center text-muted-foreground text-sm">
      <span className="inline-flex items-center gap-2">
        <UserRoundCog size={18} />
        By {by}
      </span>
    </div>
  );
}

function ChipRow({ chips }: { chips?: string[] }) {
  if (!chips?.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((c) => (
        <Badge key={c} variant="secondary" className="rounded-full">
          {c}
        </Badge>
      ))}
    </div>
  );
}

function IconRow({ meta }: { meta?: Item["meta"] }) {
  if (!meta?.length) return null;
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
      {meta.map((m, i) => (
        <div key={i} className="inline-flex items-center gap-1.5">
          {m.icon}
          <span>{m.text}</span>
        </div>
      ))}
    </div>
  );
}

/* -------------------------- Card UI -------------------------- */

function CatalogCard({ item }: { item: Item }) {
  const hasImage = Boolean(item.image);

  return (
    <Card className="relative rounded-xl mb-4 break-inside-avoid overflow-hidden border">
      {/* Header */}

      {/* Media (taller card when image exists) */}
      {hasImage && (
        <div className="m-1 rounded-xl overflow-hidden border bg-muted">
          <div className="relative aspect-[16/9]">
            <Image
              src={item.image!}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      )}

      <CardHeader className="gap-2">
        {item.by && (
          <div className="flex items-start justify-between">
            <TopMeta by={item.by} />
          </div>
        )}

        {item.meta && (
          <div className="mb-3">
            <IconRow meta={item.meta} />
          </div>
        )}

        <CardTitle className="text-xl">{item.title}</CardTitle>
        <CardDescription className="">{item.description}</CardDescription>
      </CardHeader>

      {/* Footer */}
      <CardFooter className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold">
            {item.priceLabel ?? ""}
          </span>
          {item.priceStrike && (
            <span className="text-sm text-muted-foreground line-through">
              {item.priceStrike}
            </span>
          )}
        </div>

        <Button variant={kindToCTAVariant[item.kind]} className="shrink-0 cursor-pointer">
          {item.cta} <span className="ml-1">→</span>
        </Button>
      </CardFooter>
    </Card>
  );
}

/* -------------------------- Main View ------------------------- */

const TABS: Array<{ key: "all" | ItemKind; label: string }> = [
  { key: "all", label: "All" },
  { key: "course", label: "Courses" },
  { key: "event", label: "Events" },
  { key: "plan", label: "Plans" },
  { key: "appointment", label: "Appointments" },
];

export default function CatalogGrid({
  data = DEMO,
}: {
  data?: Item[];
}): React.JSX.Element {
  const [active, setActive] =
    React.useState<(typeof TABS)[number]["key"]>("all");

  return (
    <section className="mx-auto md:mx-10">
      <Tabs
        value={active}
        onValueChange={(v) => setActive(v as any)}
        className="w-full items-center"
      >
        {/* Filter pills */}
        <TabsList className="md:md-6 mb-12 flex h-10 w-fit flex-wrap gap-2 rounded-full bg-muted p-1">
          {TABS.map((t) => (
            <TabsTrigger
              key={t.key}
              value={t.key}
              className="rounded-full px-4 data-[state=active]:bg-[#0C0407] data-[state=active]:text-white"
            >
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {TABS.map((t) => {
          const itemsForTab =
            t.key === "all" ? data : data.filter((i) => i.kind === t.key);

          return (
            <TabsContent key={t.key} value={t.key} className="m-0">
              {/* Masonry columns: mobile 1, md 2, xl 3 */}
              <div className="columns-1 md:columns-2 xl:columns-3 gap-4">
                {itemsForTab.map((item) => (
                  <CatalogCard key={item.id} item={item} />
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Button variant="secondary" className="rounded-full px-6 cursor-pointer">
                  View More →
                </Button>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
}
