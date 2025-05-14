import React, { useState } from "react";

const YogastNewsletterSection = ({
  title,
  ButtonText,
  backgroundColor,
  textColor,
  inputBackgroundColor,
  inputPlaceholderTextColor,
  buttonBackgroundColor,
  inputTextColor
}: {
  title: string;
  inputPlaceholderTextColor: string;
  ButtonText: string;
  inputBackgroundColor: string;
  backgroundColor: string;
  textColor: string;
  buttonBackgroundColor:string;
  inputTextColor:string
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    console.log("Newsletter subscription for:", email);
    setEmail("");
  };
  return (
    <section
      className="py-12"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">{title}</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-0 text-black outline-none placeholder:[color:var(--placeholder-color)] flex-grow px-4 py-2 rounded-md"
              required
              style={
                {
                  backgroundColor: inputBackgroundColor,
                  "--placeholder-color": inputPlaceholderTextColor,
                  color:inputTextColor
                } as React.CSSProperties
              }
            />
            <button className="px-4 py-2 rounded-md " style={{backgroundColor:buttonBackgroundColor,color:textColor}}>
              {ButtonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default YogastNewsletterSection;
