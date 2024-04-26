import SocialMediaData from "../../../data/socialMediaData/SocialMediaData";
import LocIcon from "../../../assets/media/icons/icons8-location-30.png";
import EmailIcon from "../../../assets/media/icons/icons8-email-30.png";


const AddressContainer = () => {
  return (
    <>
      <section
        className={`grid grid-cols-1 md:grid-cols-2 justify-center items-cente bg-brandLightGreen1x divide-y-4 md:divide-y-0 md:divide-x-4 p-10 md:mx-16 shadow-xl mb-10`}
      >
        <aside className={` md:px-10`}>
          <h1 className={`text-xl md:text-2xl font-remBlack text-brandGreen1x`}>
            Contact us
          </h1>
          <div className={`py-5`}>
            <ul className={`flex gap-4`}>
              {SocialMediaData.map((item, idx) => {
                return (
                  <li key={idx}>
                    <a href={item.link}>{item.svg}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className={`text-base font-josefinsansRegular text-justify	`}>
            For further inquiries, feel free to reach out to us with the numbers
            and email address stated here or reach out on any of our social
            media handles.
          </p>

          <div className={`flex gap-3 items-center pt-3`}>
            <img src={EmailIcon} alt="location icon climax green agriculture" />
            <a href="mailto:climaxgreenltd@gmail.com" className={`flex flex-col font-josefinsansRegular text-base`}>
              <span className={`font-centurygothicBold`}>
                Email Address:{" "}
              </span>
              climaxgreenltd@gmail.com
            </a>
          </div>
        </aside>
        <aside className={`md:px-10`}>
          <h1
            className={`text-xl md:text-2xl font-remBlack text-brandGreen1x pb-2`}
          >
           Address
          </h1>
          <p className={`text-base font-josefinsansRegular text-justify	`}>
            Perhaps pay us a visit us either in our factory or office addres as
            stated below, we will be thrilled that you dropped by.
          </p>
          <div className={`flex gap-3 items-center pt-3`}>
            <img src={LocIcon} alt="location icon climax green agriculture" />
            <p className={`flex flex-col font-josefinsansRegular text-base`}>
              <span className={`font-centurygothicBold`}>Office Address: </span>
              Igbariam Ayamelum road, Igbariam Junction Anambra state
            </p>
          </div>

          <div className={`flex gap-3 items-center pt-3`}>
            <img src={LocIcon} alt="location icon climax green agriculture" />
            <p className={`flex flex-col font-josefinsansRegular text-base`}>
              <span className={`font-centurygothicBold`}>
                Factory Address:{" "}
              </span>
              Igbakwu Ifite Road, Igbakwu Anambra state
            </p>
          </div>
        </aside>
      </section>
    </>
  );
};

export default AddressContainer;
