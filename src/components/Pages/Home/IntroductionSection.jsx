import ProcessedCassava from "../../../assets/media/images/image 6.png";
import ProjectSVG from "../../../assets/media/icons/plant trace.svg";

const IntroductionSection = () => {
  return (
    <section className={`px-10 lg:px-28 py-10 lg:py-20 bg-brandLightGreen4x`}>
      <article className={` grid grid-cols-1 gap-10 md:grid-cols-2 lg:px-36 lg:py-20`}>
        <div className={`relative`}>
          <img
            src={ProcessedCassava}
            alt="Climax Green Agriculture: Farmers looking at the sunset"
            srcset=""
            className={`w-full`}
          />
          <div
            className={`flex justify-center items-center gap-3 bg-brandGreen1x px-3 py-4 absolute inset-x-0  bottom-3 w-4/5	rounded-xl mx-auto`}
          >
            <img
              src={ProjectSVG}
              alt="Icon of money and plant"
              className={` w-12`}
            />
            <div className={`text-white`}>
              <h4 className={`text-xl font-josefinsansBoldItalic`}>1,000</h4>
              <p className={`font-josefinsansMedium text-xxs`}>
                Projects sucessfully completed
              </p>
            </div>
          </div>
        </div>
        <div className={`flex flex-col gap-8`}>
          <p className={`font-centurygothicBold text-brandGreen1x`}>OUR INTRODUCTION</p>
          <h3 className={`text-2xl lg:text-4xl font-josefinsansBold text-brandGreen1x`}>Pure Agriculture and Organic Form</h3>
          <div className="">
            <p className={`text-lg font-remBold text-brandBrown2x`}>We’re Leader in Agriculture Market</p>
            <p className={'text-sm font-remRegular pt-1'}>
              There are many variations of passages of available but the
              majority have suffered alteration in some form, by injected humou
              or randomised words even slightly believable.
            </p>
          </div>
          <div className={`text-sm font-remRegular flex flex-col gap-4`}>
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
              <p className="">Organic food contains more vitamins</p>
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
              <p className="">Eat organic because supply meets demand</p>
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
              <p className="">Organic food is never irradiated</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default IntroductionSection;
