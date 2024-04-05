import HeroImg from "../../../assets/media/images/Hero_Image.png";
import Gallery from "../../../assets/media/images/countryside-man-disinfecting-field.jpg";

const AboutOverview = () => {
  return (
    <>
      <section className="">
        <header className={`flex flex-col justify-center items-center pt-42`}>
          <img
            src='https://res.cloudinary.com/drkfpblmu/image/upload/v1712340915/Climax%20Green%20Agriculture/Hero_Image_rndmnf.png'
            alt="cassava leaf cassava plantation climax green agriculture"
            loading="lazy"
            className={`w-full relative brightness-50`}
          />
          <h1
            className={`absolute font-remBlack text-6xl pt-10 md:text-7xl lg:text-8xl text-brandWhite1x shadow-2xl`}
          >
            About Us
          </h1>
        </header>
        <main
          className={`grid md:grid-cols-2 justify-center items-center gap-10 bg-brandLightGreen2x px-10 py-20 leading-7`}
        >
          <article className="">
            <h1
              className={`text-3xl lg:text-4xl font-josefinsansBold text-brandGreen1x border-b-4 border-brandBrown2x`}
            >
              Who we are
            </h1>
            <div className={`flex flex-col gap-5 font-remRegular text-justify pt-5`}>
              <p className="">
                Founded in July, 2020, Lonefa Integrated Farms has the overall
                goal of producing nutritious livestock and crops for food,
                alleviating poverty and hunger by providing employment to young
                people thereby promoting well being, excellent health and
                longevity in tandem with United Nation’s Sustainable Development
                Goals 1 2 3.
              </p>
              <p className="">
                Located in a spacious and serene environment in Igwuruta, Rivers
                State, Nigeria. Lonefa Integrated Farm is poised to
                revolutionize farming and agricultural practice by developing
                quality products in a hygienic environment, with affordable
                prices for local, national and international consumption.
              </p>
              <p className="">
                Staffed by amiable, skillful and dedicated workforce, LONEFA
                Integrated Farms offers a model and memorable experience in
                building relationships with customers and clients. Welcome to
                Lonefa Integrated Farms where Quality Is Key and Integrity is
                King!
              </p>
            </div>
          </article>
          <img src={Gallery} alt="Climax Green Agriculture" srcset="" className={``} />
        </main>
      </section>
    </>
  );
};

export default AboutOverview;
