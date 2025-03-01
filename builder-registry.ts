import { builder, Builder } from "@builder.io/react";
import Header from "./components/layout/header";
import ContactUs from "./components/ContactUs";
Builder.registerComponent(Header, {
  name: "Header",
  inputs: [
    { name: "text", type: "string", defaultValue: "Hello, Builder!" },
    {
      name: "description",
      type: "string",
      defaultValue: "This is a header component.",
    },
  ],
});

Builder.registerComponent(ContactUs, {
    name: "Contact US",
  },
);