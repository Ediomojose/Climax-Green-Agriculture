const benefits = [
  {
    header: "Access to Market",
    breakdownPragraph:
      "Climax Green's digital decentralized agricultural marketplace provides farmers with direct access to local and global markets for their produce. This eliminates the need for intermediaries, allowing farmers to sell their products at fair prices and maximize their profits.",
  },

  {
    header: "Increased Revenue",
    breakdownPragraph:
      "We build solutions we know you need, not just what we think you need. Our products are a result of painstaking researBy connecting farmers directly with consumers, Climax Green helps farmers increase their revenue potential. With access to a wider market and fair pricing, farmers can sell more of their produce and generate higher income for themselves and their families.",
  },
  {
    header: "Reduced Post-Harvest Losses",
    breakdownPragraph:
      "Many farmers experience significant post-harvest losses due to lack of immediate access to markets or processing facilities. Climax Green's platform helps reduce these losses by providing farmers with a reliable market for their produce, minimizing waste and maximizing the value of their harvest.",
  },

  {
    header: "Market Information and Insights",
    breakdownPragraph:
      "Through Climax Green's digital platform, farmers gain access to valuable market information and insights, helping them make informed decisions about what to plant, when to harvest, and where to sell their products. This empowers farmers to optimize their production and marketing strategies for maximum profitability.",
  },
  {
    header: "Support for Sustainable Practices",
    breakdownPragraph:
      "Climax Green is committed to promoting sustainable agriculture practices, and by partnering with us, farmers become part of this important movement. Our products are sourced from farmers who employ sustainable farming methods, helping to preserve soil health, biodiversity, and environmental resources for future generations",
  },

  {
    header: "Training and Capacity Building",
    breakdownPragraph:
      "Climax Green offers training and capacity building programs to empower farmers with the knowledge and skills they need to succeed. Whether it's training in modern agricultural techniques, financial literacy, or digital marketing, we are dedicated to supporting farmers in their journey towards success",
  },
];
const BenefitContainer = () => {
  return (
    <>
      <section className={`grid grid-cols-1 p-0 md:p-10`}>
        <div
          className={`p-5 lg:p-16 rounded-3xl shadow-sm bg-brandLightGreen3x `}
        >
          <h1 className={`text-xl md:text-2xl lg:text-4xl font-remBlack text-brandGreen1x`}>
            Benefit to Farmers
          </h1>
          <aside className={`grid md:grid-cols-2 gap-3 py-10`}>
            {benefits.map((benefit, index) => {
              return (
                <article
                  className={`p-8 lg:p-16 rounded-3xl shadow-sm bg-brandLightGreen4x`}
                  key={index}
                >
                  <h1
                    className={`text-lg md:text-xl lg:text-2xl font-remBlack pb-5 text-brandBrown2x`}
                  >
                    {benefit.header}
                  </h1>
                  <p className={`font-remRegular text-xm md:text-base text-brand`}>
                    {benefit.breakdownPragraph}
                  </p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>
    </>
  );
};

export default BenefitContainer;
