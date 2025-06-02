import { builder, Builder } from "@builder.io/react";
import Header from "./components/layout/Header/Header";
import { Hero } from "./components/layout/Hero/Hero";
import Footer from "./components/layout/Footer/Footer";
import { MapCard } from "./components/layout/Map/MapCard";
import { ImageCard } from "./components/layout/ImageCard/ImageCard";
import { FeaturedCard } from "./components/layout/FeaturedCard/FeaturedCard";
import { Form } from "./components/layout/Form/Form";
import { TherapistCard } from "./components/layout/TherapistCard/TherapistCard";
import { TherapistGrid } from "./components/layout/TherapistGrid/TherapistGrid";
import { Questionnaire } from "./components/layout/Questioner/Questionnaire";
import { Logos } from "./components/layout/LogosContainer/Logos";
import { TestimonialSection } from "./components/layout/TestimonialCarousel/Testimonial";
import { AboutSection } from "./components/layout/AboutSection/AboutSection";
import { CheckSchedule } from "./components/layout/CheckSchedule/CheckSchedule";
import { PriceCard } from "./components/layout/PriceCard/PriceCard";
import BannerCard from "./components/layout/Banner/BannerCard";
import TimeTable from "./components/layout/TimeTable/TimeTable";
import { ProductCard } from "./components/layout/ProductCard/ProductCard";
import { HomeHero } from "./components/layout/HomeSections/HomeHero/HomeHero";
import { HomeAboutSection } from "./components/layout/HomeSections/HomeAboutSection/HomeAboutSection";
import { VisionMission } from "./components/layout/HomeSections/VisionMission/VissionMission";
import { BookYoga } from "./components/layout/HomeSections/BookYoga/BookYoga";
import { ContactForm } from "./components/layout/HomeSections/Form/HomeForm";
import { VerticalCarousel } from "./components/layout/VerticalCarousel/VerticalCarousel";
import { Card } from "./components/layout/Card/Card";
import { LocationCard } from "./components/layout/Card/Location/LocationCard";
import PricesAndPackages from "./components/layout/HomeSections/HomePriceCards/PricesAndPackages";
import Gallery from "./components/layout/HomeSections/ProductGallery/Gallery";
import Button from "./components/Button/Button";
import Nav from "./components/layout/Ecommerce/Nav/Nav";
import EcomHero from "./components/layout/Ecommerce/Hero/EcomHero";
import EcomCategory from "./components/layout/Ecommerce/CategorySection/EcomCategory";
import LatestCollections from "./components/layout/Ecommerce/LatestCollections/LatestCollections";
import ProductCarousel from "./components/layout/Ecommerce/ProductRail/ProductRail";
import EcomFooter from "./components/layout/Ecommerce/Footer/EcomFooter";
import OneCommunnHeader from "./components/OneCommunn/Home/Header/OnecommunHeader";
import HomeBanner from "./components/OneCommunn/Home/HomeBanner/HomeBanner";
import HomeSectionTwo from "./components/OneCommunn/Home/HomeSectionTwo/HomeSectionTwo";
import HomeUseCases from "./components/OneCommunn/Home/HomeUseCases/HomeUseCases";
import HomeContentWithImage from "./components/OneCommunn/Home/HomeContentwithImageLeft/HomeContentwithImageLeft";
import HomeContentWithImageRight from "./components/OneCommunn/Home/HomeContentWithImageRight/HomeContentWithImageRight";
import { Faq } from "./components/OneCommunn/Home/Faq/Faq";
import CommunnFooter from "./components/OneCommunn/Home/Footer/CommunnFooter";
import Features from "./components/OneCommunn/Dashboard/Features/Features";
import LandingPage from "./components/OneCommunn/Usecases/LandingPage/LandingPage";
import LandingTab from "./components/OneCommunn/Usecases/LandingTab/LandingTab";
import ContentImage from "./components/OneCommunn/Usecases/ContentImage/ContentImage";
import LandingBox from "./components/OneCommunn/Usecases/LandingBox/LandingBox";
import CommunnAbountUs from "./components/OneCommunn/AboutUs/CommunnAbountUs";
import CommunnContactUs from "./components/OneCommunn/ContactUs/CommunnContactUs";
import YogastHeader from "./components/Yogast/Header/YogastHeader";
import YogastHero from "./components/Yogast/YogastHero/YogastHero";
import YogastClassesSection from "./components/Yogast/YogastClassesSection/YogastClassesSection";
import YogastInfoSection from "./components/Yogast/YogastInfoSection/YogastInfoSection";
import YogastScheduleSection from "./components/Yogast/YogastScheduleSection/YogastScheduleSection";
import YogastPricingSection from "./components/Yogast/YogastPricingSection/YogastPricingSection";
import YogastContactSection from "./components/Yogast/YogastContactSection/YogastContactSection";
import YogastTestimonialsSection from "./components/Yogast/YogastTestimonialsSection/YogastTestimonialsSection";
import YogastNewsletterSection from "./components/Yogast/YogastNewsletterSection/YogastNewsletterSection";
import YogastFooter from "./components/Yogast/YogastFooter/YogastFooter";
import YogastAbout from "./components/Yogast/YogastAbout/YogastAbout";
import YogastFeatures from "./components/Yogast/YogastFeatures/YogastFeatures";
import YogastPricing from "./components/Yogast/YogastPricing/YogastPricing";
import { title } from "process";
import YuvaaHeader from "./components/Yuvaa/YuvaaHeader/YuvaaHeader";
import YuvaaHeroSection from "./components/Yuvaa/YuvaaHeroSection/YuvaaHeroSection";
import YuvaaFeatures from "./components/Yuvaa/YuvaaFeatures/YuvaaFeatures";
import YuvaaFeaturesSection from "./components/Yuvaa/YuvaaFeaturesSection/YuvaaFeaturesSection";
import YuvaaWorkoutSection from "./components/Yuvaa/YuvaaWorkoutSection/YuvaaWorkoutSection";
import YuvaaServicesSection from "./components/Yuvaa/YuvaaServicesSection/YuvaaServicesSection";
import YuvaaTestimonialsSection from "./components/Yuvaa/YuvaaTestimonialsSection/YuvaaTestimonialsSection";
import YuvaaCtaSection from "./components/Yuvaa/YuvaaCtaSection/YuvaaCtaSection";
import YuvaaFooter from "./components/Yuvaa/YuvaaFooter/YuvaaFooter";
import YuvaaAbout from "./components/Yuvaa/YuvaaAbout/YuvaaAbout";
import YuvaaPricing from "./components/Yuvaa/YuvaaPricing/YuvaaPricing";

import * as LucideIcons from "lucide-react";
import YuvaaTeamSection from "./components/Yuvaa/YuvaaAbout/YuvaaTeamSection";
import YuvaaJoinUsCTA from "./components/Yuvaa/YuvaaAbout/YuvaaJoinUsCTA";
import YuvaaFAQSection from "./components/Yuvaa/YuvaaPricing/YuvaaFAQSection";
import YuvaaLogin from "./components/Yuvaa/YuvaaLogin/YuvaaLogin";
import YuvaaSignup from "./components/Yuvaa/YuvaaSignup/YuvaaSignup";
import AutoLogin from "./components/Yuvaa/YuvaaLogin/auto-login";
import YuvaaSubscriptions from "./components/Yuvaa/YuvaaSubscriptions/YuvaaSubscriptions";
import YuvaaContact from "./components/Yuvaa/YuvaaContact/YuvaaContact";
import YuvaaCourses from "./components/Yuvaa/YuvaaCourses/YuvaaCourses";
import YuvaaEvents from "./components/Yuvaa/YuvaaEvents/YuvaaEvents";

//import Header from "./components/layout/header";
//import ContactUs from "./components/ContactUs";
//
// Builder.registerComponent(Header, {
//   name: "Header",
//   inputs: [
//     { name: "text", type: "string", defaultValue: "Hello, Builder!" },
//     {
//       name: "Our Mission",
//       type: "string",
//       defaultValue: "This is a header component.",
//     },
//   ],
// });
//
// Builder.registerComponent(ContactUs, {
//     name: "Contact US",
//   },
// );

Builder.registerComponent(Header, {
  name: "Header",
  inputs: [
    {
      name: "logo",
      type: "object",
      defaultValue: {
        src: "https://via.placeholder.com/150",
        alt: "Default Logo",
        width: 150,
        height: 50,
      },
      subFields: [
        {
          name: "src",
          type: "file",
          required: true,
          helperText: "Logo image source URL",
        },
        {
          name: "alt",
          type: "string",
          required: true,
          helperText: "Alternative text for the logo",
        },
        {
          name: "width",
          type: "number",
          required: true,
          helperText: "Logo width",
        },
        {
          name: "height",
          type: "number",
          required: true,
          helperText: "Logo height",
        },
      ],
    },
    {
      name: "links",
      type: "list",
      defaultValue: [
        {
          label: "Home",
          url: "/",
        },
        {
          label: "About",
          url: "/about",
        },
      ],
      subFields: [
        {
          name: "label",
          type: "string",
          required: true,
          helperText: "Label for the link",
        },
        {
          name: "url",
          type: "string",
          required: true,
          helperText: "URL for the link",
        },
        {
          name: "subLinks",
          type: "list",
          subFields: [
            {
              name: "label",
              type: "string",
              required: true,
              helperText: "Label for the sublink",
            },
            {
              name: "url",
              type: "string",
              required: true,
              helperText: "URL for the sublink",
            },
          ],
          helperText: "Optional dropdown sublinks for this link",
        },
      ],
    },
    {
      name: "buttons",
      type: "list",
      defaultValue: [
        { label: "Sign Up", url: "/signup" },
        { label: "Login", url: "/login" },
      ],
      subFields: [
        {
          name: "label",
          type: "string",
          required: true,
          helperText: "Label for the button",
        },
        {
          name: "url",
          type: "string",
          required: true,
          helperText: "URL for the button",
        },
      ],
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#D0B191",
      friendlyName: "Background Color",
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "#27282C",
      friendlyName: "Text Color",
    },
  ],
});

Builder.registerComponent(Footer, {
  name: "Footer",
  inputs: [
    {
      name: "newsletterPlaceholder",
      type: "string",
      defaultValue: "email here",
      friendlyName: "Newsletter Placeholder",
    },
    {
      name: "footer-logo",
      type: "object",
      defaultValue: {
        src: "https://via.placeholder.com/150",
        alt: "Default Logo",
        width: 150,
        height: 50,
      },
      subFields: [
        {
          name: "src",
          type: "file",
          required: true,
          helperText: "Logo image source URL",
        },
        {
          name: "alt",
          type: "string",
          required: true,
          helperText: "Alternative text for the logo",
        },
        {
          name: "width",
          type: "number",
          required: true,
          helperText: "Logo width",
        },
        {
          name: "height",
          type: "number",
          required: true,
          helperText: "Logo height",
        },
      ],
    },
    {
      name: "contactInfo",
      type: "object",
      subFields: [
        { name: "address", type: "string" },
        { name: "city", type: "string" },
        { name: "pincode", type: "string" },
        { name: "phone", type: "string" },
        { name: "email", type: "string" },
      ],
      friendlyName: "Contact Information",
    },
    {
      name: "sections",
      type: "list",
      subFields: [
        { name: "title", type: "string" },
        {
          name: "links",
          type: "list",
          subFields: [
            { name: "label", type: "string" },
            { name: "url", type: "string" },
            { name: "external", type: "boolean", defaultValue: false },
          ],
        },
      ],
      friendlyName: "Sections",
    },
    {
      name: "socialLinks",
      type: "list",
      subFields: [
        { name: "platform", type: "string" },
        { name: "url", type: "string" },
      ],
      friendlyName: "Social Links",
    },
    {
      name: "copyrightText",
      type: "string",
      friendlyName: "Copyright Text",
    },
    {
      name: "legalLinks",
      type: "list",
      subFields: [
        { name: "label", type: "string" },
        { name: "url", type: "string" },
      ],
      friendlyName: "Legal Links",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#D0B191",
      friendlyName: "Background Color",
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "#27282C",
      friendlyName: "Text Color",
    },
    {
      name: "accentColor",
      type: "color",
      defaultValue: "#27282C",
      friendlyName: "Accent Color",
    },
  ],
});

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
      defaultValue: "Welcome to Our Site",
      friendlyName: "Hero Title",
    },
    {
      name: "breadcrumb",
      type: "string",
      required: false,
      defaultValue: "Home • Home",
      friendlyName: "Breadcrumb Text",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#D4CBC2",
      friendlyName: "Background Color",
    },
  ],
});

Builder.registerComponent(LocationCard, {
  name: "LocationCard", // The name of the component in Builder.io
  inputs: [
    {
      name: "contactInfo",
      type: "list", // This allows for an array of objects
      // Define the structure of the items in the list
      subFields: [
        {
          name: "city",
          type: "string",
          required: true,
        },
        {
          name: "address",
          type: "string",
          required: true,
        },
        {
          name: "phone1",
          type: "string",
          required: false,
        },
        {
          name: "phone2",
          type: "string",
          required: false,
        },
        {
          name: "email",
          type: "string",
          required: false,
        },
        {
          name: "maplink",
          type: "url",
          required: false,
        },
      ],
    },
    {
      name: "onLocationSelect",
      type: "string", // You might want to define how this is handled
      required: false,
    },
  ],
});

Builder.registerComponent(MapCard, {
  name: "MapCard",
  inputs: [
    {
      name: "location",
      type: "object",
      required: true,
      subFields: [
        {
          name: "city",
          type: "string",
          required: true,
          defaultValue: "Bangalore",
        },
        {
          name: "mapLink",
          type: "string",
          required: true,
          defaultValue: "https://maps.app.goo.gl/xyz",
        },
      ],
    },
  ],
});

Builder.registerComponent(ImageCard, {
  name: "ImageCard",
  inputs: [
    {
      name: "src",
      type: "file",
      defaultValue: "https://placehold.co/300x300",
      required: true,
    },
    {
      name: "alt",
      type: "string",
      defaultValue: "Placeholder image",
      required: true,
    },
    {
      name: "height",
      type: "string",
      defaultValue: "300px",
    },
    {
      name: "width",
      type: "string",
      defaultValue: "100%",
    },
  ],
});

Builder.registerComponent(FeaturedCard, {
  name: "FeaturedCard",
  inputs: [
    {
      name: "name",
      type: "string",
      defaultValue: "Therapist Name",
      required: true,
    },
    {
      name: "role",
      type: "string",
      defaultValue: "Role (e.g., Yoga Instructor)",
    },
    {
      name: "description",
      type: "string",
      defaultValue: "Therapist description",
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      defaultValue: "https://placehold.co/150x150",
      required: true,
    },
    {
      name: "socialLinks",
      type: "object",
      subFields: [
        { name: "fb", type: "string", defaultValue: "FB" },
        { name: "tw", type: "string", defaultValue: "TW" },
        { name: "yu", type: "string", defaultValue: "YU" },
        { name: "in", type: "string", defaultValue: "IN" },
      ],
    },
  ],
});

Builder.registerComponent(Form, {
  name: "ContactForm", // The name of the component in Builder.io
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
    },
    {
      name: "formDescription",
      type: "string",
      required: false,
    },
    {
      name: "fields",
      type: "list", // Allows for an array of objects
      subFields: [
        {
          name: "name",
          type: "string",
          required: true,
        },
        {
          name: "type",
          type: "string",
          required: true,
          enum: ["text", "email", "tel", "textarea"], // Allow textarea for message box
        },
        {
          name: "placeholder",
          type: "string",
          required: false,
        },
      ],
    },
    {
      name: "showMessageBox",
      type: "boolean",
      required: false,
      defaultValue: true, // Default to true
    },
    {
      name: "selectedLocation",
      type: "object", // Assuming this is an object; adjust as necessary
      subFields: [
        {
          name: "email",
          type: "string",
          required: false,
        },
        // Add more fields from selectedLocation as needed
      ],
    },
  ],
});

Builder.registerComponent(TherapistCard, {
  name: "TherapistCard",
  inputs: [
    {
      name: "name",
      type: "string",
      defaultValue: "John Doe",
      required: true,
    },
    {
      name: "title",
      type: "string",
      defaultValue: "Therapist",
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpg", "png", "svg"],
      defaultValue: "https://placehold.co/300x300",
    },
    {
      name: "onClick",
      type: "function",
      helperText: "Optional click handler for custom functionality",
      advanced: true, // Marks this prop as advanced, making it hidden by default in the UI
    },
  ],
});

Builder.registerComponent(TherapistGrid, {
  name: "TherapistGrid",
  inputs: [
    {
      name: "Therapist",
      type: "list",
      subFields: [
        {
          name: "name",
          type: "string",
          defaultValue: "Therapist Name",
          required: true,
        },
        {
          name: "title",
          type: "string",
          defaultValue: "Role (e.g., Yoga Instructor)",
        },
        {
          name: "description",
          type: "string",
          defaultValue: "Therapist description",
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
          required: true,
        },
        {
          name: "socialLinks",
          type: "object",
          subFields: [
            { name: "fb", type: "string", defaultValue: "FB" },
            { name: "tw", type: "string", defaultValue: "TW" },
            { name: "yu", type: "string", defaultValue: "YU" },
            { name: "in", type: "string", defaultValue: "IN" },
          ],
        },
      ],
      defaultValue: [
        {
          name: "Therapist 1",
          title: "Yoga Instructor",
          description: "Therapist 1 description",
          image: "https://placehold.co/300x300",
          socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" },
        },
        {
          name: "Therapist 2",
          title: "Yoga Instructor",
          description: "Therapist 2 description",
          image: "https://placehold.co/300x300",
          socialLinks: { fb: "FB", tw: "TW", yu: "YU", in: "IN" },
        },
      ],
    },
    {
      name: "onSelectTherapist",
      type: "function",
      required: true,
      defaultValue: () => alert("Therapist Selected!"),
    },
  ],
});

Builder.registerComponent(Questionnaire, {
  name: "Questionnaire",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "FAQ",
      required: true,
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Find answers to your most frequently asked questions below.",
    },
    {
      name: "question",
      type: "list",
      subFields: [
        {
          name: "question",
          type: "string",
          defaultValue: "What is your question?",
          required: true,
        },
        {
          name: "answer",
          type: "string",
          defaultValue: "Answer",
        },
      ],

      defaultValue: [
        {
          question: "What is Builder.io?",
          answerTitle: "Introduction",
          answerContent1: "Builder.io is a visual development platform.",
          answerContent2: "It allows you to create and edit content visually.",
        },
        {
          question: "How do I use Builder.io?",
          answerTitle: "Getting Started",
          answerContent1:
            "You can integrate Builder.io into your project and start editing visually.",
          answerContent2: "",
        },
      ],
    },
  ],
});

Builder.registerComponent(Logos, {
  name: "Logos",
  inputs: [
    {
      name: "Logos",
      type: "list",
      subFields: [
        {
          name: "src",
          type: "file",
          allowedFileTypes: ["svg", "png", "jpg", "jpeg"],
          required: true,
          defaultValue: "/default-logo.png",
          helperText: "Upload or select the logo image.",
        },
        {
          name: "alt",
          type: "string",
          required: true,
          defaultValue: "Logo",
          helperText:
            "Provide a description for the logo image (for accessibility).",
        },
      ],
    },
  ],
});

Builder.registerComponent(TestimonialSection, {
  name: "TestimonialSection",
  inputs: [
    {
      name: "Testimonials",
      type: "list",
      subFields: [
        {
          name: "src",
          type: "file",
          allowedFileTypes: ["svg", "png", "jpg", "jpeg"],
          required: true,
          defaultValue: "/default-image.png",
          helperText: "Upload or select the image for the testimonial.",
        },
        {
          name: "alt",
          type: "string",
          required: true,
          defaultValue: "Testimonial image",
          helperText:
            "Provide a description for the testimonial image (for accessibility).",
        },
        {
          name: "text",
          type: "string",
          required: true,
          defaultValue: "This is a great product!",
          helperText: "The testimonial text or quote.",
        },
        {
          name: "author",
          type: "string",
          required: true,
          defaultValue: "John Doe",
          helperText: "The name of the person giving the testimonial.",
        },
        {
          name: "role",
          type: "string",
          required: true,
          defaultValue: "CEO at Company",
          helperText:
            "The role or position of the person giving the testimonial.",
        },
      ],
    },
  ],
});

Builder.registerComponent(AboutSection, {
  name: "AboutSection",
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "About Our Services",
      friendlyName: "Heading",
      required: true,
    },
    {
      name: "subHeading",
      type: "string",
      defaultValue: "Discover",
      friendlyName: "Sub Heading",
      required: false,
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Book Appointment",
      friendlyName: "Button Text",
      required: true,
    },
    {
      name: "features",
      type: "list",
      subFields: [
        {
          name: "icon",
          type: "file",
          allowedFileTypes: ["svg", "png", "jpg", "jpeg"],
          defaultValue: "./logo/stress-relife.svg",
          friendlyName: "Feature Icon",
        },
        {
          name: "title",
          type: "string",
          defaultValue: "Feature Title",
          friendlyName: "Feature Title",
          required: true,
        },
        {
          name: "description",
          type: "text",
          defaultValue: "Feature Description",
          friendlyName: "Feature Description",
        },
      ],
      defaultValue: [
        {
          icon: "./logo/stress-relife.svg",
          title: "Stress Relief",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          icon: "./logo/calm-mind.svg",
          title: "Calm Mind",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          icon: "./logo/life-style.svg",
          title: "Life Style",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          icon: "./logo/healty-body.svg",
          title: "Healthy Body",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
      ],
      friendlyName: "Features",
      required: true,
    },
  ],
});

Builder.registerComponent(CheckSchedule, {
  name: "CheckSchedule",
  inputs: [
    {
      name: "heading",
      type: "string",
      required: true,
      defaultValue: "Shape Your Perfect Body",
    },
    {
      name: "description",
      type: "text",
      required: true,
      defaultValue:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "buttonText",
      type: "string",
      required: true,
      defaultValue: "Check Schedule",
    },
    {
      name: "healedPeople",
      type: "number",
      required: true,
      defaultValue: 8,
    },
    {
      name: "coachingExperience",
      type: "number",
      required: true,
      defaultValue: 10,
    },
    {
      name: "circleText",
      type: "string",
      required: true,
      defaultValue: "Calm & Relax",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Book Appointment",
      friendlyName: "Button Text",
      required: true,
    },
  ],
});

Builder.registerComponent(PriceCard, {
  name: "PriceCard", // This is the name you'll use in Builder.io
  inputs: [
    {
      name: "pricingData",
      type: "list", // Specify that this will be a list of items
      // Define the fields that each item in the list will have
      subFields: [
        {
          name: "title",
          type: "string",
          required: true,
          helperText: "The title of the pricing package",
        },
        {
          name: "trainingCount",
          type: "number",
          required: true,
          helperText: "The number of training sessions",
        },
        {
          name: "schedule",
          type: "string",
          required: true,
          helperText: "The schedule of the training",
        },
        {
          name: "trainer",
          type: "string",
          required: true,
          helperText: "The trainer for this package",
        },
        {
          name: "description",
          type: "string",
          required: true,
          helperText: "A brief description of the pricing package",
        },
        {
          name: "price",
          type: "number",
          required: true,
          helperText: "The price of the package",
        },
        {
          name: "includeTax",
          type: "string",
          required: true,
          helperText: "Details about tax inclusion",
        },
      ],
    },
  ],
});

Builder.registerComponent(BannerCard, {
  name: "Banner Card", // Name to be displayed in Builder.io
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
      helperText: "Title of the banner",
    },
    {
      name: "subtitle",
      type: "string",
      required: true,
      helperText: "Subtitle of the banner",
    },
    {
      name: "buttonText",
      type: "string",
      required: true,
      helperText: "Text for the button",
    },
    {
      name: "link",
      type: "string",
      required: false,
      helperText: "URL to navigate when the button is clicked",
    },
    {
      name: "description",
      type: "string",
      required: false,
      helperText: "Description text under the image",
    },
  ],
});

Builder.registerComponent(TimeTable, {
  name: "TimeTable",
  inputs: [
    {
      name: "TimeTables",
      type: "list",
      subFields: [
        {
          name: "title",
          type: "string",
          required: true,
          defaultValue: "Time Table Title",
        },
        {
          name: "times",
          type: "list",
          subFields: [
            {
              name: "time",
              type: "string",
              required: true,
            },
          ],
        },
        {
          name: "days",
          type: "list",
          subFields: [
            {
              name: "day",
              type: "string",
              required: true,
            },
          ],
        },
        {
          name: "link",
          type: "url",
          required: false,
        },
        {
          name: "buttonText",
          type: "string",
          required: false,
          defaultValue: "Learn More",
        },
      ],
    },
  ],
});

Builder.registerComponent(ProductCard, {
  name: "ProductCard",
  inputs: [
    {
      name: "products",
      type: "list",
      subFields: [
        { name: "name", type: "string", defaultValue: "Product Name" },
        { name: "price", type: "number", defaultValue: 0 },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png"],
          defaultValue: "",
        },
        { name: "link", type: "url", defaultValue: "" },
      ],
    },
    {
      name: "viewAllLink",
      type: "url",
      helperText: "Shop Link",
      defaultValue: "/shop",
    },
  ],
});

Builder.registerComponent(HomeAboutSection, {
  name: "HomeAboutSection",
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
      defaultValue: "Welcome to Our Platform",
    },
    {
      name: "name",
      type: "string",
      required: true,
      defaultValue: "Our Story",
    },
    {
      name: "description",
      type: "text",
      required: true,
      defaultValue: "Discover who we are and what we do.",
    },
    {
      name: "video",
      type: "file",
      allowedFileTypes: ["mp4"],
      required: true,
    },
    {
      name: "ButtonUrl",
      type: "string",
      helperText: "URL for the contact button",
    },
    {
      name: "onContactClick",
      type: "function",
      helperText: "Optional click handler for the contact button",
    },
  ],
});

Builder.registerComponent(HomeHero, {
  name: "HomeHero",
  inputs: [
    {
      name: "slides",
      type: "list",
      subFields: [
        { name: "title", type: "string", defaultValue: "Slide Title" },
        { name: "description", type: "string", defaultValue: "Description" },
        { name: "contextBtnText", type: "string", defaultValue: "Explore Now" },
        { name: "contextBtnLink", type: "url", defaultValue: "/explore" },
        {
          name: "propertiesBtnText",
          type: "string",
          defaultValue: "View all properties",
        },
        { name: "propertiesBtnLink", type: "url", defaultValue: "/properties" },
        { name: "videoTitle", type: "string", defaultValue: "Video Title" },
        { name: "videoLink", type: "url", defaultValue: "https://video.com" },
      ],
    },
    {
      name: "autoSlide",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "slideInterval",
      type: "number",
      defaultValue: 3000,
    },
    {
      name: "backgroundColor",
      type: "string",
      defaultValue: "#ffffff",
      friendlyName: "Background Color",
    },
  ],
});

Builder.registerComponent(VisionMission, {
  name: "VisionMission",
  inputs: [
    {
      name: "vision",
      type: "string",
      defaultValue: "Our vision is to promote holistic wellness through yoga.",
    },
    {
      name: "mission",
      type: "string",
      defaultValue: "Our mission is to make yoga accessible to everyone.",
    },
    {
      name: "instructorName",
      type: "string",
      defaultValue: "John Doe",
    },
    {
      name: "yogaType",
      type: "string",
      defaultValue: "Hatha Yoga",
    },
    {
      name: "schedule",
      type: "string",
      defaultValue: "Monday - Friday, 8:00 AM to 10:00 AM",
    },
    {
      name: "appointmentLink",
      type: "string",
      defaultValue: "/",
    },
  ],
});

Builder.registerComponent(BookYoga, {
  name: "BookYoga",
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "Book a Yoga Session",
      required: true,
    },
    {
      name: "description",
      type: "string",
      defaultValue: "Join us for an amazing yoga experience",
    },
    {
      name: "contactInfo",
      type: "object",
      subFields: [
        { name: "phone", type: "string", defaultValue: "+123 456 789" },
        { name: "email", type: "string", defaultValue: "info@example.com" },
      ],
    },
    {
      name: "onEmailSubmit",
      type: "function",
      defaultValue: (email: string) => alert(`Email submitted: ${email}`),
    },
  ],
});

Builder.registerComponent(ContactForm, {
  name: "HomeContactForm",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Contact Us",
      required: true,
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue: "Get in touch with us!",
    },
    {
      name: "fields",
      type: "list",
      subFields: [
        {
          name: "name",
          type: "string",
          required: true,
        },
        {
          name: "type",
          type: "string",
          enum: ["text", "tel", "email", "textarea", "date"],
          required: true,
          defaultValue: "text",
        },
        {
          name: "placeholder",
          type: "string",
        },
        {
          name: "required",
          type: "boolean",
          defaultValue: false,
        },
      ],
      defaultValue: [
        { name: "name", type: "text", placeholder: "Name", required: true },
        { name: "phone", type: "tel", placeholder: "Phone No", required: true },
        { name: "email", type: "email", placeholder: "Email", required: true },
        {
          name: "message",
          type: "textarea",
          placeholder: "Enter your message",
          required: false,
        },
      ],
    },
  ],
});

Builder.registerComponent(VerticalCarousel, {
  name: "Vertical Carousel",
  inputs: [
    {
      name: "images",
      type: "list",
      subFields: [],
      defaultValue: [
        "https://upload-community-files.s3.ap-south-1.amazonaws.com/66fe765b7433f90b2c92f315_banner.webp",
      ],
    },
    {
      name: "interval",
      type: "number",
      defaultValue: 3000,
      helperText: "Interval time between slides in milliseconds.",
    },
    { name: "title", type: "string", defaultValue: "Default Title" },
    { name: "subtitle", type: "string", defaultValue: "Default Subtitle" },
    { name: "BtnText", type: "string", defaultValue: "Click Me" },
    { name: "BtnLink", type: "url", defaultValue: "https://example.com" },
    {
      name: "showControls",
      type: "boolean",
      defaultValue: true,
      helperText: "Show or hide control buttons.",
    },
    {
      name: "autoSlide",
      type: "boolean",
      defaultValue: true,
      helperText: "Enable or disable automatic sliding.",
    },
  ],
});

Builder.registerComponent(Card, {
  name: "Card",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Card Title",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue: "Card Subtitle",
    },
    {
      name: "descriptions",
      type: "string",
      defaultValue: "This is the description text of the card.",
    },
    {
      name: "email",
      type: "string",
      defaultValue: "example@example.com",
    },
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpg", "png", "svg"],
      defaultValue: "https://via.placeholder.com/150",
    },
    {
      name: "alt",
      type: "string",
      defaultValue: "Image description",
    },
    {
      name: "width",
      type: "string",
      defaultValue: "auto",
    },
    {
      name: "height",
      type: "string",
      defaultValue: "auto",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#fff",
    },
    {
      name: "children",
      type: "uiBlocks",
      defaultValue: [],
    },
  ],
});

Builder.registerComponent(PricesAndPackages, {
  name: "Home Priceing Cards",
  inputs: [
    {
      name: "pricingData",
      type: "list", // Specify that this will be a list of items
      // Define the fields that each item in the list will have
      subFields: [
        {
          name: "title",
          type: "string",
          required: true,
          helperText: "The title of the pricing package",
        },
        {
          name: "trainingCount",
          type: "number",
          required: true,
          helperText: "The number of training sessions",
        },
        {
          name: "schedule",
          type: "string",
          required: true,
          helperText: "The schedule of the training",
        },
        {
          name: "trainer",
          type: "string",
          required: true,
          helperText: "The trainer for this package",
        },
        {
          name: "description",
          type: "string",
          required: true,
          helperText: "A brief description of the pricing package",
        },
        {
          name: "price",
          type: "number",
          required: true,
          helperText: "The price of the package",
        },
        {
          name: "includeTax",
          type: "string",
          required: true,
          helperText: "Details about tax inclusion",
        },
        {
          name: "isHighlighted",
          type: "boolean",
          required: true,
          helperText: "Which card should be highlighted",
        },
      ],
    },
  ],
});

Builder.registerComponent(Gallery, {
  name: "ProductGallery",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Gallery",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue:
        "Duis aute irure dolor in reprehenderit in voluptate eu fugiat nulla pariatur.",
    },
    {
      name: "items",
      type: "list",
      subFields: [
        {
          name: "price",
          type: "string",
        },
        {
          name: "name",
          type: "string",
        },
      ],
    },
    {
      name: "viewAllButtonText",
      type: "string",
      defaultValue: "View All",
    },
  ],
});

Builder.registerComponent(Button, {
  name: "Custom Button",
  inputs: [
    {
      name: "text",
      type: "string",
      helperText: "Text in the button",
      required: true,
    },
    {
      name: "width",
      type: "number",
      helperText: "Give width of the text",
      defaultValue: 100,
    },
    {
      name: "height",
      type: "number",
      defaultValue: 50,
      helperText: "Give height of the text",
    },
    {
      name: "keepArrow",
      type: "boolean",
      defaultValue: true,
      required: true,
    },
  ],
});
Builder.registerComponent(Nav, {
  name: "Ecom NavBar",
  inputs: [
    {
      name: "logo",
      type: "file",
      required: true,
    },
    {
      name: "menuList",
      type: "list",
      subFields: [
        {
          name: "itemtext",
          type: "string",
        },
        {
          name: "link",
          type: "string",
        },
      ],
    },
    {
      name: "showScrollMenu",
      type: "boolean",
    },
    {
      name: "scrollMenu",
      type: "list",
      subFields: [
        {
          name: "itemtext",
          type: "string",
        },
        {
          name: "link",
          type: "string",
        },
      ],
    },
  ],
});

Builder.registerComponent(EcomHero, {
  name: "Ecom Hero",
  inputs: [
    {
      name: "slides",
      type: "list",
      subFields: [
        {
          name: "imageUrl",
          type: "file",
        },
        {
          name: "link",
          type: "string",
        },
      ],
    },
  ],
});

Builder.registerComponent(EcomCategory, {
  name: "Ecom Category",
  inputs: [
    {
      name: "categoryName",
      type: "string",
      required: true,
    },
    {
      name: "imagesList",
      type: "list",
      subFields: [
        {
          name: "imageUrl",
          type: "file",
        },
        {
          name: "link",
          type: "string",
        },
      ],
    },
  ],
});

Builder.registerComponent(LatestCollections, {
  name: "Latest Collections",
  inputs: [
    {
      name: "collectionsImages",
      type: "list",
      subFields: [
        {
          name: "text",
          type: "string",
        },
        {
          name: "imageUrl",
          type: "file",
        },
        {
          name: "path",
          type: "string",
        },
      ],
    },
  ],
});

Builder.registerComponent(ProductCarousel, {
  name: "Ecom Product Carousel",
  inputs: [
    {
      name: "collection",
      type: "object",
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "path",
          type: "string",
        },
      ],
    },
    {
      name: "products",
      type: "list",
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "subtitle",
          type: "string",
        },
        {
          name: "price",
          type: "number",
        },
        {
          name: "discountPrice",
          type: "number",
        },
        {
          name: "path",
          type: "string",
        },
        {
          name: "image",
          type: "file",
        },
      ],
    },
  ],
});

Builder.registerComponent(EcomFooter, {
  name: "Ecom Footer",
  inputs: [
    {
      name: "productCategories",
      type: "list",
      subFields: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "path",
          type: "string",
        },
      ],
    },
    {
      name: "collections",
      type: "list",
      subFields: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "path",
          type: "string",
        },
      ],
    },
  ],
});

Builder.registerComponent(OneCommunnHeader, {
  name: "Communn Header",
  inputs: [
    {
      name: "logo",
      type: "file",
    },
  ],
});

Builder.registerComponent(HomeBanner, {
  name: "Communn Home Banner",
});

Builder.registerComponent(HomeSectionTwo, {
  name: "Communn Home section two",
});

Builder.registerComponent(HomeUseCases, {
  name: "Commun Home usecases",
});

Builder.registerComponent(HomeContentWithImage, {
  name: "Home Content With Image",
  inputs: [
    {
      name: "image",
      type: "file",
      required: true,
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
  ],
});

Builder.registerComponent(HomeContentWithImageRight, {
  name: "Home Component with image Right",
  inputs: [
    {
      name: "image",
      type: "file",
      required: true,
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
  ],
});
Builder.registerComponent(Faq, {
  name: "Communn Faq",
  inputs: [
    {
      name: "faqData",
      type: "list",
      subFields: [
        {
          name: "question",
          type: "string",
        },
        {
          name: "answer",
          type: "string",
        },
      ],
    },
  ],
});

Builder.registerComponent(CommunnFooter, {
  name: "Communn Footer",
});

Builder.registerComponent(Features, {
  name: "Communn Features",
  inputs: [
    {
      name: "features",
      type: "list",
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
        {
          name: "image",
          type: "file",
        },
      ],
    },
    {
      name: "featureData",
      type: "list",
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
        {
          name: "image",
          type: "file",
        },
      ],
    },
    {
      name: "banner1",
      type: "file",
    },
    {
      name: "banner2",
      type: "file",
    },
    {
      name: "sectionTitle",
      type: "string",
    },
    {
      name: "sectionSubTitle",
      type: "string",
    },
    {
      name: "sectionHeading",
      type: "string",
    },
  ],
});

Builder.registerComponent(LandingPage, {
  name: "Communn landing page",
  inputs: [
    {
      name: "featureData",
      type: "list",
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
        {
          name: "image",
          type: "file",
        },
        {
          name: "list1",
          type: "string",
        },
        {
          name: "list2",
          type: "string",
        },
        {
          name: "list3",
          type: "string",
        },
      ],
    },
    {
      name: "banner1",
      type: "file",
    },
    {
      name: "banner2",
      type: "file",
    },
    {
      name: "banner3",
      type: "file",
    },
    {
      name: "banner4",
      type: "file",
    },
    {
      name: "pageDescription",
      type: "string",
    },
    {
      name: "pageSubTitle",
      type: "string",
    },
    {
      name: "bonus",
      type: "string",
    },
    {
      name: "bonusFirstHeading",
      type: "string",
    },
    {
      name: "bonusSubheading",
      type: "string",
    },
    {
      name: "bonusHeading1",
      type: "string",
    },
    {
      name: "bonusHeading2",
      type: "string",
    },
    {
      name: "bonusHeading3",
      type: "string",
    },
    {
      name: "bonusDescription",
      type: "string",
    },
    {
      name: "bonusDescription1",
      type: "string",
    },
    {
      name: "bonusDescription2",
      type: "string",
    },
    {
      name: "bonusDescription3",
      type: "string",
    },
    {
      name: "bonusImage",
      type: "file",
    },
  ],
});

Builder.registerComponent(LandingTab, {
  name: "Landing Tab",
  inputs: [
    {
      name: "heading",
      type: "string",
    },
    {
      name: "subheading",
      type: "string",
    },
    {
      name: "accordionContent",
      type: "list",
      subFields: [
        {
          name: "label",
          type: "string",
        },
        {
          name: "image",
          type: "file",
        },
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
      ],
    },
  ],
});

Builder.registerComponent(ContentImage, {
  name: "Communn Content Images",
  inputs: [
    {
      name: "featureData",
      type: "list",
      subFields: [
        {
          name: "steps",
          type: "string",
        },
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
        {
          name: "image",
          type: "file",
        },
      ],
    },
  ],
});

Builder.registerComponent(LandingBox, {
  name: "Communn Landing Box",
  inputs: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "description1",
      type: "string",
    },
    {
      name: "description2",
      type: "string",
    },
    {
      name: "description3",
      type: "string",
    },
    {
      name: "mobileDescription",
      type: "string",
    },
    {
      name: "image",
      type: "file",
    },
    {
      name: "sectionItems",
      type: "list",
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "image",
          type: "file",
        },
      ],
    },
    {
      name: "title2",
      type: "string",
    },
    {
      name: "description4",
      type: "string",
    },
  ],
});

Builder.registerComponent(CommunnAbountUs, {
  name: "Communn About us",
});

Builder.registerComponent(CommunnContactUs, {
  name: "Communn Contact us",
});

Builder.registerComponent(YogastHeader, {
  name: "Yogast Header",
  inputs: [
    {
      name: "logo",
      type: "url",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2F228d3b2c4554432dbdd1f0f27ee6ba7c%2F1001e504713f4eb9b9a58b6d3276a910",
    },
    {
      name: "width",
      type: "number",
      defaultValue: "150",
    },
    {
      name: "height",
      type: "number",
      defaultValue: "150",
    },
    {
      name: "ButtonText",
      type: "string",
      defaultValue: "Contact Us Now",
    },
    {
      name: "BackgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "buttonBackgroundColor",
      type: "color",
      defaultValue: "rgb(255, 94, 20)",
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "rgb(0,0,0)",
    },
  ],
});

Builder.registerComponent(YogastHero, {
  name: "Yogast Hero",
  inputs: [
    {
      name: "HeroImage",
      type: "url",
      defaultValue:
        "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Title",
      type: "string",
      defaultValue: "Transformation Of Body And Mind",
    },
    {
      name: "Description",
      type: "string",
      defaultValue:
        "Create harmony and balance in your life through our variety of yoga classes. Join us for a journey of self-discovery and wellness.",
    },
    {
      name: "Button1Text",
      type: "strign",
      defaultValue: "Get A Free Class",
    },
    {
      name: "Button2Text",
      type: "strign",
      defaultValue: "Contact Us",
    },
    {
      name: "FacebookLink",
      type: "url",
      defaultValue: "https://www.facebook.com/",
    },
    {
      name: "TwitterLink",
      type: "url",
      defaultValue: "https://x.com/",
    },
    {
      name: "LinkedinLink",
      type: "url",
      defaultValue: "https://linkedin.com/",
    },
    {
      name: "InstagramLink",
      type: "url",
      defaultValue: "https://www.instagram.com/",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "rgb(255, 94, 20)",
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "rgb(255, 255, 255)",
    },
  ],
});

Builder.registerComponent(YogastClassesSection, {
  name: "Yogast Classes Section",
  inputs: [
    {
      name: "Title",
      type: "string",
      defaultValue: "Popular Yoga Class",
    },
    {
      name: "Description",
      type: "string",
      defaultValue:
        "Learn with our experienced instructors and transform your life through our specialized classes",
    },
    {
      name: "ClassesList",
      type: "list",
      defaultValue: [
        {
          Title: "Morning Yoga",
          Description:
            "Start your day with energy and clarity through gentle flows and breathing exercises.",
        },
        {
          Title: "Hatha Yoga",
          Description:
            "Classic approach focusing on physical postures to improve strength and flexibility.",
        },
        {
          Title: "Meditation Yoga",
          Description:
            "Find inner peace and calm your mind through guided meditation techniques.",
        },
        {
          Title: "Power Yoga",
          Description:
            "Dynamic practice that builds strength and endurance through challenging sequences.",
        },
      ],
      subFields: [
        {
          name: "Title",
          type: "string",
        },
        {
          name: "Description",
          type: "string",
        },
      ],
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#FDF6EF",
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "#364153",
    },
    {
      name: "BoxbackgroundColor",
      type: "color",
      defaultValue: "#ff5e14",
    },
  ],
});

Builder.registerComponent(YogastInfoSection, {
  name: "Yogast Info Section",
  inputs: [
    {
      name: "Image",
      type: "url",
      defaultValue:
        "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      helperText: "Give image url here",
    },
    {
      name: "width",
      type: "number",
    },
    {
      name: "height",
      type: "number",
    },
    {
      name: "Title",
      type: "string",
      defaultValue: "In Truth, Yoga Doesn't Take Time – It Gives More Time",
    },
    {
      name: "DescriptionsList",
      type: "list",
      defaultValue: [
        {
          Description: `Our modern lives are filled with stress and distractions, leaving us feeling drained and disconnected. The practice of yoga offers a pathway to restore balance and vitality.`,
        },
        {
          Description: `At Yogast, we believe that the time invested in yoga practice returns tenfold through enhanced focus, increased energy, and improved overall well-being. Our instructors guide you through practices that optimize your physical and mental health.`,
        },
        {
          Description: `"By making time for yoga, you create space for everything else in your life to fall into place more harmoniously."`,
        },
      ],
      subFields: [
        {
          name: "Description",
          type: "string",
        },
      ],
    },
    {
      name: "ButtonText",
      type: "string",
      defaultValue: "Read More",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#FDF6EF",
    },
    {
      name: "buttonBackgroundColor",
      type: "color",
      defaultValue: "#ff5e14",
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "#364153",
    },
  ],
});

Builder.registerComponent(YogastScheduleSection, {
  name: "Yogast Schedule Section",
  inputs: [
    {
      name: "Title",
      type: "string",
      defaultValue: "Yoga Schedule Class",
    },
    {
      name: "Description",
      type: "string",
      defaultValue:
        "Find the perfect class time that fits your schedule and begin your transformation today",
    },
    {
      name: "Days",
      type: "list",
      defaultValue: [
        {
          day: "Monday",
        },
        {
          day: "Friday",
        },
        {
          day: "Saturday",
        },
        {
          day: "Sunday",
        },
      ],
      subFields: [
        {
          name: "day",
          type: "string",
        },
      ],
    },
    {
      name: "TimeSlots",
      type: "list",
      defaultValue: [
        {
          title: "Basic Yoga",
          times: [
            {
              time: "07:00 - 08:30 am",
            },
            {
              time: "07:00 - 08:30 am",
            },
            {
              time: "07:00 - 08:30 am",
            },
          ],
        },
        {
          title: "Meditation Yoga",
          times: [
            {
              time: "01:00 - 02:30 pm",
            },
            {
              time: "01:00 - 02:30 pm",
            },
            {
              time: "01:00 - 02:30 pm",
            },
          ],
        },
        {
          title: "Advanced Yoga",
          times: [
            {
              time: "05:30 - 07:00 pm",
            },
            {
              time: "05:30 - 07:00 pm",
            },
            {
              time: "05:30 - 07:00 pm",
            },
          ],
        },
      ],
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "times",
          type: "list",
          subFields: [
            {
              name: "time",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#333333",
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "activeButtonBackgroundColor",
      type: "color",
      defaultValue: "#FF5E14",
    },
    {
      name: "buttonBackgroundColor",
      type: "color",
      defaultValue: "#1E2939",
    },
    {
      name: "rowBackgroundColor",
      type: "color",
      defaultValue: "#282E35",
    },
  ],
});

Builder.registerComponent(YogastPricingSection, {
  name: "Yogast Pricing Section",
  inputs: [
    {
      name: "Title",
      type: "string",
      defaultValue: "Price List Yoga Class",
    },
    {
      name: "Description",
      type: "string",
      defaultValue:
        "Choose the plan that best fits your needs and start your transformation journey today",
    },
    {
      name: "PlansList",
      type: "list",
      defaultValue: [
        {
          title: "Basic Class",
          price: "25.00",
          features: [
            {
              feature: "Access to basic yoga sessions",
            },
            {
              feature: "Online learning materials",
            },
            {
              feature: "Community forum access",
            },
            {
              feature: "Email support",
            },
          ],
          ButtonText: "Get Started",
        },
        {
          title: "Premium Class",
          price: "45.00",
          features: [
            {
              feature: "All Basic features",
            },
            {
              feature: "Advanced yoga techniques",
            },
            {
              feature: "1-on-1 session monthly",
            },
            {
              feature: "Priority support",
            },
          ],
          ButtonText: "Get Started",
        },
        {
          title: "Ultimate Class",
          price: "65.00",
          features: [
            {
              feature: "All Premium features",
            },
            {
              feature: "Unlimited class access",
            },
            {
              feature: "Weekly 1-on-1 sessions",
            },
            {
              feature: "Nutrition guidance",
            },
          ],
          ButtonText: "Get Started",
        },
      ],
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "price",
          type: "string",
        },
        {
          name: "features",
          type: "list",
          subFields: [
            {
              name: "feature",
              type: "string",
            },
          ],
        },
        {
          name: "ButtonText",
          type: "string",
        },
      ],
    },
    {
      name: "Buttontext",
      type: "string",
      defaultValue: "Get Started",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#fdf6ef",
    },
    {
      name: "cardBackgroundColor",
      type: "color",
      defaultValue: "#ff5e14",
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "#4A5565",
    },
    {
      name: "buttonBackgroundColor",
      type: "color",
      defaultValue: "#000000",
    },
  ],
});

Builder.registerComponent(YogastContactSection, {
  name: "Yogast Contact Section",
  inputs: [
    {
      name: "logo",
      type: "url",
      defaultValue:
        "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      helperText: "logo Url",
    },
    {
      name: "width",
      type: "number",
    },
    {
      name: "height",
      type: "number",
    },
    {
      name: "title",
      type: "string",
      defaultValue: "Give Us A Shout",
    },
    {
      name: "ButtonText",
      type: "string",
      defaultValue: "Get Started",
    },
    {
      name: "message",
      type: "string",
      defaultValue: "You'll be contacted by a team member shortly",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#FF5E14",
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "inputBackgroundColor",
      type: "color",
      defaultValue: "rgba(255, 255, 255, 0.2)",
    },
    {
      name: "inputBorderColor",
      type: "color",
      defaultValue: "rgba(255, 255, 255, 0.3)",
    },
    {
      name: "inputPlaceholderTextColor",
      type: "color",
      defaultValue: "rgba(255, 255, 255, 0.7)",
    },
  ],
});

Builder.registerComponent(YogastTestimonialsSection, {
  name: "Yogast Testimonials Section",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "What People Says About Us",
    },
    {
      name: "Description",
      type: "string",
      defaultValue:
        "Hear from our community about their experiences and transformations with Yogast",
    },
    {
      name: "testimonialsList",
      type: "list",
      defaultValue: [
        {
          content:
            "Great Company! The Staff Is Knowledgeable And The Classes Are Really Enjoyable. I'll Certainly Be Coming Back!",
          author: "Sarah Johnson",
          position: "Yoga Enthusiast",
        },
        {
          content:
            "The instructors are incredible and the atmosphere is so welcoming. I've seen amazing improvements in my flexibility and peace of mind.",
          author: "Michael Chen",
          position: "Regular Member",
        },
        {
          content:
            "As a beginner, I was nervous to start yoga but the team made me feel comfortable from day one. Highly recommended!",
          author: "Priya Patel",
          position: "New Member",
        },
      ],
      subFields: [
        {
          name: "content",
          type: "string",
        },
        {
          name: "author",
          type: "string",
        },
        {
          name: "position",
          type: "string",
        },
      ],
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "rgba(255, 255, 255, 1)",
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "rgba(0, 0, 0, 1)",
    },
    {
      name: "cardBackgroundColor",
      type: "color",
      defaultValue: "#ff5e14",
    },
  ],
});

Builder.registerComponent(YogastNewsletterSection, {
  name: "Yogast Newsletter Section",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: " Subscribe To Our Newsletter",
    },
    {
      name: "ButtonText",
      type: "string",
      defaultValue: "Submit Now",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#ff5e14",
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "buttonBackgroundColor",
      type: "color",
      defaultValue: "rgba(0, 0, 0, 1)",
    },
    {
      name: "inputBackgroundColor",
      type: "color",
      defaultValue: "rgba(255, 255, 255, 1)",
    },
    {
      name: "inputPlaceholderTextColor",
      type: "color",
      defaultValue: "rgba(147, 144, 153, 1)",
    },
    {
      name: "inputTextColor",
      type: "color",
      defaultValue: "rgba(0, 0, 0, 1)",
    },
  ],
});

Builder.registerComponent(YogastFooter, {
  name: "Yogast Footer Section",
  inputs: [
    {
      name: "logo",
      type: "url",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2F228d3b2c4554432dbdd1f0f27ee6ba7c%2F1001e504713f4eb9b9a58b6d3276a910",
      helperText: "Logo Url",
    },
    {
      name: "width",
      type: "number",
      defaultValue: 150,
    },
    {
      name: "height",
      type: "number",
      defaultValue: 150,
    },
    {
      name: "Description",
      type: "string",
      defaultValue:
        "Create harmony and balance in your life with our yoga classes. Join us for a journey of wellness.",
    },
    {
      name: "FacebookLink",
      type: "url",
      defaultValue: "https://www.facebook.com/",
    },
    {
      name: "TwitterLink",
      type: "url",
      defaultValue: "https://x.com/",
    },
    {
      name: "InstagramLink",
      type: "url",
      defaultValue: "https://www.instagram.com/",
    },
    {
      name: "QuickLinks",
      type: "list",
      defaultValue: [
        {
          Title: "About Us",
          LinksList: [
            {
              Text: "Our Story",
              Link: "/",
            },
            {
              Text: "Our Instructors",
              Link: "/",
            },
            {
              Text: "Blog",
              Link: "/",
            },
            {
              Text: "Careers",
              Link: "/",
            },
          ],
        },
        {
          Title: "Our Classes",
          LinksList: [
            {
              Text: "Hatha Yoga",
              Link: "/",
            },
            {
              Text: "Vinyasa Flow",
              Link: "/",
            },
            {
              Text: "Meditation",
              Link: "/",
            },
            {
              Text: "Power Yoga",
              Link: "/",
            },
          ],
        },
      ],
      subFields: [
        {
          name: "Title",
          type: "string",
        },
        {
          name: "LinksList",
          type: "list",
          subFields: [
            {
              name: "Text",
              type: "string",
            },
            {
              name: "Link",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "Address",
      type: "string",
      defaultValue: "123 Yoga Street, Wellness City",
    },
    {
      name: "PhoneNumber",
      type: "string",
      defaultValue: "+1 (234) 567-8910",
    },
    {
      name: "Email",
      type: "email",
      defaultValue: "info@yogast.com",
    },
    {
      name: "Timmings",
      type: "string",
      defaultValue: "Mon - Sat: 7:00am - 7:00pm",
    },
    {
      name: "CopyRightText",
      type: "string",
      defaultValue: "2025 Yogast. All rights reserved.",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#fdf6ef",
    },
    {
      name: "titleTextColor",
      type: "color",
      defaultValue: "rgba(0, 0, 0, 1)",
    },
    {
      name: "subTitleTextColor",
      type: "color",
      defaultValue: "#4a5565",
    },
    {
      name: "TextHoverColor",
      type: "color",
      defaultValue: "",
    },
  ],
});

Builder.registerComponent(YogastAbout, {
  name: "Yogast About",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "About Yogast",
    },
    {
      name: "SubTitle",
      type: "string",
      defaultValue: "Our journey, mission, and commitment to wellness",
    },
    {
      name: "Information",
      type: "list",
      defaultValue: [
        {
          title: "Our Story",
          description:
            "Yogast was founded in 2010 with a simple mission: to make the transformative power of yoga accessible to everyone. What began as a small studio with a handful of dedicated practitioners has grown into a thriving community of wellness enthusiasts spanning across multiple locations. Our founder, Sarah Mitchell, discovered yoga during a particularly challenging time in her life and was amazed by how the practice not only strengthened her body but also calmed her mind and rejuvenated her spirit. Inspired by her personal transformation, she decided to create a space where others could experience the same benefits.",
        },
        {
          title: "Our Philosophy",
          description:
            "At Yogast, we believe that yoga is more than just physical exercise—it's a holistic approach to life that integrates body, mind, and spirit. We're committed to creating an inclusive environment where practitioners of all levels feel welcome and supported on their wellness journey. Our instructors are not only highly trained in various yoga traditions but also passionate about sharing the gifts of yoga with others. They bring their unique perspectives and specialties to each class, ensuring a rich and diverse experience for our community.",
        },
      ],
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
      ],
    },
    {
      name: "headerBackgroundColor",
      type: "color",
      defaultValue: "#ff5e14",
    },
    {
      name: "headertitleTextColor",
      type: "color",
      defaultValue: "ffffff",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#fdf6ef",
    },
    {
      name: "titleTextColor",
      type: "color",
      defaultValue: "#ff5e14",
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "#000000",
    },
  ],
});

Builder.registerComponent(YogastFeatures, {
  name: "Yogast Features",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Our Features",
    },
    {
      name: "subTitle",
      type: "string",
      defaultValue:
        "Discover what makes Yogast the perfect place for your yoga journey",
    },
    {
      name: "Features",
      type: "list",
      defaultValue: [
        {
          title: "Expert Instructors",
          description:
            "Learn from certified yoga teachers with years of experience in various yoga traditions.",
        },
        {
          title: "Diverse Class Offerings",
          description:
            "From gentle flows to challenging power yoga, find the perfect class for your needs and experience level.",
        },
        {
          title: "Beautiful Studios",
          description:
            "Practice in peaceful, clean environments designed to enhance your yoga experience.",
        },
        {
          title: "Community Events",
          description:
            "Connect with like-minded individuals through workshops, retreats, and special events.",
        },
        {
          title: "Digital Classes",
          description:
            "Access our classes from anywhere with our library of online videos and live streams.",
        },
        {
          title: "Personalized Guidance",
          description:
            "Receive individual attention and modifications to support your unique practice.",
        },
      ],
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
      ],
    },
    {
      name: "headerBackgroundColor",
      type: "color",
      defaultValue: "#ff5e14",
    },
    {
      name: "headerTitleColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#fdf6ef",
    },
    {
      name: "cardBackgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "TitleTextColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "TextColor",
      type: "color",
      defaultValue: "#4a5565",
    },
  ],
});

Builder.registerComponent(YogastPricing, {
  name: "Yogast Pricing",
  inputs: [
    {
      name: "Title",
      type: "string",
      defaultValue: "Pricing & Plans",
    },
    {
      name: "SubTitle",
      type: "string",
      defaultValue:
        "Choose the perfect membership option for your yoga journey",
    },
    {
      name: "PriceListSectionTitle",
      type: "string",
      defaultValue: "Price List Yoga Class",
    },
    {
      name: "PriceListSectionSubTitle",
      type: "string",
      defaultValue:
        "Choose the plan that best fits your needs and start your transformation journey today",
    },
    {
      name: "PlansList",
      type: "list",
      defaultValue: [
        {
          title: "Basic Class",
          price: "25.00",
          features: [
            {
              feature: "Access to basic yoga sessions",
            },
            {
              feature: "Online learning materials",
            },
            {
              feature: "Community forum access",
            },
            {
              feature: "Email support",
            },
          ],
          ButtonText: "Get Started",
        },
        {
          title: "Premium Class",
          price: "45.00",
          features: [
            {
              feature: "All Basic features",
            },
            {
              feature: "Advanced yoga techniques",
            },
            {
              feature: "1-on-1 session monthly",
            },
            {
              feature: "Priority support",
            },
          ],
          ButtonText: "Get Started",
        },
        {
          title: "Ultimate Class",
          price: "65.00",
          features: [
            {
              feature: "All Premium features",
            },
            {
              feature: "Unlimited class access",
            },
            {
              feature: "Weekly 1-on-1 sessions",
            },
            {
              feature: "Nutrition guidance",
            },
          ],
          ButtonText: "Get Started",
        },
      ],
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "price",
          type: "string",
        },
        {
          name: "features",
          type: "list",
          subFields: [
            {
              name: "feature",
              type: "string",
            },
          ],
        },
        {
          name: "ButtonText",
          type: "string",
        },
      ],
    },
    {
      name: "FaqTitle",
      type: "string",
      defaultValue: "Frequently Asked Questions",
    },
    {
      name: "QuestionsList",
      type: "list",
      defaultValue: [
        {
          Question: "Do you offer a free trial?",
          Answer:
            "Yes! We offer a complimentary class for new members to experience our studio before committing to a membership plan.",
        },
        {
          Question: "Can I switch between different class types?",
          Answer:
            "Absolutely. Your membership gives you access to all regular classes on our schedule based on your plan level.",
        },
        {
          Question: "What's your cancellation policy?",
          Answer:
            "Monthly memberships can be canceled with 30 days' notice. Annual memberships are non-refundable but can be frozen for up to 3 months per year.",
        },
        {
          Question: "Do I need to bring my own equipment?",
          Answer:
            "We provide mats and props for all in-studio classes. However, you're welcome to bring your own if you prefer.",
        },
      ],
      subFields: [
        { name: "Question", type: "string" },
        {
          name: "Answer",
          type: "string",
        },
      ],
    },
    {
      name: "headerBackgroundColor",
      type: "color",
      defaultValue: "#ff5e14",
    },
    {
      name: "headerTitleColor",
      type: "color",
      defaultValue: "#ededed",
    },
    {
      name: "pricingBackgroundColor",
      type: "color",
      defaultValue: "#fdf6ef",
    },
    {
      name: "pricingcardBackgroundColor",
      type: "color",
      defaultValue: "#ff5e14",
    },
    {
      name: "pricingTextColor",
      type: "color",
      defaultValue: "#4A5565",
    },
    {
      name: "pricingButtonBackgroundColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "FaqBackgroundColor",
      type: "color",
      defaultValue: "#fdf6ef",
    },
    {
      name: "questionTextColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "answerTextColor",
      type: "color",
      defaultValue: "#4a5565",
    },
  ],
});

Builder.registerComponent(YuvaaHeader, {
  name: "Yuvaa Header",
  inputs: [
    {
      name: "logoUrl",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2F228d3b2c4554432dbdd1f0f27ee6ba7c%2F5da7e1a66018428ab7a6081eeee906ad",
    },
    {
      name: "logoWidth",
      type: "number",
      defaultValue: "100",
    },
    {
      name: "logoHight",
      type: "number",
      defaultValue: "100",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Join Now",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "buttonBackgroundColor",
      type: "color",
      defaultValue: "#ff6347",
    },
    {
      name: "buttonTextColor",
      type: "color",
      defaultValue: "#ffffff",
    },
  ],
});

Builder.registerComponent(YuvaaHeroSection, {
  name: "Yuvaa Hero Section",
  inputs: [
    {
      name: "titleText",
      type: "string",
      defaultValue: "Practice At Home With The World's Top Yoga Teachers",
    },
    {
      name: "heroImage",
      type: "file",
      defaultValue:
        "https://images.unsplash.com/photo-1518310952931-b1de897abd40?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    },
    {
      name: "imageWidth",
      type: "number",
      defaultValue: 120,
    },
    {
      name: "imageHeight",
      type: "number",
      defaultValue: 120,
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Stream hundreds of expert-led yoga & meditation classes on any device. Your first trial month costs absolutely free.",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Get Started",
    },
    {
      name: "inputPlaceholderText",
      type: "string",
      defaultValue: "Enter Your Email",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "titleTextColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "descriptionColor",
      type: "color",
      defaultValue: "#4a5565",
    },
    {
      name: "buttonBackgroundColor",
      type: "color",
      defaultValue: "#ff6347",
    },
    {
      name: "buttonTextColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "placeholderTextColor",
      type: "color",
      defaultValue: "#7c7d7d",
    },
    {
      name: "inputBorderColor",
      type: "color",
      defaultValue: "#e5e7eb",
    },
  ],
});

const lucideIconEnum = Object.keys(LucideIcons).map((iconName) => ({
  label: iconName,
  value: iconName,
}));

Builder.registerComponent(YuvaaFeaturesSection, {
  name: "Yuvaa Features Section",
  inputs: [
    {
      name: "Title",
      type: "string",
      defaultValue: "Why Choose Yoga?",
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Yoga can make you stronger and more flexible. Yoga is good for reducing stress.",
    },
    {
      name: "featuresList",
      type: "list",
      defaultValue: [
        {
          icon: "Heart",
          size: 32,
          featureTitle: "Blood Circulation",
          fertureDescription:
            "Yoga can reduce anxiety, stress, and inflammation. In fact, the benefits of yoga run deep.",
        },
        {
          icon: "Wind",
          size: 32,
          featureTitle: "Calming Down",
          fertureDescription:
            "Yoga can improve your mood and overall feeling of well-being. Yoga can also help heal the lungs.",
        },
        {
          icon: "Stethoscope",
          size: 32,
          featureTitle: "Respiratory Fitness",
          fertureDescription:
            "Yoga can improve overall breathing capacity and lung health. Yoga can also help heal the lungs.",
        },
      ],
      subFields: [
        {
          name: "iconName",
          type: "enum",
          enum: lucideIconEnum,
          defaultValue: "Heart",
        },
        {
          name: "size",
          type: "number",
        },
        {
          name: "featureTitle",
          type: "string",
        },
        {
          name: "fertureDescription",
          type: "string",
        },
      ],
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "titleColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "descriptionColor",
      type: "color",
      defaultValue: "#4b5563",
    },
    {
      name: "cardBackgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "iconColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "iconBackgroundColor",
      type: "color",
      defaultValue: "#20b2aa",
    },
    {
      name: "featureTitleColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "fertureDescriptionColor",
      type: "color",
      defaultValue: "#4b5563",
    },
  ],
});

Builder.registerComponent(YuvaaWorkoutSection, {
  name: "Yuvaa Workout Section",
  inputs: [
    {
      name: "ImageUrl",
      type: "url",
      defaultValue:
        "https://images.unsplash.com/photo-1518310952931-b1de897abd40?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    },
    {
      name: "imageWidth",
      type: "number",
      defaultValue: 500,
    },
    {
      name: "imageHeight",
      type: "number",
      defaultValue: 500,
    },
    {
      name: "title",
      type: "string",
      defaultValue: "Workout at home with ease",
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        " We believe fitness should be accessible to everyone, everywhere. With hundreds of professional workout, healthy recipes and informative articles, you'll have everything you need to reach your personal fitness goals.",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Get Started",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "titleColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "descriptionColor",
      type: "color",
      defaultValue: "#4a5565",
    },
    {
      name: "buttonTextColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "buttonBackgroundColor",
      type: "color",
      defaultValue: "#ff6347",
    },
    {
      name: "lineColor",
      type: "color",
      defaultValue: "#20b2aa",
    },
  ],
});

Builder.registerComponent(YuvaaServicesSection, {
  name: "Yuvaa Services Section",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Our Services",
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Explore and book live and on-demand Yoga, Meditation and Art Therapy classes across the globe.",
    },
    {
      name: "servicesList",
      type: "list",
      defaultValue: [
        {
          title: "Therapy",
          imageUrl:
            "https://images.unsplash.com/photo-1518310952931-b1de897abd40?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
          imageWidth: "",
          imageHeight: "",
          rating: 4.8,
          reviewCount: 124,
          ctaText: "Join Session",
        },
        {
          title: "Yoga",
          imageUrl:
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
          imageWidth: "",
          imageHeight: "",
          rating: 4.7,
          reviewCount: 214,
          ctaText: "Join Session",
        },
        {
          title: "Meditation",
          imageUrl:
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
          imageWidth: "",
          imageHeight: "",
          rating: 4.9,
          reviewCount: 164,
          ctaText: "Join Session",
        },
        {
          title: "Pilates",
          imageUrl:
            "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
          imageWidth: "",
          imageHeight: "",
          rating: 4.6,
          reviewCount: 98,
          ctaText: "Join Session",
        },
        {
          title: "Meditation",
          imageUrl:
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
          imageWidth: "",
          imageHeight: "",
          rating: 4.6,
          reviewCount: 98,
          ctaText: "Join Session",
        },
      ],
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "imageUrl",
          type: "url",
        },
        {
          name: "imageWidth",
          type: "number",
          defaultValue: "",
        },
        {
          name: "imageHeight",
          type: "number",
          defaultValue: "",
        },
        {
          name: "rating",
          type: "number",
        },
        {
          name: "reviewCount",
          type: "number",
        },
        {
          name: "ctaText",
          type: "string",
        },
      ],
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "titleColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "descriptionColor",
      type: "color",
      defaultValue: "#4a5565",
    },
    {
      name: "lineColor",
      type: "color",
      defaultValue: "#20B2AA",
    },
    {
      name: "navigationIconsColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "navigationBackgroundColor",
      type: "color",
      defaultValue: "#FF6347",
    },
    {
      name: "cardBackgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "serviceTitleColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "ratingStarsColor",
      type: "color",
      defaultValue: "#FDC700",
    },
    {
      name: "ctaTextColor",
      type: "color",
      defaultValue: "#FF6347",
    },
    {
      name: "reviewCountColor",
      type: "color",
      defaultValue: "#6A7282",
    },
  ],
});

Builder.registerComponent(YuvaaTestimonialsSection, {
  name: "Yuvaa Testimonials Section",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "What's our client's say about us",
    },
    {
      name: "testimonialsList",
      type: "list",
      defaultValue: [
        {
          quote:
            "I highly recommend Yoga. It really helps in reducing stress levels, make me healthier and help relieve stress. I will definitely join future programs.",
          rating: 4.7,
          name: "Tao Jimin",
          role: "Designer",
        },
        {
          quote:
            "I highly recommend Yoga. It really helps in reducing anxiety and stress. Classes are easy to understand and practice. Yoga can be practiced anywhere and anytime. I'm very happy I found this app.",
          rating: 4.7,
          name: "Shin Ryujin",
          role: "Student",
        },
        {
          quote:
            "I highly recommend Yoga. It really helps in reducing pain during yoga routines for beginners like me.",
          rating: 3.5,
          name: "Deddy Corbuzier",
          role: "Podcaster",
        },
        {
          quote:
            "I highly recommend Yoga. It really helps in reducing anxiety and stress. Classes are easy to understand and practice. Yoga can be practiced anywhere and anytime. I'm very happy I found this app.",
          rating: 4.7,
          name: "Shin Ryujin",
          role: "Student",
        },
      ],
      subFields: [
        {
          name: "quote",
          type: "string",
        },
        {
          name: "rating",
          type: "number",
        },
        {
          name: "name",
          type: "string",
        },
        {
          name: "role",
          type: "string",
        },
      ],
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "titleColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "cardBackgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "quoteColor",
      type: "color",
      defaultValue: "#4A5565",
    },
    {
      name: "userTextColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "roleColor",
      type: "color",
      defaultValue: "#4A5565",
    },
    {
      name: "ratingStarsColor",
      type: "color",
      defaultValue: "#FDC700",
    },
    {
      name: "avatarBackgroundColor",
      type: "color",
      defaultValue: "#E5E7EB",
    },
    {
      name: "avatarTextColor",
      type: "color",
      defaultValue: "#6A7282",
    },
    {
      name: "navigationIconsColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "navigationBackgroundColor",
      type: "color",
      defaultValue: "#FF6347",
    },
    {
      name: "onHoverNavigationIconsColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "onHoverNavigationBackgroundColor",
      type: "color",
      defaultValue: "#FF6347",
    },
  ],
});

Builder.registerComponent(YuvaaCtaSection, {
  name: "Yuvaa CTA Section",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Learn On Demand",
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Explore and book live and on-demand Yoga, Meditation and Art Therapy classes across the globe",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Get Started",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#20B2AA",
    },
    {
      name: "sectionBackgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "titleColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "descriptionColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "buttonTextColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "buttonBackgroundColor",
      type: "color",
      defaultValue: "#FF6347",
    },
    {
      name: "lineColor",
      type: "color",
      defaultValue: "#20B2AA",
    },
  ],
});

Builder.registerComponent(YuvaaFooter, {
  name: "Yuvaa Footer",
  inputs: [
    {
      name: "logoUrl",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2F228d3b2c4554432dbdd1f0f27ee6ba7c%2Ffa747ef5fa5f4e9eb4f9f2f68f2ff094",
    },
    {
      name: "logoWidth",
      type: "number",
      defaultValue: "100",
    },
    {
      name: "logoHight",
      type: "number",
      defaultValue: "100",
    },
    {
      name: "tagLine",
      type: "string",
      defaultValue: `"We always provide the best service for our users"`,
    },
    {
      name: "FacebookLink",
      type: "url",
      defaultValue: "https://www.facebook.com/",
    },
    {
      name: "TwitterLink",
      type: "url",
      defaultValue: "https://x.com/",
    },
    {
      name: "InstagramLink",
      type: "url",
      defaultValue: "https://www.instagram.com/",
    },
    {
      name: "QuickLinks",
      type: "list",
      defaultValue: [
        {
          Title: "About Us",
          LinksList: [
            {
              Text: "Our Story",
              Link: "/",
            },
            {
              Text: "Our Instructors",
              Link: "/",
            },
            {
              Text: "Blog",
              Link: "/",
            },
            {
              Text: "Careers",
              Link: "/",
            },
          ],
        },
        {
          Title: "Our Classes",
          LinksList: [
            {
              Text: "Hatha Yoga",
              Link: "/",
            },
            {
              Text: "Vinyasa Flow",
              Link: "/",
            },
            {
              Text: "Meditation",
              Link: "/",
            },
            {
              Text: "Power Yoga",
              Link: "/",
            },
          ],
        },
      ],
      subFields: [
        {
          name: "Title",
          type: "string",
        },
        {
          name: "LinksList",
          type: "list",
          subFields: [
            {
              name: "Text",
              type: "string",
            },
            {
              name: "Link",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "titleTextColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "subTitleTextColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "textHoverColor",
      type: "color",
      defaultValue: "#20b2aa",
    },
    {
      name: "Address",
      type: "string",
      defaultValue: "123 Yoga Street, Wellness City",
    },
    {
      name: "PhoneNumber",
      type: "string",
      defaultValue: "+1 (234) 567-8910",
    },
    {
      name: "Email",
      type: "email",
      defaultValue: "info@yogast.com",
    },
    {
      name: "Timmings",
      type: "string",
      defaultValue: "Mon - Sat: 7:00am - 7:00pm",
    },
    {
      name: "CopyRightText",
      type: "string",
      defaultValue: "Copyright 2022 made for Yoga. All rights reserved",
    },
  ],
});

Builder.registerComponent(YuvaaAbout, {
  name: "Yuvaa About",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Our Mission",
    },
    {
      name: "descriptionsList",
      type: "list",
      defaultValue: [
        {
          description:
            "We believe that yoga and mindfulness practices should be accessible to everyone. Our mission is to bring the transformative power of these ancient practices to modern life, helping people find balance, strength, and peace in today's fast-paced world.",
        },
        {
          description:
            "Founded in 2018, YOGA+ has grown from a small local studio to an online platform with instructors and students from around the globe. We're committed to creating a supportive community where everyone can explore and deepen their practice.",
        },
      ],
      subFields: [
        {
          name: "description",
          type: "string",
        },
      ],
    },
    {
      name: "image",
      type: "file",
      defaultValue:
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    },
    {
      name: "imageWidth",
      type: "number",
      defaultValue: "500",
    },
    {
      name: "imageHeight",
      type: "number",
      defaultValue: "300",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "titleColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "descriptionColor",
      type: "color",
      defaultValue: "#4A5565",
    },
    {
      name: "lineColor",
      type: "color",
      defaultValue: "#20B2AA",
    },
  ],
});

Builder.registerComponent(YuvaaTeamSection, {
  name: "Yuvaa Team Section",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Our Team",
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Meet our dedicated team of experienced instructors who are passionate about sharing their knowledge and guiding you on your yoga journey.",
    },
    {
      name: "teamMembersList",
      type: "list",
      defaultValue: [
        {
          name: "Sarah Johnson",
          role: "Founder & Lead Instructor",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400",
        },
        {
          name: "Michael Chen",
          role: "Meditation Specialist",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400",
        },
        {
          name: "Priya Patel",
          role: "Vinyasa Instructor",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400",
        },
        {
          name: "David Wilson",
          role: "Power Yoga Instructor",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400",
        },
      ],
      subFields: [
        {
          name: "name",
          type: "string",
        },
        {
          name: "role",
          type: "string",
        },
        {
          name: "image",
          type: "file",
        },
        {
          name: "imageWidth",
          type: "number",
        },
        {
          name: "imageHeight",
          type: "number",
        },
      ],
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "titleColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "descriptionColor",
      type: "color",
      defaultValue: "#4A5565",
    },
    {
      name: "lineColor",
      type: "color",
      defaultValue: "#20B2AA",
    },
    {
      name: "cardBackgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "nameColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "roleColor",
      type: "color",
      defaultValue: "#FF6347",
    },
  ],
});

Builder.registerComponent(YuvaaJoinUsCTA, {
  name: "Yuvaa Join Us CTA",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Join Our Community",
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Whether you're a beginner or an experienced yogi, we welcome you to join our growing community of mindful practitioners. Start your journey today.",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Sign Up Now",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "titleColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "descriptionColor",
      type: "color",
      defaultValue: "#4A5565",
    },
    {
      name: "buttonBackgroundColor",
      type: "color",
      defaultValue: "#FF6347",
    },
    {
      name: "buttonTextColor",
      type: "color",
      defaultValue: "#ffffff",
    },
  ],
});

Builder.registerComponent(YuvaaFeatures, {
  name: "Yuvaa Features",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Features & Benefits",
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Discover how yoga can transform your physical and mental wellbeing with our comprehensive approach to mind-body wellness.",
    },
    {
      name: "featuresList",
      type: "list",
      defaultValue: [
        {
          icon: "Heart",
          size: 32,
          featureTitle: "Blood Circulation",
          fertureDescription:
            "Yoga can reduce anxiety, stress, and inflammation. In fact, the benefits of yoga run deep.",
        },
        {
          icon: "Wind",
          size: 32,
          featureTitle: "Calming Down",
          fertureDescription:
            "Yoga can improve your mood and overall feeling of well-being. Yoga can also help heal the lungs.",
        },
        {
          icon: "Stethoscope",
          size: 32,
          featureTitle: "Respiratory Fitness",
          fertureDescription:
            "Yoga can improve overall breathing capacity and lung health. Yoga can also help heal the lungs.",
        },
        {
          icon: "Brain",
          size: 32,
          featureTitle: "Mental Clarity",
          fertureDescription:
            "Regular practice improves focus, memory retention and cognitive function through mindfulness techniques.",
        },
        {
          icon: "Coffee",
          size: 32,
          featureTitle: "Energy Boost",
          fertureDescription:
            "Energizing poses and sequences help combat fatigue and increase natural energy levels without stimulants.",
        },
        {
          icon: "Moon",
          size: 32,
          featureTitle: "Better Sleep",
          fertureDescription:
            "Restorative yoga and relaxation techniques help regulate sleep cycles and improve overall sleep quality.",
        },
        {
          icon: "Sun",
          size: 32,
          featureTitle: "Mood Enhancement",
          fertureDescription:
            "Yoga stimulates the production of serotonin and dopamine, hormones associated with happiness and wellbeing.",
        },
        {
          icon: "Shield",
          size: 32,
          featureTitle: "Immune Support",
          fertureDescription:
            "Regular practice strengthens the immune system by reducing stress hormones that compromise immunity.",
        },
        {
          icon: "Activity",
          size: 32,
          featureTitle: "Flexibility & Strength",
          fertureDescription:
            "Yoga poses build muscle strength while improving flexibility, creating balanced physical development.",
        },
      ],
      subFields: [
        {
          name: "iconName",
          type: "enum",
          enum: lucideIconEnum,
          defaultValue: "Heart",
        },
        {
          name: "IconSize",
          type: "number",
        },
        {
          name: "featureTitle",
          type: "string",
        },
        {
          name: "fertureDescription",
          type: "string",
        },
      ],
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "heroBackgroundColor",
      type: "color",
      defaultValue: "#F9FAFB",
    },
    {
      name: "titleColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "descriptionColor",
      type: "color",
      defaultValue: "#4A5565",
    },
    {
      name: "lineColor",
      type: "color",
      defaultValue: "#20b2aa",
    },
    {
      name: "cardBackgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "iconColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "iconBackgroundColor",
      type: "color",
      defaultValue: "#20b2aa",
    },
    {
      name: "featureTitleColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "fertureDescriptionColor",
      type: "color",
      defaultValue: "#4b5563",
    },
  ],
});

Builder.registerComponent(YuvaaPricing, {
  name: "Yuvaa Pricing",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Simple, Transparent Pricing",
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Choose the plan that fits your wellness journey. All plans include a 7-day free trial.",
    },
    {
      name: "pricingList",
      type: "list",
      defaultValue: [
        {
          title: "Basic Plan",
          price: "$12",
          period: "month",
          description: "Perfect for beginners starting their yoga journey",
          features: [
            {
              feature: "Access to 50+ basic yoga classes",
            },
            {
              feature: "1 live session per month",
            },
            {
              feature: "Basic pose guides",
            },
            {
              feature: "Community forum access",
            },
          ],
        },
        {
          title: "Premium Plan",
          price: "$29",
          period: "month",
          description: "Our most popular plan for dedicated practitioners",
          features: [
            {
              feature: "Access to 200+ yoga classes",
            },
            {
              feature: "4 live sessions per month",
            },
            {
              feature: "Detailed pose guides with adjustments",
            },
            {
              feature: "Personal progress tracking",
            },
            {
              feature: "Exclusive meditation content",
            },
          ],
          isPopular: true,
        },
        {
          title: "Ultimate Plan",
          price: "$49",
          period: "month",
          description: "For those seeking the complete yoga experience",
          features: [
            {
              feature: "Unlimited access to all classes",
            },
            {
              feature: "Unlimited live sessions",
            },
            {
              feature: "1-on-1 instructor sessions monthly",
            },
            {
              feature: "Custom program creation",
            },
            {
              feature: "Nutrition guidance",
            },
            {
              feature: "Premium meditation content",
            },
          ],
        },
      ],
      subFields: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "price",
          type: "string",
        },
        {
          name: "period",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
        {
          name: "features",
          type: "list",
          subFields: [
            {
              name: "feature",
              type: "string",
            },
          ],
        },
        {
          name: "isPopular",
          type: "boolean",
          defaultValue: false,
        },
      ],
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "heroBackgroundColor",
      type: "color",
      defaultValue: "#F9FAFB",
    },
    {
      name: "titleColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "descriptionColor",
      type: "color",
      defaultValue: "#4A5565",
    },
    {
      name: "lineColor",
      type: "color",
      defaultValue: "#20B2AA",
    },
    {
      name: "cardBackgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "cardPrimaryColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "cardSecondaryColors",
      type: "color",
      defaultValue: "#4A5565",
    },
    {
      name: "buttonColor",
      type: "color",
      defaultValue: "#FF6347",
    },
    {
      name: "iconsColor",
      type: "color",
      defaultValue: "#20B2AA",
    },
  ],
});

Builder.registerComponent(YuvaaFAQSection, {
  name: "Yuvaa FAQ Section",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Frequently Asked Questions",
    },
    {
      name: "questionsList",
      type: "list",
      defaultValue: [
        {
          question: "Can I switch plans later?",
          answer:
            "Yes, you can upgrade or downgrade your plan at any time. The changes will take effect on your next billing cycle.",
        },
        {
          question: "Is there a contract or commitment?",
          answer:
            "No, all our plans are month-to-month with no long-term contract. You can cancel anytime.",
        },
        {
          question: "How do I access live sessions?",
          answer:
            "Live sessions are scheduled in our calendar. You'll receive email notifications and can join via our web platform or mobile app.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "We offer a 7-day money-back guarantee if you're not satisfied with your subscription for any reason.",
        },
      ],
      subFields: [
        {
          name: "question",
          type: "string",
        },
        {
          name: "answer",
          type: "string",
        },
      ],
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "titleColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "cardBackgroundColor",
      type: "color",
      defaultValue: "#ffffff",
    },
    {
      name: "questionColor",
      type: "color",
      defaultValue: "#000000",
    },
    {
      name: "answerColor",
      type: "color",
      defaultValue: "#4A5565",
    },
  ],
});

Builder.registerComponent(YuvaaLogin, {
  name: "Yuvaa Login",
});

Builder.registerComponent(YuvaaSignup, {
  name: "Yuvaa SignUp",
});

Builder.registerComponent(AutoLogin, {
  name: "AutoLogin",
});

Builder.registerComponent(YuvaaSubscriptions, {
  name: "Yuvaa Subscriptions",
});

Builder.registerComponent(YuvaaContact, {
  name: "Yuvaa Contact",
});

Builder.registerComponent(YuvaaCourses, {
  name: "Yuvaa Courses",
});

Builder.registerComponent(YuvaaEvents, {
  name: "Yuvaa Events",
});
