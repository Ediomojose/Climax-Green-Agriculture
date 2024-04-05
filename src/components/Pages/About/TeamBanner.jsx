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
];

const TeamBanner = () => {
  return (
    <>
      <section className={`py-24`}>
        <div className={``}>
          <p className={`font-centurygothicBold text-lg text-brandBrown2x`}>
            Professional People
          </p>
          <h1
            className={`text-2xl md:text-4xl lg:text-5xl font-remBlack text-brandGreen1x`}
          >
            Meet the Team
          </h1>
        </div>
        <section className={`grid grid-cols-4 justify-center items-center`}>
            {TeamDetails.map((teamdetail, index)=>{
                return(
                    <article className={``} key={index}>
                        <img src={teamdetail.img} alt="" className={`rounded`}/>
                        <div className="">
                            <h1 className="">{teamdetail.fullName}</h1>
                            <p className="">{teamdetail.role}</p>
                        </div>
                    </article>
                )
            })}
            </section>
      </section>
    </>
  );
};

export default TeamBanner;
