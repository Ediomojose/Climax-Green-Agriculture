import HeroImg from "../../../assets/media/images/Hero_Image.png";
import Gallery from "../../../assets/media/images/countryside-man-disinfecting-field.jpg";

const AboutOverview = () => {
  return (
    <>
      <section className="">
        <header
          className={`flex flex-col justify-center items-center pt-42  px-5 md:px-20 lg:px-40`}
        >
          <div className= {`lg:px-28`}>
            <h1
              className={`font-remBlack text-3xl pt-28 pb-5 text-center md:text-5xl lg:text-7xl  drop-shadow-lg text-brandGreen1x`}
            >
              Your trusted partner in <span className={`text-brandBrown2x`}>sustainable</span> agriculture
            </h1>
            <p className={`font-remRegular text-center pb-5 text-sm md:text-base lg:text-xl`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quos a aperiam, qui sapiente placeat nostrum. Minus eos, hic tempora quaerat quo non, modi corrupti assumenda autem architecto placeat totam. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <img
            src="https://res.cloudinary.com/drkfpblmu/image/upload/v1712340915/Climax%20Green%20Agriculture/Hero_Image_rndmnf.png"
            alt="cassava leaf cassava plantation climax green agriculture"
            loading="lazy"
            className={`w-full `}
          />
        </header>
        <main
          className={`grid md:grid-cols-2 justify-center items-center gap-10 bg-brandLightGreen2x px-10 py-20 leading-7`}
        >
          <article className="">
            <h1
              className={`text-3xl lg:text-4xl font-josefinsansBold text-brandGreen1x border-b-4 border-brandBrown2x`}
            >
              Our Story
            </h1>
            <div
              className={`flex flex-col gap-5 font-remRegular text-justify pt-5`}
            >
              <p className="">
                At Climax Green, we recognized the challenges faced by cassava
                farmers, including significant wastage of their produce due to
                limited access to markets and processing facilities.
              </p>
              <p className="">
                In response, we embarked on a journey to transform cassava into
                essential staple foods such as Garri, as well as high-quality
                cassava peel products (HQCP) for animal consumption.
              </p>
              <p className="">
                Additionally, our mission extends to establishing a
                decentralized digital agricultural marketplace, facilitating
                direct connections between local farmers and global buyers for
                the sale of diverse farm produce.
              </p>
            </div>
          </article>
          <img
            src={Gallery}
            alt="Climax Green Agriculture"
            srcset=""
            className={``}
          />
        </main>
      </section>
    </>
  );
};

export default AboutOverview;
