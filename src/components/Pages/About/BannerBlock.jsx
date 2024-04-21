const values = [
  {
    header: "Sustainability",
    breakdownPragraph:
      "We prioritize eco-friendly farming methods to protect the environment and ensure a healthier planet for future generations.",
  },

  {
    header: "Quality",
    breakdownPragraph:
      " We're dedicated to delivering top-notch products sourced from local farmers who share our commitment to excellence.",
  },

  {
    header: "Integrity",
    breakdownPragraph:
      "We build solutions we know you need, not just what we think you need. Our products are a result of painstaking research backed by customer validation.",
  },

  {
    header: "Empowerment",
    breakdownPragraph:
      " We support local farmers, particularly women and youth, by providing access to markets and resources for success.",
  },

  {
    header: "Innovation",
    breakdownPragraph:
      "We embrace technology and modern practices to revolutionize food production, distribution, and consumption for a more efficient and sustainable supply chain.",
  },

  {
    header: "Community",
    breakdownPragraph:
      "We work to build strong, collaborative communities through partnerships and initiatives that promote social cohesion and economic empowerment.",
  },
];

const BannerBlock = () => {
  return (
    <>
      <section className={`grid grid-cols-1 p-10`}>
        <div
          className={`p-8 lg:p-16 rounded-3xl shadow-sm bg-brandLightGreen3x md:w-1/2`}
        >
          <h1
            className={`text-xl md:text-2xl lg:text-4xl font-remBlack pb-5`}
          >
            Our Values
          </h1>
          <p className={`font-remRegular text-sm md:text-base`}>
          Climax Green is guided by core values of sustainability, quality, integrity, empowerment, innovation, and community.

          </p>
        </div>
        <aside className={`grid md:grid-cols-3 gap-3 py-10`}>
          {values.map((value, index) => {
            return (
              <article
                className={`p-8 lg:p-16 rounded-3xl shadow-sm bg-brandLightGreen4x`}
                key={index}
              >
                <h1
                  className={`text-xl md:text-2xl lg:text-3xl font-remBlack pb-5`}
                >
                  {value.header}
                </h1>
                <p className={`font-remRegular text-sm`}>
                  {value.breakdownPragraph}
                </p>
              </article>
            );
          })}
        </aside>
      </section>
    </>
  );
};

export default BannerBlock;
