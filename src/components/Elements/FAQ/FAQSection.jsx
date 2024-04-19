// component
import SingleFaq from "./SingleFaq";

const FaqSection = () => {
  const faqs = [
    {
      id: 1,
      question: "What is Garri?",
      answer:
        "Garri is a traditional West African staple food made from cassava tubers. It is finely ground and fermented, resulting in a versatile and nutritious product. ",
    },
    {
      id: 2,
      question: "What are the benefits of Garri?",
      answer:
        "Garri is a rich source of carbohydrates and provides essential nutrients. It is gluten-free and suitable for individuals with dietary restrictions. Garri can be used in various culinary applications, such as porridge, fufu, and snacks.",
    },
    {
      id: 3,
      question: " What varieties of Garri do you offer?",
      answer:
        "We offer a range of Garri varieties, including regular, fine, and coarse textures, to suit different preferences and culinary needs.",
    },
    {
      id: 4,
      question: "What are Cassava Peel Products (HQCP)?",
      answer:
        "Cassava Peel Products (HQCP) are nutritious feed options for livestock made from dried and processed cassava peels. They are high in fiber and provide a low-cost alternative feed source for animals.",
    },
    {
      id: 5,
      question: "What are the benefits of Cassava Peel Products (HQCP)",
      answer:
        "Cassava Peel Products (HQCP) improve animal health and productivity, reduce feed costs, and contribute to sustainable agriculture practices by utilizing cassava peels that would otherwise go to waste.",
    },
    {
      id: 6,
      question: "How can I place an order?",
      answer:
        "You can place an order for our products through our website's online ordering system. Simply browse our product catalog, select the items you wish to purchase, and proceed to checkout. For further assistance, you can contact us via phone or email.",
    },
    {
      id: 7,
      question: "Do you offer bulk ordering options?",
      answer:
        "Yes, we offer bulk ordering options for customers who require larger quantities of our products. Please contact us directly to discuss your specific needs and to receive pricing and availability information. ",
    },
    {
      id: 8,
      question:
        "What measures do you take to ensure the quality and safety of your products?",
      answer:
        "At Climax Green, we are committed to maintaining the highest standards of quality and safety for our products. We adhere to strict quality control measures, including sourcing from trusted suppliers, conducting regular testing and inspections, and complying with relevant food safety regulations.",
    },
    {
      id: 9,
      question: "What are your delivery options?",
      answer:
        "We offer various delivery options to accommodate our customers' needs. Delivery methods may include local pickup, courier services, or shipping via postal carriers. Delivery charges and timelines may vary depending on your location and order size.",
    },
    {
      id: 10,
      question: "Can I find your products in local stores?",
      answer:
        "Currently, our products are available for purchase exclusively through our website. However, we are continually exploring partnerships with local retailers and distributors to expand our presence in the market.",
    },
  ];
  return (
    <>
      <main>
        <div className={`px-5 my-24`}>
          <div className={`text-center`}>
            <h1
              className={`text-4xl font-josefinsansBold text-brandGreen1x lg:text-[40px] text-brandGreen2 xl:leading-[48.41px]`}
            >
              Frequently <br /> Asked Questions
            </h1>
          </div>
          <div
            className={`flex flex-col gap-y-2.5 mt-10 lg:mt-16 mx-auto my-0 md:w-4/5 lg:w-3/5`}
          >
            {faqs.map((faq) => (
              <SingleFaq key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default FaqSection;
