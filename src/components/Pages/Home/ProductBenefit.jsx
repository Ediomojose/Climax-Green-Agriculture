const benefitOfProduct = [
  {
    header: "Fresh, Local Produce",
    breakdownPragraph:
      " Customers enjoy fresh, locally sourced products directly from farmers, promoting sustainability and ethical consumption.",
  },

  {
    header: "Nutritious Options",
    breakdownPragraph:
      " Our products offer essential nutrients without additives, providing a healthy alternative to processed foods.",
  },
  {
    header: "Gluten-Free and Allergen-Friendly",
    breakdownPragraph:
      " Naturally gluten-free and allergen-free, our products accommodate diverse dietary needs.",
  },

  {
    header: "Convenience",
    breakdownPragraph:
      "Our online platform enables easy ordering and delivery, saving customers time and effort.",
  },
  {
    header: "Transparent Sourcing",
    breakdownPragraph:
      " Customers can trace their food's journey from farm to table, ensuring ethical and sustainable practices.",
  },

  {
    header: "Variety",
    breakdownPragraph:
      "Our products offer culinary versatility, catering to traditional and innovative tastes alike.",
  },
];

const ProductBenefit = () => {
  return (
    <>
      <section className={`grid grid-cols-1 p-0 md:p-10`}>
        <div
          className={`p-5 lg:p-16 rounded-3xl shadow-sm bg-brandLightGreen3x `}
        >
          <h1
            className={`text-xl md:text-2xl lg:text-4xl font-josefinsansBold text-brandGreen1x`}
          >
            Benefit of our Products
          </h1>
          <aside className={`grid md:grid-cols-2 gap-3 py-10`}>
            {benefitOfProduct.map((benefitOfProduct, index) => {
              return (
                <article
                  className={`p-8 lg:p-14 rounded-3xl shadow-sm bg-brandLightGreen4x`}
                  key={index}
                >
                  <h1
                    className={`text-lg md:text-xl lg:text-2xl font-centurygothicBold pb-5 text-brandBrown2x`}
                  >
                    {benefitOfProduct.header}
                  </h1>
                  <p
                    className={`font-remRegular text-xm md:text-base text-brand`}
                  >
                    {benefitOfProduct.breakdownPragraph}
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

export default ProductBenefit;
