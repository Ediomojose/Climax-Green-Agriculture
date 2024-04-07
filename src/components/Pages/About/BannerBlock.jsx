const values = [
  {
    header: "Customer-focus",
    breakdownPragraph:
      "We build solutions we know you need, not just what we think you need. Our products are a result of painstaking research backed by customer validation.",
  },

  {
    header: "Customer-focus",
    breakdownPragraph:
      "We build solutions we know you need, not just what we think you need. Our products are a result of painstaking research backed by customer validation.",
  },

  {
    header: "Customer-focus",
    breakdownPragraph:
      "We build solutions we know you need, not just what we think you need. Our products are a result of painstaking research backed by customer validation.",
  },

  {
    header: "Customer-focus",
    breakdownPragraph:
      "We build solutions we know you need, not just what we think you need. Our products are a result of painstaking research backed by customer validation.",
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
            Pandascrow is a technology company that solves payment problems for
            ambitious businesses. Our mission is to provide African businesses &
            individuals with safety, ease and flexibility when carrying out
            online transactions.
          </p>
        </div>
        <aside className={`grid md:grid-cols-2 gap-3 py-16`}>
          {values.map((value, index) => {
            return (
              <article
                className={`p-8 lg:p-16 rounded-3xl shadow-sm bg-brandLightGreen4x`}
                key={index}
              >
                <h1
                  className={`text-xl md:text-2xl lg:text-4xl font-remBlack pb-5`}
                >
                  {value.header}
                </h1>
                <p className={`font-remRegular text-sm md:text-base`}>
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
