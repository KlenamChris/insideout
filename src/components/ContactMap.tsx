import React from "react";

const ContactMap = () => {
  return (
    <div className="w-full h-100 rounded-2xl overflow-hidden shadow mt-4 md:mt-40">
      <iframe
        src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ContactMap;
