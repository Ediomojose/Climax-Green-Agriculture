const Testimonials = () => {
  const testimonies = [
    {
      author: "Mrs. Egodi Nnalue",
      testimony:
        "I used to cultivate very small plots of cassava farm because there were no buyers. Thanks to Climax Green since they started mechanized processing of cassava, they now serve as a market for us to sell our cassava produces",
      profession: "Cassava Farmaer",
    },
    {
      author: "Monica Okwuigbo",
      testimony:
        "Before Climax Green, processing cassava to Garri was a rigorous process and it took days. Now, I can process my cassava to Garri within just a few hours.",
      profession: "Software Developer",
    },
    {
      author: "Nze Chukwuma Onyema",
      testimony:
        "Climax Green has brought great relief for us farmers, especially cassava farmers. We can do farm and know there is someone to buy it anytime we want to sell. I really thank God, and I pray God should give them the resources they need to complete the digital platform they are creating for Farmers so that other non-cassava farmers will benefit",
      profession: "Cassava Farmaer",
    },
    {
      author: "Philip Anthony",
      testimony:
        "Starting early allowed me to make mistakes and learn from them. As a young entrepreneur experimenting with different tech ventures, I gained invaluable insights and resilience that continue to shape my approach to innovation and problem-solving.",
      profession: "Cassava Farmaer",
    },
    {
      author: "Ozor Bryan",
      testimony:
        "Early immersion in tech cultivated a lifelong passion for learning. From tinkering with hardware to exploring the latest programming languages, my journey from a young age instilled in me a curiosity and hunger for knowledge that drives me forward every day.",
      profession: "Cassava Farmaer",
    },
  ];
  return (
    <>
      <section>
        <article
          className={`grid grid-cols-1 justify-center items-center gap-10 py-12 bg-brandLightGreen5x `}
        >
          <div
            className={`flex items-center justify-center px-5 md:px-10 lg:px-20`}
          >
            <div>
              <p
                className={`py-3 font-centurygothicBold uppercase text-brandBrown2x`}
              >
                Our Testimonials
              </p>
              <h2
                className={`text-xl font-remBold pb-2 md:text-3xl lg:text-3xl text-brandGreen1x`}
              >
                What they're talking about us{" "}
              </h2>
            </div>
          </div>
          <section
            className={`flex items-center  py-4 mx-5   gap-3 overflow-x-scroll snap-mandatory snap-x no-scrollbar lg:px-20 lg:mx-10`}
          >
            {testimonies.map((testimony, index) => (
              <div
                className={`grid grid-cols-1 gap-4 justify-center items-center w-full h-full lg:min-w-[439px] min-h-[281px]  shrink-0   bg-brandWhite1x/80 p-5 px-10 rounded-xl shadow-xl md:w-2/5`}
                key={index}
              >
                <p className={`text-6xl font-euclidItalicBold`}>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_3_553)">
                      <path
                        d="M64.2345 10.2943H49.411L39.5286 30.059V59.7061H69.1757V30.059H54.3521L64.2345 10.2943ZM24.7051 10.2943H9.88154L-0.000808716 30.059V59.7061H29.6462V30.059H14.8227L24.7051 10.2943Z"
                        fill="#A06C20"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3_553">
                        <rect width="70" height="70" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </p>
                <div className={`flex gap-4 `}>
                  <div>
                    <p className={`text-md font-remBold`}>{testimony.author}</p>
                    <p className={`text-xxs font-remBoldItalic md:text-xs`}>
                      {testimony.profession}
                    </p>
                  </div>
                </div>
                <p className={`text-xs font-remRegular lg:text-sm`}>
                  {testimony.testimony}
                </p>
              </div>
            ))}
          </section>
        </article>
      </section>
    </>
  );
};

export default Testimonials;
