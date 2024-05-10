const benefitToFarmers = [
  {
    header: "Access to Market",
    breakdownPragraph:
      "Our digital marketplace connects farmers directly to local and global markets, eliminating intermediaries and ensuring fair prices.",
  },

  {
    header: "Sustainable Practices",
    breakdownPragraph:
      " Partnering with Climax Green promotes sustainable farming methods, preserving soil health and biodiversity.",
  },
  {
    header: "Training and Support",
    breakdownPragraph:
      "We offer training programs to empower farmers with the knowledge and skills needed for success.",
  },

  {
    header: "Increased Revenue",
    breakdownPragraph:
      "Farmers can sell more produce and earn higher income by reaching a wider market through Climax Green's platform.",
  },
  {
    header: "Reduced Losses",
    breakdownPragraph:
      " Our platform helps minimize post-harvest losses by providing a reliable market for farmers' produce, reducing waste and maximizing value.",
  },

  {
    header: "Community Development",
    breakdownPragraph:
      "Supporting local farmers contributes to the economic development and resilience of rural communities",
  },
];

const benefitToCustomers = [
  {
    header: "Fresh, Local Produce",
    breakdownPragraph:
      " Customers enjoy fresh, locally sourced products directly from farmers, promoting sustainability and ethical consumption.",
  },

  {
    header: "Nutritious Options",
    breakdownPragraph:
      "Our HQCP products offer essential nutrients without additives, providing a healthy alternative to processed foods.",
  },
  {
    header: "Gluten-Free and Allergen-Friendly",
    breakdownPragraph:
      "Naturally gluten-free and allergen-free, our products accommodate diverse dietary needs",
  },

  {
    header: "Convenience",
    breakdownPragraph:
      " Our online platform enables easy ordering and delivery, saving customers time and effort.",
  },
  {
    header: "Transparent Sourcing",
    breakdownPragraph:
      " Customers can trace their food's journey from farm to table, ensuring ethical and sustainable practices. ",
  },

  {
    header: "Variety",
    breakdownPragraph:
      "Our products offer culinary versatility, catering to traditional and innovative tastes alike.",
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
            {benefitToFarmers.map((benefitToFarmers, index) => {
              return (
                <article
                  className={`p-8 lg:p-14 rounded-3xl shadow-sm bg-brandLightGreen4x`}
                  key={index}
                >
                  <h1
                    className={`text-lg md:text-xl lg:text-2xl font-remBlack pb-5 text-brandBrown2x`}
                  >
                    {benefitToFarmers.header}
                  </h1>
                  <p className={`font-remRegular text-xm md:text-base text-brand`}>
                    {benefitToFarmers.breakdownPragraph}
                  </p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className={`grid grid-cols-1 p-0 md:p-10`}>
        <div
          className={`p-5 lg:p-16 rounded-3xl shadow-sm bg-brandLightGreen3x `}
        >
          <h1 className={`text-xl md:text-2xl lg:text-4xl font-remBlack text-brandGreen1x`}>
          Benefits to our Customers
          </h1>
          <aside className={`grid md:grid-cols-2 gap-3 py-10`}>
            {benefitToCustomers.map((benefitToCustomers, index) => {
              return (
                <article
                  className={`p-8 lg:p-14 rounded-3xl shadow-sm bg-brandLightGreen4x`}
                  key={index}
                >
                  <h1
                    className={`text-lg md:text-xl lg:text-2xl font-remBlack pb-5 text-brandBrown2x`}
                  >
                    {benefitToCustomers.header}
                  </h1>
                  <p className={`font-remRegular text-xm md:text-base text-brand`}>
                    {benefitToCustomers.breakdownPragraph}
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
