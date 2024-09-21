"use client";
import Modal from "./modal";
import { useState, useEffect } from "react";

function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [gallery, setgallery] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(
          "https://web-django-templates.vercel.app/api/gallery/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        setgallery(data); // Asigna los datos a 'services'
        console.log(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    }; //fin fetchServices
    fetchGallery();
  }, []);
  const handleOpenModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    console.log(imageSrc);
    setOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((gallery, g) => (
            <>
              <div className="grid gap-4">
                <div key={g} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200  group-hover:opacity-55 lg:h-80">
                    {gallery.images.map((img) => (
                      <>
                        <img
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-lg object-cover object-center"
                          src={img.url_image}
                          alt={img.title}
                        />
                        <div className="flex items-star p-4">
                          <button
                            onClick={() =>
                              handleOpenModal(`${img.url_image}`)
                            }
                            style={{fontSize:"24px",color:"white"}}
                            type="button"
                            className="relative z-10 w-full rounded-md  px-4 py-2 text-md  opacity-0 focus:opacity-100 group-hover:opacity-100"
                          >
                            Ver imagen
                            
                          </button>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      {open && <Modal src={selectedImage} onClose={() => setOpen(false)} />}
    </div>
  );
}

export default Gallery;
