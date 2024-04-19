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
      profession: "Cassava Farmaer",
    },
    {
      author: "Nze Chukwuma Onyema",
      testimony:
        "Climax Green has brought great relief for us farmers, especially cassava farmers. We can do farm and know there is someone to buy it anytime we want to sell. I really thank God, and I pray God should give them the resources they need to complete the digital platform they are creating for Farmers so that other non-cassava farmers will benefit",
      profession: "Cassava Farmaer",
    },
    {
      author: "Abdullahi S.",
      testimony:
        "I've been a loyal customer of Climax Green since they started, and I can't recommend their products enough! The Garri is always top-notch, and the convenience of ordering online and having it delivered to my doorstep is unbeatable. Plus, knowing that I'm supporting local farmers and sustainable agriculture makes it a win-win!",
      profession: "Cassava Farmaer",
    },
    {
      author: "Chukwuebuka O.",
      testimony:
        "I can't get enough of Climax Green's Garri! As someone with gluten sensitivities, finding a gluten-free staple like Garri has been a game-changer for me. The coarse texture Garri is my go-to for making snacks like Garri soakings. It's delicious, nutritious, and supports sustainable farming practices. What more could you ask for?",
      profession: "Cassava Farmaer",
    },
    {
      author: "Elena M.",
      testimony:
        "I've been buying Garri from Climax Green for years, and it never disappoints! The fine texture Garri is my favorite for making eba. It's always fresh and has that authentic taste I love. Plus, knowing that I'm supporting local farmers and sustainable agriculture makes it even better!",
      profession: "Cassava Farmaer",
    },
    {
      author: "Michael K.",
      testimony:
        "I recently started using Climax Green's HQCP for my poultry farm, and I'm impressed with the results! My chickens love it, and I've noticed an improvement in their overall health and egg production. It's great to have a high-quality, affordable feed option that also helps reduce food waste",
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
