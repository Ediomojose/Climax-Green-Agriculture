const TeamDetails = [
  {
    fullName: "Emmanuel Eluba",
    img: "https://res.cloudinary.com/dtiqegodx/image/upload/v1713104419/Climax%20Green%20Agriculture/DRAMFUN_pyoilz.jpg",
    role: "Co-founder/Managing Partner",
  },

  {
    fullName: "Stephen Ebuka Onyema-Osuji",
    img: "https://res.cloudinary.com/dtiqegodx/image/upload/v1713104257/Climax%20Green%20Agriculture/Screenshot_20240413-081529_o3b9xv.jpg",
    role: "Co-founder/ Chief Operating Officer (COO)",
  },

  {
    fullName: "Uchenu Francis",
    img: "https://res.cloudinary.com/dtiqegodx/image/upload/v1713104248/Climax%20Green%20Agriculture/IMG-20240411-WA0003_phlzef.jpg",
    role: "Chief Marketing Officer(CMO)",
  },

  {
    fullName: "Ifeoma Victoria Ugboaja",
    img: "https://res.cloudinary.com/dtiqegodx/image/upload/v1713104262/Climax%20Green%20Agriculture/IMG_20240412_135614_rx3gxh.jpg",
    role: "HR Director",
  },

  {
    fullName: "Oguama Chukwunonso",
    img: "https://res.cloudinary.com/dtiqegodx/image/upload/v1713104160/Climax%20Green%20Agriculture/IMG_20230806_111535-removebg-preview_jhklll.png",
    role: "Head of Partnership and Community Engagement",
  },

  {
    fullName: "Chidi Darlington Chidiebube",
    img: "https://res.cloudinary.com/dtiqegodx/image/upload/v1713104252/Climax%20Green%20Agriculture/IMG-20240413-WA0043_dgwnw2.jpg",
    role: "Head of strategy, innovation and Policy",
  },

  {
    fullName: "Ikpe Josephine",
    img: "https://res.cloudinary.com/dtiqegodx/image/upload/v1713444866/ikpe_uykv6j.jpg",
    role: "Chief Sustainability Officer (CSO)",
  },
];

const TeamBanner = () => {
  return (
    <>
      <section className={`py-16 flex flex-col px-10 bg-brandLightGreen3x`}>
        <div className={`pb-5`}>
          <p className={`font-centurygothicBold text-lg text-brandBrown2x`}>
            Professional People
          </p>
          <h1
            className={`text-3xl md:text-4xl lg:text-6xl font-remBlack text-brandGreen1x`}
          >
            Meet the Team
          </h1>
        </div>
        <section
          className={`grid gap-5 grid-cols-2 md:grid-cols-3 justify-center items-center`}
        >
          {TeamDetails.map((teamdetail, index) => {
            return (
              <article
                className={`flex flex-col items-center justify-center py-5`}
                key={index}
              >
                <img
                  src={teamdetail.img}
                  alt=""
                  className={`rounded-full w-32 h-32 md:w-40 md:h-40`}
                />
                <div className={`flex flex-col justify-center items-center`}>
                  <h1 className={`font-remMedium text-base`}>
                    {teamdetail.fullName}
                  </h1>
                  <p className={`font-remRegular text-xs `}>
                    {teamdetail.role}
                  </p>
                </div>
              </article>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default TeamBanner;
