import React from "react";

const YogastContactSection = ({
  Image,
  width,
  height,
  title,
  ButtonText,
  message,
  backgroundColor,
  textColor,
  inputBackgroundColor,
  inputPlaceholderTextColor,
  inputBorderColor,
}: {
  Image: string;
  width: string;
  height: string;
  title: string;
  ButtonText: string;
  message: string;
  backgroundColor: string;
  textColor: string;
  inputBackgroundColor: string;
  inputBorderColor: string;
  inputPlaceholderTextColor: string;
}) => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Left Content - Gray Background */}
        <div className="w-full md:w-1/2 bg-[#333333]">
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={
                Image ??
                "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              }
              alt="Woman practicing yoga"
              className="w-full h-full object-cover"
              width={width}
              height={height}
            />
          </div>
        </div>

        {/* Right Content - Orange Background */}
        <div
          className="w-full md:w-1/2 py-16 md:py-24 px-6 md:px-12"
          style={{ backgroundColor: backgroundColor, color: textColor }}
        >
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-6">{title}</h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  style={
                    {
                      "--placeholder-color": inputPlaceholderTextColor,
                      backgroundColor: inputBackgroundColor,
                      borderColor: inputBorderColor,
                      color: textColor,
                    } as React.CSSProperties
                  }
                  className="placeholder:[color:var(--placeholder-color)] border rounded-md px-3 py-1"
                  spellCheck={true}
                  data-ms-editor={false}
                />

                <input
                  type="email"
                  placeholder="Email"
                 style={
                    {
                      "--placeholder-color": inputPlaceholderTextColor,
                      backgroundColor: inputBackgroundColor,
                      borderColor: inputBorderColor,
                      color: textColor,
                    } as React.CSSProperties
                  }
                  className="placeholder:[color:var(--placeholder-color)] border rounded-md px-3 py-1"
                  spellCheck={true}
                  data-ms-editor={false}
                />
              </div>
              <textarea
                placeholder="Your Message"
                style={
                    {
                      "--placeholder-color": inputPlaceholderTextColor,
                      backgroundColor: inputBackgroundColor,
                      borderColor: inputBorderColor,
                      color: textColor,
                    } as React.CSSProperties
                  }
                  className="placeholder:[color:var(--placeholder-color)] border rounded-md px-3 py-1 h-32 w-full"
                spellCheck={true}
                data-ms-editor={false}
              />
              <button className="w-full rounded-md py-2" style={{color:backgroundColor,backgroundColor:textColor}}>
                {ButtonText}
              </button>
              <p className="text-xs text-center" style={{color:textColor}}>{message}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogastContactSection;
