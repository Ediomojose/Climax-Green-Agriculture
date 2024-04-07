const TeamDetails = [
  {
    fullName: "Henry Agu",
    img: "https://res.cloudinary.com/drkfpblmu/image/upload/v1712340911/Climax%20Green%20Agriculture/team-1-1_xe2sir.png",
    role: "Farm Manager",
  },

  {
    fullName: "Henry Agu",
    img: "https://res.cloudinary.com/drkfpblmu/image/upload/v1712340911/Climax%20Green%20Agriculture/team-1-1_xe2sir.png",
    role: "Farm Manager",
  },

  {
    fullName: "Henry Agu",
    img: "https://res.cloudinary.com/drkfpblmu/image/upload/v1712340911/Climax%20Green%20Agriculture/team-1-1_xe2sir.png",
    role: "Farm Manager",
  },

  {
    fullName: "Henry Agu",
    img: "https://res.cloudinary.com/drkfpblmu/image/upload/v1712340911/Climax%20Green%20Agriculture/team-1-1_xe2sir.png",
    role: "Farm Manager",
  },

  {
    fullName: "Henry Agu",
    img: "https://res.cloudinary.com/drkfpblmu/image/upload/v1712340911/Climax%20Green%20Agriculture/team-1-1_xe2sir.png",
    role: "Farm Manager",
  },

  {
    fullName: "Henry Agu",
    img: "https://res.cloudinary.com/drkfpblmu/image/upload/v1712340911/Climax%20Green%20Agriculture/team-1-1_xe2sir.png",
    role: "Farm Manager",
  },

  {
    fullName: "Henry Agu",
    img: "https://res.cloudinary.com/drkfpblmu/image/upload/v1712340911/Climax%20Green%20Agriculture/team-1-1_xe2sir.png",
    role: "Farm Manager",
  },

  {
    fullName: "Henry Agu",
    img: "https://res.cloudinary.com/drkfpblmu/image/upload/v1712340911/Climax%20Green%20Agriculture/team-1-1_xe2sir.png",
    role: "Farm Manager",
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
        <section className={`grid gap-5 grid-cols-2 md:grid-cols-4 justify-center items-center`}>
          {TeamDetails.map((teamdetail, index) => {
            return (
              <article className={`flex flex-col items-center justify-center py-5`} key={index}>
                <img src={teamdetail.img} alt="" className={`rounded-full w-32 h-32 md:w-40 md:h-40`} />
                <div className={`flex flex-col justify-center items-center`}>
                  <h1 className={`font-remMedium text-base`}>{teamdetail.fullName}</h1>
                  <p className={`font-remRegular text-xs `}>{teamdetail.role}</p>
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
