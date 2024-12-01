import Link from "next/link";
import React from "react";
import VideoCard from "../VideoCard";
import GridGallery from "../GridGallery";

const Neighbourhood = () => {
  return (
    <section class="ftco-section goto-here" style={{ marginBottom: "10rem" }}>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 heading-section text-center  mb-5">
            <span class="subheading">Explore Ayodhya</span>

          </div>
        </div>
        {/* <div class="row">
          <VideoCard
            templeName="Shri Ram-Janambhoomi"
            // temple_sub_heading="Shri Ram-Janmbhoomi in Ayodhya is the sacred birthplace of Lord Ram, symbolizing faith and unity."
            templeImage="https://realverse.mappls.com/ayodhya/gif/1ftteb.gif"
          />
                    <VideoCard
            templeName="Kanak Bhawan-Sita-Temple"
            // temple_sub_heading="Shri Ram-Janmbhoomi in Ayodhya is the sacred birthplace of Lord Ram, symbolizing faith and unity."
            templeImage="https://realverse.mappls.com/ayodhya/gif/872b5b.gif"
          />
                    <VideoCard
            templeName="Dashrath Bhawan"
            // temple_sub_heading="Shri Ram-Janmbhoomi in Ayodhya is the sacred birthplace of Lord Ram, symbolizing faith and unity."
            templeImage="https://realverse.mappls.com/ayodhya/gif/od0upr.gif"
          />
                    <VideoCard
            templeName="Shri Rang-Mahal"
            // temple_sub_heading="Shri Ram-Janmbhoomi in Ayodhya is the sacred birthplace of Lord Ram, symbolizing faith and unity."
            templeImage="https://realverse.mappls.com/ayodhya/gif/kjlnbd.gif"
          />
                    <VideoCard
            templeName="Garapur Mandir"
            // temple_sub_heading="Shri Ram-Janmbhoomi in Ayodhya is the sacred birthplace of Lord Ram, symbolizing faith and unity."
            templeImage="https://realverse.mappls.com/ayodhya/gif/9h02ux.gif"
          />
                    <VideoCard
            templeName="Nageshwarnath Temple"
            // temple_sub_heading="Shri Ram-Janmbhoomi in Ayodhya is the sacred birthplace of Lord Ram, symbolizing faith and unity."
            templeImage="https://realverse.mappls.com/ayodhya/gif/3bt32b.gif"
          />
                    <VideoCard
            templeName="Raj Dwar-Mandir"
            // temple_sub_heading="Shri Ram-Janmbhoomi in Ayodhya is the sacred birthplace of Lord Ram, symbolizing faith and unity."
            templeImage="https://realverse.mappls.com/ayodhya/gif/bd1b47.gif"
          />

        </div> */}
           <section class="ftco-counter img" id="section-counter">
      <GridGallery/>
    </section>
      </div>
    </section>
  );
};

export default Neighbourhood;
