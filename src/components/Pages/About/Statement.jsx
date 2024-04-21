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
            We aim to revolutionize the agricultural sector through cassava
            innovation and digital solutions, fostering economic opportunities
            and ensuring access to nutritious food for all, while building
            resilient ecosystems.
          </p>
        </aside>
      </section>
    </>
  );
};

export default Statement;
