  
const benefitOfProduct = [
  {
    header: "Fresh, Local Produce",
    breakdownPragraph:
      "Our digital marketplace connects farmers directly to local and global markets, eliminating intermediaries and ensuring fair prices.",
  },

  {
    header: "Nutritious Options",
    breakdownPragraph:
      " Partnering with Climax Green promotes sustainable farming methods, preserving soil health and biodiversity.",
  },
  {
    header: "Gluten-Free and Allergen-Friendly",
    breakdownPragraph:
      "We offer training programs to empower farmers with the knowledge and skills needed for success.",
  },

  {
    header: "Convenience",
    breakdownPragraph:
      "Farmers can sell more produce and earn higher income by reaching a wider market through Climax Green's platform.",
  },
  {
    header: "Transparent Sourcing",
    breakdownPragraph:
      " Our platform helps minimize post-harvest losses by providing a reliable market for farmers' produce, reducing waste and maximizing value.",
  },

  {
    header: "Variety",
    breakdownPragraph:
      "Supporting local farmers contributes to the economic development and resilience of rural communities",
  },
];

const ProductBenefit = () => {
  return (
    <>
      <section className={`grid grid-cols-1 p-0 md:p-10`}>
        <div
          className={`p-5 lg:p-16 rounded-3xl shadow-sm bg-brandLightGreen3x `}
        >
          <h1 className={`text-xl md:text-2xl lg:text-4xl font-josefinsansBold text-brandGreen1x`}>
            Benefit to Farmers
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
                  <p className={`font-remRegular text-xm md:text-base text-brand`}>
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
