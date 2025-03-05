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


//import Header from "./components/layout/header";
//import ContactUs from "./components/ContactUs";
// 
// Builder.registerComponent(Header, {
//   name: "Header",
//   inputs: [
//     { name: "text", type: "string", defaultValue: "Hello, Builder!" },
//     {
//       name: "description",
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
        { name: "city", type: "string"},
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

Builder.registerComponent(PricesAndPackages,{
  name:"Home Priceing Cards",
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
          name:"isHighlighted",
          type:"boolean",
          required:true,
          helperText:"Which card should be highlighted"
        }
      ],
    },
  ],
})

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