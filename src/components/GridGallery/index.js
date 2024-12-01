import Link from "next/link";
import React from "react";

const GridGallery = () => {
  // JSON data for the grid
  const gridData = [
    {
      id: 1,
      name: "lata mangeshkar chowk",
      image: "/images/1.png",
      gradient: "linear-gradient(180deg, transparent 20%, #000000 100%)",
    },
    {
      id: 2,
      name: "Shree Ram Janmabhoomi Mandir",
      image: "/images/2.png",
      gradient: "linear-gradient(180deg, transparent 40%, #000000 100%)",
    },
    {
      id: 3,
      name: "Kanak Bhawan",
      image: "/images/4.png",
      gradient: "linear-gradient(245deg, transparent, #000000)",
    },
    {
      id: 4,
      name: "Saryu aarti",
      properties: 25,
      image: "/images/6.png",
      gradient: "linear-gradient(245deg, transparent 30%, #000000 100%)",
    },
    {
      id: 5,
      name: "Ram ki paidi",
      image: "/images/7.jpg",
      gradient: "linear-gradient(245deg, transparent, #000000)",
    },
    {
      id: 6,
      name: "Dashrath Mahal",
      image: "/images/5.png",
      gradient: "linear-gradient(245deg, transparent, #000000)",
    },
  ];

  return (
    <section className="ftco-section goto-here ftco-no-pt">
      <div id="grid-wrapper">
        {gridData.map((item) => (
          <div
            key={item.id}
            className="place-card"
            style={{
              background: `${item.gradient}, url('${item.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Link href="/" className="locality">
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridGallery;
