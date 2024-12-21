import React from "react";

const Featured = () => {
  // JSON data for featured images
  const featuredImages = [
    {
      id: 1,
      image: "/images/g1.jpeg", 
    },
    {
      id: 2,
      image: "/images/g2.jpeg", 

    },
    {
      id: 3,
      image: "/images/g3.jpeg", 

    },
    {
      id: 4,
      image: "/images/g4.jpeg", 

    },
    {
      id: 5,
      image: "/images/g5.jpeg", 

    },
    {
      id: 6,
      image: "/images/g6.jpeg", 

    },
    {
      id: 7,
      image: "/images/g7.jpeg", 

    },
    {
      id: 8,
      image: "/images/g8.jpeg", 

    },
    {
      id: 9,
      image: "/images/g9.jpeg", 

    },
    {
      id: 10,
      image: "/images/g10.jpeg", 

    },
    {
      id: 11,
      image: "/images/g11.jpeg", 

    },
    {
      id: 12,
      image: "/images/g1.jpeg", 

    },

  ];

  return (
    <section className="ftco-section goto-here" style={{ marginTop: "4rem" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center mb-5">
            <span className="subheading">Best in the Best</span>
            <h2 className="mb-2">Featured Images</h2>
          </div>
        </div>
        <div className="row">
          {featuredImages.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="property-wrap">
                <a
                  href={item.link}
                  className="img"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
