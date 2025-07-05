import React from "react";

const LocationMap = () => {
  return (
    <section className="w-full h-[400px]">
      <iframe
        title="Placemint Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224446.6794690215!2d77.06889907410598!3d28.52721816968898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5446f9c3a4f%3A0xc8e675b4f47a3e4e!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1720200000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default LocationMap;
