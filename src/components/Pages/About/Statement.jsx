import React from "react";

const Statement = () => {
  return (
    <>
      <section
        className={`grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-brandBrown1x divide-y-4 md:divide-y-0 md:divide-x-4 p-10`}
      >
        <aside className={`p-5`}>
          <h1
            className={`text-xl md:text-2xl font-remBlack text-brandWhite1x pb-2`}
          >
            Our Mission ✨
          </h1>
          <p className={`text-base font-josefinsansRegular text-justify	`}>
            Our mission is to foster empowerment among local farmers,
            particularly targeting women and youth demographics, by establishing
            a reliable market for their farm yields. Through this initiative, we
            aim to facilitate sustainable employment opportunities while
            simultaneously making significant contributions to bolstering food
            security across Africa.
          </p>
        </aside>
        <aside className={`p-5`}>
          <h1
            className={`text-xl md:text-2xl font-remBlack text-brandWhite1x pb-2`}
          >
            Our Vision
          </h1>
          <p className={`text-base font-josefinsansRegular text-justify	`}>
            At Climax Green, we envision a future where sustainable agriculture
            thrives, empowering local farmers, nourishing communities, and
            promoting environmental stewardship. Our vision is to revolutionize
            the agricultural sector by harnessing the potential of cassava,
            transforming it into essential staple foods and innovative products
            while pioneering digital solutions that connect farmers directly
            with consumers. Through our commitment to organic farming practices,
            technological innovation, and community engagement, we strive to
            create a world where everyone has access to nutritious food,
            economic opportunities flourish, and agricultural ecosystems are
            resilient and vibrant
          </p>
        </aside>
      </section>
    </>
  );
};

export default Statement;
