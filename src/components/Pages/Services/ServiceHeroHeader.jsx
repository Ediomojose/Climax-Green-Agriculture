
const ServiceHeroHeader = () => {
  return (
    <>
      <main className={`pt-10`}>
      <header
          className={`flex flex-col justify-center items-center pt-42  px-5 md:px-20 lg:px-40`}
        >
          <div className= {`lg:px-28`}>
            <h1
              className={`font-remBlack text-3xl  pb-5 text-center md:text-5xl lg:text-7xl  drop-shadow-lg text-brandGreen1x`}
            >
              <span className={`text-brandBrown2x`}>Decentralized</span> agricultural market
            </h1>
            <p className={`font-remRegular text-center pb-5 text-sm md:text-base lg:text-xl`}>Our decentralized digital agricultural market platform is designed
            to connect local farmers directly with consumers based within their
            locality. Our digital platform enables quick access to markets, fair
            pricing, reduces wastage experienced by farmers by connecting them
            to buyers, and more.</p>
          </div>
          <img
            src="https://res.cloudinary.com/drkfpblmu/image/upload/v1712340915/Climax%20Green%20Agriculture/Hero_Image_rndmnf.png"
            alt="cassava leaf cassava plantation climax green agriculture"
            loading="lazy"
            className={`w-full `}
          />
        </header>
        <aside className={`bg-brandLightGreen4x py-10 px-16 my-16`}>
          <h3 className={`text-xl md:text-2xl lg:text-4xl font-remBlack pb-5 text-brandGreen1x`}>Key Features</h3>
          <div className={`text-sm md:text-base lg:text-xl flex flex-col gap-4`}>
            <div className={`flex items-center gap-2`}>
              <svg
                width="15"
                height="16"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.6 15.1L15.65 8.05L14.25 6.65L8.6 12.3L5.75 9.45L4.35 10.85L8.6 15.1ZM10 20.5C8.61667 20.5 7.31667 20.2373 6.1 19.712C4.88333 19.1867 3.825 18.4743 2.925 17.575C2.025 16.675 1.31267 15.6167 0.788 14.4C0.263333 13.1833 0.000666667 11.8833 0 10.5C0 9.11667 0.262667 7.81667 0.788 6.6C1.31333 5.38333 2.02567 4.325 2.925 3.425C3.825 2.525 4.88333 1.81267 6.1 1.288C7.31667 0.763333 8.61667 0.500667 10 0.5C11.3833 0.5 12.6833 0.762667 13.9 1.288C15.1167 1.81333 16.175 2.52567 17.075 3.425C17.975 4.325 18.6877 5.38333 19.213 6.6C19.7383 7.81667 20.0007 9.11667 20 10.5C20 11.8833 19.7373 13.1833 19.212 14.4C18.6867 15.6167 17.9743 16.675 17.075 17.575C16.175 18.475 15.1167 19.1877 13.9 19.713C12.6833 20.2383 11.3833 20.5007 10 20.5Z"
                  fill="#A06C20"
                />
              </svg>
              <p className="">Cassava Production and Processing</p>
            </div>
            <div className={`flex items-center gap-2`}>
              <svg
                width="15"
                height="16"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.6 15.1L15.65 8.05L14.25 6.65L8.6 12.3L5.75 9.45L4.35 10.85L8.6 15.1ZM10 20.5C8.61667 20.5 7.31667 20.2373 6.1 19.712C4.88333 19.1867 3.825 18.4743 2.925 17.575C2.025 16.675 1.31267 15.6167 0.788 14.4C0.263333 13.1833 0.000666667 11.8833 0 10.5C0 9.11667 0.262667 7.81667 0.788 6.6C1.31333 5.38333 2.02567 4.325 2.925 3.425C3.825 2.525 4.88333 1.81267 6.1 1.288C7.31667 0.763333 8.61667 0.500667 10 0.5C11.3833 0.5 12.6833 0.762667 13.9 1.288C15.1167 1.81333 16.175 2.52567 17.075 3.425C17.975 4.325 18.6877 5.38333 19.213 6.6C19.7383 7.81667 20.0007 9.11667 20 10.5C20 11.8833 19.7373 13.1833 19.212 14.4C18.6867 15.6167 17.9743 16.675 17.075 17.575C16.175 18.475 15.1167 19.1877 13.9 19.713C12.6833 20.2383 11.3833 20.5007 10 20.5Z"
                  fill="#A06C20"
                />
              </svg>
              <p className="">Mechanization of production line</p>
            </div>
            <div className={`flex items-center gap-2`}>
              <svg
                width="15"
                height="16"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.6 15.1L15.65 8.05L14.25 6.65L8.6 12.3L5.75 9.45L4.35 10.85L8.6 15.1ZM10 20.5C8.61667 20.5 7.31667 20.2373 6.1 19.712C4.88333 19.1867 3.825 18.4743 2.925 17.575C2.025 16.675 1.31267 15.6167 0.788 14.4C0.263333 13.1833 0.000666667 11.8833 0 10.5C0 9.11667 0.262667 7.81667 0.788 6.6C1.31333 5.38333 2.02567 4.325 2.925 3.425C3.825 2.525 4.88333 1.81267 6.1 1.288C7.31667 0.763333 8.61667 0.500667 10 0.5C11.3833 0.5 12.6833 0.762667 13.9 1.288C15.1167 1.81333 16.175 2.52567 17.075 3.425C17.975 4.325 18.6877 5.38333 19.213 6.6C19.7383 7.81667 20.0007 9.11667 20 10.5C20 11.8833 19.7373 13.1833 19.212 14.4C18.6867 15.6167 17.9743 16.675 17.075 17.575C16.175 18.475 15.1167 19.1877 13.9 19.713C12.6833 20.2383 11.3833 20.5007 10 20.5Z"
                  fill="#A06C20"
                />
              </svg>
              <p className="">Organic and nutritious foods</p>
            </div>
            <div className={`flex items-center gap-2`}>
              <svg
                width="15"
                height="16"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.6 15.1L15.65 8.05L14.25 6.65L8.6 12.3L5.75 9.45L4.35 10.85L8.6 15.1ZM10 20.5C8.61667 20.5 7.31667 20.2373 6.1 19.712C4.88333 19.1867 3.825 18.4743 2.925 17.575C2.025 16.675 1.31267 15.6167 0.788 14.4C0.263333 13.1833 0.000666667 11.8833 0 10.5C0 9.11667 0.262667 7.81667 0.788 6.6C1.31333 5.38333 2.02567 4.325 2.925 3.425C3.825 2.525 4.88333 1.81267 6.1 1.288C7.31667 0.763333 8.61667 0.500667 10 0.5C11.3833 0.5 12.6833 0.762667 13.9 1.288C15.1167 1.81333 16.175 2.52567 17.075 3.425C17.975 4.325 18.6877 5.38333 19.213 6.6C19.7383 7.81667 20.0007 9.11667 20 10.5C20 11.8833 19.7373 13.1833 19.212 14.4C18.6867 15.6167 17.9743 16.675 17.075 17.575C16.175 18.475 15.1167 19.1877 13.9 19.713C12.6833 20.2383 11.3833 20.5007 10 20.5Z"
                  fill="#A06C20"
                />
              </svg>
              <p className="">Adoption of Climate change practices</p>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default ServiceHeroHeader;
