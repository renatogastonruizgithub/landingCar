"use client";

import { useEffect, useState } from "react";

export default function Features() {
  const [services, setservices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "https://web-django-templates.vercel.app/api/services/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        setservices(data); // Asigna los datos a 'services'
        console.log(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    }; //fin fetchServices
    fetchServices();
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div   className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 data-aos="fade-left" className="h2 mb-4">Nuestros Servicios.</h2>
            <p data-aos="fade-right" className="text-xl text-gray-400">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}

            {services.map((service, index) => (
              <>
                <div
                  key={index}
                  className="relative flex flex-col "
                  
                  data-aos-anchor="[data-aos-id-blocks]"
                >
                  <div data-aos="fade-up" className=" mb-4 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-55 lg:h-40">
                    <img
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-lg"
                      src={service.images.url_image}
                      alt="services-photo"
                      
                    />
                  </div>

                  <h4  data-aos="fade-left" className="h4 mb-3">{service.name}</h4>
                  <p data-aos="fade-right" className="text-lg text-gray-400 ">
                    {service.description}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
